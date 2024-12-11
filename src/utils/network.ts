import { defaultBaseApiPath } from '../config/apiConfig';

// Stricter rate limiting configuration
const RATE_LIMIT = {
  MAX_REQUESTS_PER_WINDOW: 2, // Even more conservative
  WINDOW_MS: 2000, // 2 second window
  MIN_REQUEST_SPACING_MS: 1000, // Minimum 1 second between requests
  RETRY_AFTER_429_MS: 8000, // Longer wait after 429
  MAX_RETRIES: 2,
  CACHE_TTL_MS: 60000 // Cache for 1 minute
};

// Simple cache implementation
class RequestCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();

  set(key: string, data: any) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    // Check if cache entry is still valid
    if (Date.now() - entry.timestamp > RATE_LIMIT.CACHE_TTL_MS) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  clear() {
    this.cache.clear();
  }
}

class RequestQueue {
  private queue: { timestamp: number }[] = [];
  private lastRequestTime = 0;
  private cache = new RequestCache();

  private cleanup() {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.WINDOW_MS;
    this.queue = this.queue.filter(req => req.timestamp > windowStart);
  }

  async waitIfNeeded(): Promise<void> {
    this.cleanup();

    // Check if we need to wait for the rate limit window
    if (this.queue.length >= RATE_LIMIT.MAX_REQUESTS_PER_WINDOW) {
      const oldestRequest = this.queue[0];
      const waitTime = oldestRequest.timestamp + RATE_LIMIT.WINDOW_MS - Date.now();
      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
        this.cleanup();
      }
    }

    // Ensure minimum spacing between requests
    const timeSinceLastRequest = Date.now() - this.lastRequestTime;
    if (timeSinceLastRequest < RATE_LIMIT.MIN_REQUEST_SPACING_MS) {
      await new Promise(resolve => 
        setTimeout(resolve, RATE_LIMIT.MIN_REQUEST_SPACING_MS - timeSinceLastRequest)
      );
    }
  }

  addRequest() {
    this.cleanup();
    this.lastRequestTime = Date.now();
    this.queue.push({ timestamp: this.lastRequestTime });
  }

  getCachedResponse(key: string) {
    return this.cache.get(key);
  }

  setCachedResponse(key: string, data: any) {
    this.cache.set(key, data);
  }
}

const requestQueue = new RequestQueue();

export class APIError extends Error {
  public status: number;
  public errors: string[];

  constructor(message: string, status: number, errors: string[] = []) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.errors = errors;
  }
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const apiRequest = async ({
  endpoint,
  body,
  method = 'GET',
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}: {
  endpoint: string;
  body: BodyInit | null;
  method?: string;
  headers?: HeadersInit;
}) => {
  const apiKey = import.meta.env.VITE_D3_API_KEY;
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
  const basePath = apiEndpoint || defaultBaseApiPath;
  const absolutePath = basePath + endpoint;
  const cacheKey = `${method}:${absolutePath}:${body}`;

  // Check cache first for GET requests
  if (method === 'GET') {
    const cachedResponse = requestQueue.getCachedResponse(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  let retries = 0;
  const requestHeaders = { ...headers, 'Api-Key': apiKey };

  while (retries <= RATE_LIMIT.MAX_RETRIES) {
    try {
      // Wait if we need to respect rate limits
      await requestQueue.waitIfNeeded();

      // Make the request
      requestQueue.addRequest();
      const response = await fetch(absolutePath, {
        method,
        headers: requestHeaders,
        ...(method === 'POST' && body && { body }),
      });

      // Handle rate limiting
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? 
          parseInt(retryAfter) * 1000 : 
          RATE_LIMIT.RETRY_AFTER_429_MS * (retries + 1);
        
        console.warn(`Rate limited, waiting ${waitTime}ms before retry`);
        await wait(waitTime);
        retries++;
        continue;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new APIError(
          errorData.message || 'API request failed',
          response.status,
          Array.isArray(errorData.message) ? errorData.message : [errorData.message]
        );
      }

      const data = await response.json();
      
      // Cache successful GET responses
      if (method === 'GET') {
        requestQueue.setCachedResponse(cacheKey, data);
      }

      return data;

    } catch (error) {
      if (error instanceof APIError && error.status !== 429) {
        throw error;
      }
      
      if (retries === RATE_LIMIT.MAX_RETRIES) {
        throw new APIError(
          'Maximum retry attempts reached',
          429,
          ['Too many requests, please try again later']
        );
      }

      retries++;
      await wait(RATE_LIMIT.RETRY_AFTER_429_MS * retries);
    }
  }

  throw new APIError(
    'Request failed after maximum retries',
    500,
    ['An unexpected error occurred']
  );
};