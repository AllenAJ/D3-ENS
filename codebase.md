# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# codebase2.md

```md
# .gitignore

\`\`\`
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

\`\`\`

# eslint.config.js

\`\`\`js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

\`\`\`

# index.html

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

\`\`\`

# package.json

\`\`\`json
{
  "name": "my-d3-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.62.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss": "^3.4.16",
    "viem": "^2.21.54",
    "wagmi": "^2.13.5",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/node": "^22.10.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
  }
}

\`\`\`

# public/vite.svg

This is a file of the type: SVG Image

# README.md

\`\`\`md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`

\`\`\`

# src/App.css

\`\`\`css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

\`\`\`

# src/App.tsx

\`\`\`tsx
// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { Cart } from './components/Cart';
import { useSearch } from './hooks/useSearch';
import { WagmiProvider } from 'wagmi';
import { getWagmiConfig } from './config/evmConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retryOnMount: true,
    },
  },
});

const wagmiConfig = getWagmiConfig();

function AppContent() {
  const {
    searchResults,
    isLoading,
    isError,
    error,
    handleSearchSubmit,
  } = useSearch();

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <div className="max-w-2xl mx-auto">
        <SearchBar onSearch={handleSearchSubmit} />
        <SearchResults 
          searchResults={searchResults}
          isLoading={isLoading}
          isError={isError}
          error={error}
          searchTerm={searchResults?.pageItems?.[0]?.sld}
        />
        <Cart />
      </div>
    </div>
  );
}

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

// src/config/evmConfig.ts

\`\`\`

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/Cart.tsx

\`\`\`tsx
// src/components/Cart.tsx
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';

export const Cart = () => {
  const { cart, removeFromCart } = useStore();
  
  const total = cart.items?.reduce((sum: number, item: SearchResult) => {
    const priceAsNumber = parseFloat(item.usdPrice) || 0;
    return sum + priceAsNumber;
  }, 0);

  if (!cart.items?.length) {
    return null;
  }

  return (
    <div className="p-4 bg-[#2b2b2b] text-white">
      <h2 className="text-xl font-bold mb-4">Cart ({cart.items.length} items)</h2>
      <div className="space-y-3">
        {cart.items.map((item: SearchResult) => (
          <div 
            key={item.sld + item.tld}
            className="flex justify-between items-center"
          >
            <span>{item.sld}.{item.tld}</span>
            <div className="flex gap-4 items-center">
              <span>${parseFloat(item.usdPrice).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="px-4 py-1 bg-[#1a1a1a] rounded hover:bg-[#2f2f2f]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right border-t border-gray-700 pt-4">
        <p className="text-lg">Total: ${total?.toFixed(2)}</p>
      </div>
    </div>
  );
};
\`\`\`

# src/components/SearchBar.tsx

\`\`\`tsx
import { useState } from 'react';

export const SearchBar = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const [value, setValue] = useState('');

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 border rounded px-3 py-2"
        placeholder="Search names..."
      />
      <button 
        onClick={() => onSearch(value)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};
\`\`\`

# src/components/SearchResultCard.tsx

\`\`\`tsx
// src/components/SearchResultCard.tsx
import clsx from 'clsx';
import { CircleCheck, CircleX } from 'lucide-react';
import type { SearchResult } from '../types/api';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

type SearchResultCardProps = {
  searchResult: SearchResult;
  handleCartAction: (searchResult: SearchResult) => void;
  isItemInCart: boolean;
  isCartLimitReached?: boolean;
};

export const SearchResultCard = ({
  searchResult,
  handleCartAction,
  isItemInCart,
  isCartLimitReached,
}: SearchResultCardProps) => {
  const isDomainAvailable = searchResult?.status?.toLowerCase() === 'available';

  return (
    <Card className={clsx(
      'drop-shadow-md border group w-full relative bg-[#1a1a1a] border-gray-800',
      isDomainAvailable && 'hover:shadow-md'
    )}>
      <div className="grid px-3 py-2">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex-1 space-y-1">
            <p className="text-lg font-semibold text-left break-all text-white">
              {searchResult.sld}.{searchResult.tld}
            </p>
            {isDomainAvailable ? (
              <p className="flex items-start gap-2">
                <span className="text-green-500">
                  <CircleCheck size={18} />
                </span>
                <span className="text-sm text-gray-400">Available</span>
              </p>
            ) : (
              <p className="flex items-start gap-2">
                <span className="text-red-500">
                  <CircleX size={18} />
                </span>
                <span className="text-sm text-gray-400 capitalize">
                  {searchResult?.status}
                </span>
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-white">${searchResult.usdPrice}</p>
            <p className="text-sm text-gray-400">
              {searchResult.nativeAmount} {searchResult.nativeCurrency}
            </p>
          </div>
          {isDomainAvailable && (
            <Button
              onClick={() => handleCartAction(searchResult)}
              disabled={!isDomainAvailable || (isCartLimitReached && !isItemInCart)}
              className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
              variant="secondary"
            >
              {isItemInCart ? 'Remove' : 'Add to Cart'}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
\`\`\`

# src/components/SearchResults.tsx

\`\`\`tsx
// src/components/SearchResults.tsx
import type { ApiErrorResponse, SearchResultRequestResponse } from '../types/api';
import { SearchResultCard } from '../components/SearchResultCard';
import { Skeleton } from './ui/Skeleton';
import { useCart } from '../hooks/useCart';
import { cn } from '../utils/twMerge';

type SearchResultsProps = {
  isError: boolean;
  isLoading: boolean;
  error: ApiErrorResponse | null;
  searchResults?: SearchResultRequestResponse;
  searchTerm?: string;
};

export function SearchResults({
  isError,
  isLoading,
  error,
  searchResults,
  searchTerm,
}: SearchResultsProps) {
  const { getIsItemInCart, handleAddToCart, handleRemoveFromCart, isCartLimitReached } = useCart();

  if (!searchTerm && !searchResults) return null;

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-3 p-4">
        <Skeleton className="h-[50px] w-50 rounded-xl" />
        <Skeleton className="h-[50px] w-50 rounded-xl" />
      </div>
    );
  }

  if (isError && error) {
    return (
      <div className="flex p-4">
        <p className="text-xs text-red-600 mt-1 text-left">{error?.message}</p>
      </div>
    );
  }

  if (!searchResults?.pageItems?.length) {
    return (
      <div className="flex p-4">
        <p className="text-sm mt-1 text-gray-300 text-left">
          No Search results found. Please try again with a different search
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className={cn('text-lg font-bold text-white text-left mb-3')}>Search Results</h2>
      <div className={cn('flex flex-col gap-y-4')}>
        {searchResults.pageItems.map((searchResult) => {
          const isItemInCart = getIsItemInCart(searchResult);
          return (
            <SearchResultCard
              key={searchResult.tld + searchResult.sld}
              searchResult={searchResult}
              isItemInCart={!!isItemInCart}
              isCartLimitReached={isCartLimitReached}
              handleCartAction={() => {
                if (isItemInCart) {
                  handleRemoveFromCart(searchResult);
                  return;
                }
                handleAddToCart(searchResult);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
\`\`\`

# src/components/ui/Button.tsx

\`\`\`tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/twMerge';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
\`\`\`

# src/components/ui/Card.tsx

\`\`\`tsx
import * as React from 'react';
import { cn } from '../../utils/twMerge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow',
        className
      )}
      {...props}
    />
  );
}
\`\`\`

# src/components/ui/Skeleton.tsx

\`\`\`tsx
import { cn } from "../../utils/twMerge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-700/20", className)}
      {...props}
    />
  );
}

export { Skeleton };
\`\`\`

# src/config/apiConfig.ts

\`\`\`ts
export const defaultBaseApiPath = 'https://api-public.d3.app';

// VITE_D3_API_KEY=your_api_key_here
// VITE_API_ENDPOINT=https://api-public.d3.app
\`\`\`

# src/config/constants.ts

\`\`\`ts
// src/config/constants.ts
export const searchParams = {
  sld: 'sld',
  tld: 'tld',
  limit: 'limit',
  skip: 'skip',
};

export const cacheKeys = {
  fetchSearchResults: 'FETCH_SEARCH_RESULTS',
  fetchPaymentMethods: 'FETCH_PAYMENT_METHODS',
  startCheckoutOrder: 'START_CHECKOUT_ORDER',
};

export const apiEndpoints = {
  search: '/v1/partner/search',
  paymentOptions: '/v1/partner/payment/options',
  startCheckoutOrder: '/v1/partner/order',
};

export const PAGE_SIZE = 12;
export const CART_LIMIT = 20;

export const currencyConfigForFractionDigits = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const numbersConfigForFractionDigits = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
};
\`\`\`

# src/config/evmConfig.ts

\`\`\`ts
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected } from 'wagmi/connectors';

const DEFAULT_POLLING_INTERVAL = 8_000;

export const getWagmiConfig = () => {
  const defaultAppMeta = {
    name: "D3 api demo",
    description: "Official Identity Service for Top web3 communities",
    url: window.location.origin,
    icons: ["https://d3.app/favicon.png"],
  };

  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      coinbaseWallet({
        appLogoUrl: defaultAppMeta.icons[0],
        darkMode: true,
      }),
      injected({ shimDisconnect: false }),
    ],
    ssr: true,
    syncConnectedChain: true,
    multiInjectedProviderDiscovery: true,
    cacheTime: DEFAULT_POLLING_INTERVAL,
    pollingInterval: DEFAULT_POLLING_INTERVAL,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
};
\`\`\`

# src/hooks/useCart.ts

\`\`\`ts
// src/hooks/useCart.ts
import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { CART_LIMIT } from '../config/constants';
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';
import type { Cart } from '../types/store';

type CartStore = {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}

export const useCart = () => {
  const { cart, addToCart, removeFromCart } = useStore(
    useShallow((state: CartStore) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
    }))
  );

  const isCartLimitReached = useMemo(() => {
    if (!cart?.items?.length) return false;
    return cart?.items?.length >= CART_LIMIT;
  }, [cart?.items]);

  const getIsItemInCart = useCallback(
    (domain: SearchResult) => {
      return cart.items?.find(
        (item: SearchResult) => item.sld === domain.sld && item.tld === domain.tld
      );
    },
    [cart.items]
  );

  const handleAddToCart = useCallback(
    async (domain: SearchResult) => {
      const isAlreadyInCart = getIsItemInCart(domain);
      if (isAlreadyInCart) return;
      addToCart(domain);
    },
    [addToCart, getIsItemInCart]
  );

  const handleRemoveFromCart = useCallback(
    async (domain: SearchResult) => {
      removeFromCart(domain);
    },
    [removeFromCart]
  );

  return {
    getIsItemInCart,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLimitReached,
  };
};
\`\`\`

# src/hooks/useFetchRequest.ts

\`\`\`ts
import { useQuery, type QueryKey } from '@tanstack/react-query';
import type { ApiErrorResponse } from '../types/api';
import { apiRequest } from '../utils/network';

export const useFetchRequest = <ApiResponseType = unknown, ApiErrorType = ApiErrorResponse>({
  queryKey,
  endpoint,
  queryParameters = { staleTime: Infinity, retry: false, refetchOnWindowFocus: false },
  method = 'GET',
  requestBody = null,
}: {
  queryKey: QueryKey;
  endpoint: string;
  queryParameters?: object;
  method?: 'GET' | 'POST' | 'PUT' | 'UPDATE';
  requestBody?: unknown;
}) => {
  const body = requestBody ? JSON.stringify(requestBody) : null;
  const { data, error, ...rest } = useQuery<ApiResponseType, ApiErrorType>({
    queryKey: [...queryKey],
    queryFn: async () => apiRequest({ endpoint, body, method }),
    ...queryParameters,
  });

  return { data, error, ...rest };
};
\`\`\`

# src/hooks/useSearch.ts

\`\`\`ts
import { useCallback, useMemo, useState } from 'react';
import { apiEndpoints, cacheKeys, PAGE_SIZE } from '../config/constants';
import { useFetchRequest } from './useFetchRequest';
import type { SearchResultRequestResponse } from '../types/api';

type SearchQueryParams = {
  sld: string;
  tld: string;
  skip: number;
  limit: number;
};

const appTlds = import.meta.env.VITE_TLDS || 'core,shib';

export const useSearch = () => {
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>({
    sld: '',
    tld: '',
    skip: 0,
    limit: PAGE_SIZE,
  });

  const searchUrlWithParams = useMemo(() => {
    const searchParams = new URLSearchParams(
      Object.keys(searchQueryParams).map((item) => [
        item,
        searchQueryParams[item as keyof typeof searchQueryParams] as string,
      ]),
    ).toString();
    return `${apiEndpoints.search}?${searchParams}`;
  }, [searchQueryParams]);

  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useFetchRequest<SearchResultRequestResponse>({
    queryKey: [
      cacheKeys.fetchSearchResults,
      { sld: searchQueryParams.sld, tld: searchQueryParams.tld },
    ],
    endpoint: searchUrlWithParams,
    queryParameters: {
      enabled: Boolean(searchQueryParams?.sld),
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  });

  const handleSearchSubmit = (sld: string) => {
    const tld = appTlds;
    setSearchQueryParams((old) => ({
      ...old,
      sld,
      tld,
    }));
  };

  return {
    searchQueryParams,
    searchResults,
    isLoading,
    isError,
    error,
    handleSearchSubmit,
  };
};
\`\`\`

# src/index.css

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

\`\`\`

# src/main.tsx

\`\`\`tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

\`\`\`

# src/state/store.ts

\`\`\`ts
import { create } from 'zustand';
import type { AppState } from '../types/store';
import type { SearchResult } from '../types/api';

const initialState: CartState = {
  items: []
};

export const useStore = create<AppState>((set) => ({
  cart: initialState,
  addToCart: (item: SearchResult) => 
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...state.cart.items, item]
      }
    })),
  removeFromCart: (item: SearchResult) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter(
          (i) => i.sld + i.tld !== item.sld + item.tld
        )
      }
    })),
}));
\`\`\`

# src/state/store/defaultState.ts

\`\`\`ts
import type { Cart, ConnectWallet, AppSettings } from '../../types/store';

export const appSettings: AppSettings = {
  isCartViewOpen: false,
  isOrderSuccess: false,
  isWalletModalOpen: false,
};

export const initialCart: Cart = {
  items: [],
  isCheckoutInProgress: false,
};

export const connectWallet: ConnectWallet = {
  isConnectInitiated: false,
  isConnectInProgress: false,
  isEvmLoaded: false,
  evmWallet: null,
};
\`\`\`

# src/state/store/index.ts

\`\`\`ts
// src/state/store/index.ts
import { create } from 'zustand';
import type { Cart, ConnectWallet, AppSettings } from '../../types/store';
import type { SearchResult } from '../../types/api';

interface StoreState {
  cart: Cart;
  appSettings: AppSettings;
  connectWallet: ConnectWallet;
  setCart: (newState: Cart) => void;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
  resetCart: () => void;
  setAppSettings: (settings: AppSettings) => void;
  setConnectWallet: (settings: ConnectWallet) => void;
  resetState: () => void;
}

const initialState = {
  cart: {
    items: [],
    isCheckoutInProgress: false,
  },
  appSettings: {
    isCartViewOpen: false,
    isOrderSuccess: false,
    isWalletModalOpen: false,
  },
  connectWallet: {
    isConnectInitiated: false,
    isConnectInProgress: false,
    isEvmLoaded: false,
    evmWallet: null,
  },
};

export const useStore = create<StoreState>((set) => ({
  ...initialState,

  setCart: (newState) => 
    set((state) => ({
      cart: {
        ...state.cart,
        ...newState,
      },
    })),

  addToCart: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...(state.cart.items ?? []), item],
      },
    })),

  removeFromCart: (item) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items?.filter(
          (cartItem) => cartItem.sld + cartItem.tld !== item.sld + item.tld
        ) ?? [],
      },
    })),

  resetCart: () =>
    set((state) => ({
      cart: initialState.cart,
    })),

  setAppSettings: (newSettings) =>
    set((state) => ({
      appSettings: {
        ...state.appSettings,
        ...newSettings,
      },
    })),

  setConnectWallet: (newSettings) =>
    set((state) => ({
      connectWallet: {
        ...state.connectWallet,
        ...newSettings,
      },
    })),

  resetState: () => set(initialState),
}));
\`\`\`

# src/types/api.ts

\`\`\`ts
// src/types/api.ts
import type { BaseError, TransactionReceipt } from 'viem';

export type WalletAddress = 'EVM';

export type ApiErrorResponse = {
  message: string[];
  error?: string;
  status: unknown;
};

export type SearchResult = {
  sld: string;
  tld: string;
  status: string;
  isListed: boolean;
  registrationExpiresAt: string;
  reservationExpiresAt: string;
  usdPrice: string;
  nativeAmount: string;
  nativeCurrency: string;
  clickUrl: string;
  lockExpiresAt: string;
};

export type SearchResultRequestResponse = {
  pageItems: SearchResult[];
  total: number;
};

export type PaymentOption = {
  tokenAddress: string;
  contractAddress: string;
  symbol: string;
  icon: string;
  price: number;
  addressType: WalletAddress;
  chainId: string;
};

export type PaymentOptionRequestResponse = {
  options: PaymentOption[];
};

export type CheckoutOrderRequestResponse = {
  voucher: {
    paymentId: string;
    amount: string;
    token: `0x${string}` | string;
    buyer: `0x${string}` | string;
    voucherExpiration: number;
    orderId: string;
    names: {
      label: string;
      tld: string;
      registry: `0x${string}` | string;
      expirationTime: number;
      owner: `0x${string}` | string;
      renewal: false;
    }[];
  };
  signature: `0x${string}` | string;
};

export type CheckoutCallback = CheckoutOrderRequestResponse & {
  selectedPaymentToken: PaymentOption;
};

export type OnPurchaseInit = (args: {
  handleOnSuccess: (receipt: TransactionReceipt | undefined) => void;
  handleOnError: (error: BaseError | string) => void;
  transactionVoucher: {
    voucher: CheckoutOrderRequestResponse['voucher'];
    signature: `0x${string}` | string;
    selectedPaymentToken: PaymentOption;
  };
}) => Promise<void>;
\`\`\`

# src/types/store.ts

\`\`\`ts
import type { SearchResult } from './api';

export type AppSettings = {
  isCartViewOpen?: boolean;
  isOrderSuccess?: boolean;
  isWalletModalOpen?: boolean;
};

export type Cart = {
  items?: SearchResult[];
  isCheckoutInProgress?: boolean;
};

export type ConnectWallet = {
  isConnectInitiated?: boolean;
  isConnectInProgress?: boolean;
  isEvmLoaded?: boolean;
  evmWallet?: `0x${string}` | null;
};
\`\`\`

# src/utils/network.ts

\`\`\`ts
import { defaultBaseApiPath } from '../config/apiConfig';

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
  headers?: HeadersInit | null;
}) => {
  const apiKey = import.meta.env.VITE_D3_API_KEY;
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
  const basePath = apiEndpoint || defaultBaseApiPath;
  const absolutePath = basePath + endpoint;
  const requestHeaders = { ...headers, 'Api-Key': apiKey };

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    ...(method === 'POST' && body && { body }),
  };

  const response = await fetch(absolutePath, requestOptions);

  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage?.message || errorMessage?.error);
  }
  return await response.json();
};
\`\`\`

# src/utils/twMerge.ts

\`\`\`ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`

# src/vite-env.d.ts

\`\`\`ts
/// <reference types="vite/client" />

\`\`\`

# tailwind.config.js

\`\`\`js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

# tsconfig.app.json

\`\`\`json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
\`\`\`

# tsconfig.json

\`\`\`json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

\`\`\`

# tsconfig.node.json

\`\`\`json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
\`\`\`

# vite.config.ts

\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
\`\`\`


```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "my-d3-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.62.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.5.5",
    "use-debounce": "^10.0.4",
    "viem": "^2.21.54",
    "wagmi": "^2.13.5",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/node": "^22.10.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
  }
}

```

# postcss.config.js

```js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
```

# public/vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`

```

# src/App.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ens-blue: #4C82FB;
  --ens-blue-dark: #3E74E7;
  --ens-green: #45B882;
  --ens-green-dark: #3DA876;
}

body {
  @apply antialiased bg-white;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  @apply tracking-tight;
}

/* Smooth transitions */
.transition-all {
  @apply transition-all duration-200 ease-in-out;
}

/* Focus styles */
input:focus {
  @apply outline-none ring-2 ring-[#4C82FB] ring-opacity-50;
}

/* Button hover effects */
.button-hover {
  @apply transition-all duration-200 ease-in-out;
}

.button-hover:hover {
  @apply transform scale-[1.02];
}

/* Card styles */
.card {
  @apply bg-white rounded-xl border border-gray-100 shadow-sm;
}

/* Animation for page load */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}
```

# src/App.tsx

```tsx
// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { useSearch } from './hooks/useSearch';
import { WagmiProvider } from 'wagmi';
import { getWagmiConfig } from './config/evmConfig';
import { Menu } from 'lucide-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retryOnMount: true,
    },
  },
});

const wagmiConfig = getWagmiConfig();

function Hero() {
  const {
    searchInput,
    setSearchInput,
    searchResults,
    isLoading,
    isError,
    error,
  } = useSearch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA] pt-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[#4C82FB] text-5xl md:text-6xl font-bold mb-6">
          Your web3 username
        </h1>
        <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
          Your identity across web3, one name for all your crypto addresses,
          and your decentralised website.
        </p>
        
        <SearchBar 
          value={searchInput}
          onChange={setSearchInput}
        />
        
        {/* Show search results or announcement card */}
        {!searchInput && !isLoading && !searchResults && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <span role="img" aria-label="celebration" className="text-2xl">🎉</span>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">Namechain is coming!</h3>
                <p className="text-gray-500">Keep up with ENSv2 development</p>
              </div>
              <button className="bg-[#45B882] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#3DA876] transition-colors whitespace-nowrap">
                ENSv2 hub
              </button>
            </div>
          </div>
        )}
        
        {/* Search Results */}
        <div className="mt-8">
          <SearchResults 
            searchResults={searchResults}
            isLoading={isLoading}
            isError={isError}
            error={error}
            searchTerm={searchInput}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen">
          <Hero />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
```

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/Cart.tsx

```tsx
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';
import { Checkout } from './Checkout';

export const Cart = () => {
  const { cart, removeFromCart } = useStore();
  
  const total = cart.items?.reduce((sum: number, item: SearchResult) => {
    const priceAsNumber = parseFloat(item.usdPrice) || 0;
    return sum + priceAsNumber;
  }, 0);

  if (!cart.items?.length) {
    return null;
  }

  return (
    <div className="p-4 bg-[#2b2b2b] text-white">
      <h2 className="text-xl font-bold mb-4">Cart ({cart.items.length} items)</h2>
      <div className="space-y-3">
        {cart.items.map((item: SearchResult) => (
          <div 
            key={item.sld + item.tld}
            className="flex justify-between items-center"
          >
            <span>{item.sld}.{item.tld}</span>
            <div className="flex gap-4 items-center">
              <span>${parseFloat(item.usdPrice).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="px-4 py-1 bg-[#1a1a1a] rounded hover:bg-[#2f2f2f]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right border-t border-gray-700 pt-4">
        <p className="text-lg">Total: ${total?.toFixed(2)}</p>
      </div>
      
      {/* Add Checkout Component */}
      <Checkout />
    </div>
  );
};
```

# src/components/Checkout.tsx

```tsx
import { useState, useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useStore } from '../state/store';
import { Button } from './ui/Button';
import type { 
  PaymentOption, 
  CheckoutOrderRequestResponse, 
  PaymentOptionRequestResponse,
  SearchResult 
} from '../types/api';
import { apiEndpoints } from '../config/constants';
import { apiRequest } from '../utils/network';

export const Checkout = () => {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { cart, resetCart } = useStore();
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);

  const fetchPaymentOptions = useCallback(async () => {
    if (!cart.items?.length) return;
    
    const tlds = cart.items.map((item: SearchResult) => item.tld).join(',');
    try {
      const response = await apiRequest({
        endpoint: `${apiEndpoints.paymentOptions}?tld=${tlds}`,
        method: 'GET',
        body: null
      }) as PaymentOptionRequestResponse;
      
      // Check if options exist and the first option is defined
      if (response.options?.length > 0 && response.options[0]) {
        setSelectedPayment(response.options[0]);
      } else {
        setError('No payment options available');
        setSelectedPayment(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch payment options');
      setSelectedPayment(null);
    }
  }, [cart.items]);

  const handleCheckout = async () => {
    if (!address || !selectedPayment || !cart.items?.length) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const orderPayload = {
        paymentOptions: {
          contractAddress: selectedPayment.contractAddress,
          tokenAddress: selectedPayment.tokenAddress,
          buyerAddress: address
        },
        names: cart.items.map((item: SearchResult) => ({
          sld: item.sld,
          tld: item.tld,
          autoRenew: false,
          domainLength: 1
        }))
      };

      const response = await apiRequest({
        endpoint: apiEndpoints.startCheckoutOrder,
        method: 'POST',
        body: JSON.stringify(orderPayload)
      }) as CheckoutOrderRequestResponse;

      if (response.voucher && response.signature) {
        resetCart();
        console.log('Checkout successful!', response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentOptions();
  }, [fetchPaymentOptions]);

  if (!cart.items?.length) {
    return null;
  }

  const total = cart.items.reduce((sum: number, item: SearchResult) => {
    return sum + parseFloat(item.usdPrice);
  }, 0);

  return (
    <div className="mt-4 p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Checkout</h3>
      
      {/* Payment Options */}
      {selectedPayment && (
        <div className="mb-4">
          <p className="text-sm text-gray-400">Payment Method</p>
          <div className="flex items-center gap-2 mt-2">
            <img 
              src={selectedPayment.icon} 
              alt={selectedPayment.symbol} 
              className="w-6 h-6"
            />
            <span>{selectedPayment.symbol}</span>
          </div>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <span>Total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        disabled={isLoading || !address || !selectedPayment}
        className="w-full"
      >
        {isLoading ? 'Processing...' : address ? 'Complete Purchase' : 'Connect Wallet to Checkout'}
      </Button>
    </div>
  );
};
```

# src/components/SearchBar.tsx

```tsx
import { X } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[60px] px-6 text-xl bg-white rounded-full border-2 border-[#4C82FB] focus:outline-none focus:border-[#4C82FB] transition-all"
          placeholder="Search names..."
          style={{
            boxShadow: '0 0 0 2px rgba(76, 130, 251, 0.1)',
          }}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
```

# src/components/SearchResultCard.tsx

```tsx
import { memo } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import type { SearchResult } from '../types/api';
import { useCart } from '../hooks/useCart';

type SearchResultCardProps = {
  searchResult: SearchResult;
};

export const SearchResultCard = memo(function SearchResultCard({ 
  searchResult 
}: SearchResultCardProps) {
  const { handleAddToCart, handleRemoveFromCart, getIsItemInCart } = useCart();
  const isItemInCart = getIsItemInCart(searchResult);
  const isDomainAvailable = searchResult?.status?.toLowerCase() === 'available';
  const isRegistered = searchResult?.status?.toLowerCase() === 'registered';

  const handleCartAction = () => {
    if (isItemInCart) {
      handleRemoveFromCart(searchResult);
    } else {
      handleAddToCart(searchResult);
    }
  };

  return (
    <div className="bg-[#2A2D36] rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {isDomainAvailable ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
        <div>
          <div className="text-xl text-white font-normal">
            {searchResult.sld}.{searchResult.tld}
          </div>
          <div className="text-sm mt-0.5">
            {isDomainAvailable && (
              <span className="text-green-400">Available</span>
            )}
            {isRegistered && (
              <span className="text-red-400">Registered</span>
            )}
            {!isDomainAvailable && !isRegistered && (
              <span className="text-gray-400 capitalize">{searchResult.status}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-white text-lg">
            ${parseFloat(searchResult.usdPrice || '0').toFixed(2)}
          </div>
          <div className="text-gray-400 text-sm">
            {searchResult.nativeAmount} {searchResult.nativeCurrency}
          </div>
        </div>

        {isDomainAvailable && (
          <button
            onClick={handleCartAction}
            className="bg-[#4C82FB] hover:bg-[#3E74E7] text-white px-6 py-2 rounded-lg transition-colors"
          >
            {isItemInCart ? 'Remove' : 'Add to Cart'}
          </button>
        )}
      </div>
    </div>
  );
});
```

# src/components/SearchResults.tsx

```tsx
import type { ApiErrorResponse, SearchResultRequestResponse } from '../types/api';
import { SearchResultCard } from './SearchResultCard';

type SearchResultsProps = {
  isError: boolean;
  isLoading: boolean;
  error: ApiErrorResponse | null;
  searchResults?: SearchResultRequestResponse;
  searchTerm?: string;
};

export function SearchResults({
  isError,
  isLoading,
  error,
  searchResults,
  searchTerm,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-4 space-y-3">
        <div className="animate-pulse bg-[#2A2D36] rounded-lg h-[72px]" />
        <div className="animate-pulse bg-[#2A2D36] rounded-lg h-[72px]" />
      </div>
    );
  }

  if (isError && error) {
    return (
      <div className="mt-4 p-4 text-center text-red-500">
        {error.message || 'Something went wrong'}
      </div>
    );
  }

  if (!searchResults?.pageItems?.length && searchTerm) {
    return (
      <div className="mt-4 text-center text-gray-500">
        No domains found for "{searchTerm}"
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {searchResults?.pageItems?.map((searchResult) => (
        <SearchResultCard
          key={`${searchResult.sld}.${searchResult.tld}`}
          searchResult={searchResult}
        />
      ))}
    </div>
  );
}
```

# src/components/ui/Button.tsx

```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/twMerge';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

# src/components/ui/Card.tsx

```tsx
import * as React from 'react';
import { cn } from '../../utils/twMerge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow',
        className
      )}
      {...props}
    />
  );
}
```

# src/components/ui/Skeleton.tsx

```tsx
import { cn } from "../../utils/twMerge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-700/20", className)}
      {...props}
    />
  );
}

export { Skeleton };
```

# src/config/apiConfig.ts

```ts
export const defaultBaseApiPath = 'https://api-public.d3.app';

// VITE_D3_API_KEY=your_api_key_here
// VITE_API_ENDPOINT=https://api-public.d3.app
```

# src/config/constants.ts

```ts
// src/config/constants.ts
export const searchParams = {
  sld: 'sld',
  tld: 'tld',
  limit: 'limit',
  skip: 'skip',
};

export const cacheKeys = {
  fetchSearchResults: 'FETCH_SEARCH_RESULTS',
  fetchPaymentMethods: 'FETCH_PAYMENT_METHODS',
  startCheckoutOrder: 'START_CHECKOUT_ORDER',
};

export const apiEndpoints = {
  search: '/v1/partner/search',
  paymentOptions: '/v1/partner/payment/options',
  startCheckoutOrder: '/v1/partner/order',
};

export const PAGE_SIZE = 12;
export const CART_LIMIT = 20;

export const currencyConfigForFractionDigits = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const numbersConfigForFractionDigits = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
};
```

# src/config/evmConfig.ts

```ts
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected } from 'wagmi/connectors';

const DEFAULT_POLLING_INTERVAL = 8_000;

export const getWagmiConfig = () => {
  const defaultAppMeta = {
    name: "D3 api demo",
    description: "Official Identity Service for Top web3 communities",
    url: window.location.origin,
    icons: ["https://d3.app/favicon.png"],
  };

  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      coinbaseWallet({
        appLogoUrl: defaultAppMeta.icons[0],
        darkMode: true,
      }),
      injected({ shimDisconnect: false }),
    ],
    ssr: true,
    syncConnectedChain: true,
    multiInjectedProviderDiscovery: true,
    cacheTime: DEFAULT_POLLING_INTERVAL,
    pollingInterval: DEFAULT_POLLING_INTERVAL,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
};
```

# src/hooks/useCart.ts

```ts
import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { CART_LIMIT } from '../config/constants';
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';
import type { Cart } from '../types/store';

// Define the store state type
interface StoreState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}

export const useCart = () => {
  const { cart, addToCart, removeFromCart } = useStore(
    useShallow((state: StoreState) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
    }))
  );

  const isCartLimitReached = useMemo(() => {
    return (cart?.items?.length || 0) >= CART_LIMIT;
  }, [cart?.items?.length]);

  const getIsItemInCart = useCallback(
    (domain: SearchResult) => {
      return cart?.items?.some(
        (item) => item.sld === domain.sld && item.tld === domain.tld
      );
    },
    [cart?.items]
  );

  const handleAddToCart = useCallback(
    (domain: SearchResult) => {
      if (!getIsItemInCart(domain)) {
        addToCart(domain);
      }
    },
    [addToCart, getIsItemInCart]
  );

  const handleRemoveFromCart = useCallback(
    (domain: SearchResult) => {
      removeFromCart(domain);
    },
    [removeFromCart]
  );

  return {
    cart,
    getIsItemInCart,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLimitReached,
  };
};
```

# src/hooks/useFetchRequest.ts

```ts
// src/hooks/useFetchRequest.ts
import { useQuery, type QueryKey } from '@tanstack/react-query';
import type { ApiErrorResponse } from '../types/api';
import { apiRequest } from '../utils/network';

export const useFetchRequest = <TData = unknown, TError = ApiErrorResponse>({
  queryKey,
  endpoint,
  queryParameters = { staleTime: Infinity, retry: false, refetchOnWindowFocus: false },
  method = 'GET',
  requestBody = null,
}: {
  queryKey: QueryKey;
  endpoint: string;
  queryParameters?: object;
  method?: 'GET' | 'POST' | 'PUT' | 'UPDATE';
  requestBody?: unknown;
}) => {
  const body = requestBody ? JSON.stringify(requestBody) : null;
  
  return useQuery<TData, TError>({
    queryKey: [...queryKey],
    queryFn: async () => apiRequest({ endpoint, body, method }),
    ...queryParameters,
  });
};
```

# src/hooks/useSearch.ts

```ts
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { apiEndpoints, cacheKeys, PAGE_SIZE } from '../config/constants';
import { useFetchRequest } from './useFetchRequest';
import type { SearchResultRequestResponse } from '../types/api';

type SearchQueryParams = {
  sld: string;
  tld: string;
  skip: number;
  limit: number;
};

const appTlds = import.meta.env.VITE_TLDS || 'core,shib';

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>({
    sld: '',
    tld: appTlds,
    skip: 0,
    limit: PAGE_SIZE,
  });

  // Create the debounced search function
  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchQueryParams(prev => ({
      ...prev,
      sld: value,
    }));
  }, 300);

  // Update search params when input changes
  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    }
  }, [searchInput, debouncedSearch]);

  const searchUrlWithParams = useMemo(() => {
    if (!searchQueryParams.sld) return '';
    return `${apiEndpoints.search}?` + new URLSearchParams({
      sld: searchQueryParams.sld,
      tld: searchQueryParams.tld,
      skip: searchQueryParams.skip.toString(),
      limit: searchQueryParams.limit.toString(),
    }).toString();
  }, [searchQueryParams]);

  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useFetchRequest<SearchResultRequestResponse>({
    queryKey: [cacheKeys.fetchSearchResults, searchQueryParams],
    endpoint: searchUrlWithParams,
    queryParameters: {
      enabled: Boolean(searchQueryParams.sld),
      retry: false,
      refetchOnWindowFocus: false,
    },
  });

  return {
    searchInput,
    setSearchInput,
    searchResults,
    isLoading,
    isError,
    error,
  };
};
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ens-blue: #4C82FB;
  --ens-blue-dark: #3E74E7;
  --ens-green: #45B882;
  --ens-green-dark: #3DA876;
}

body {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

#root {
  min-height: 100vh;
}
```

# src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Make sure this is here
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

# src/state/store.ts

```ts
import { create } from 'zustand';
import type { AppState } from '../types/store';
import type { SearchResult } from '../types/api';

const initialState: CartState = {
  items: []
};

export const useStore = create<AppState>((set) => ({
  cart: initialState,
  addToCart: (item: SearchResult) => 
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...state.cart.items, item]
      }
    })),
  removeFromCart: (item: SearchResult) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter(
          (i) => i.sld + i.tld !== item.sld + item.tld
        )
      }
    })),
}));
```

# src/state/store/defaultState.ts

```ts
import type { Cart, ConnectWallet, AppSettings } from '../../types/store';

export const appSettings: AppSettings = {
  isCartViewOpen: false,
  isOrderSuccess: false,
  isWalletModalOpen: false,
};

export const initialCart: Cart = {
  items: [],
  isCheckoutInProgress: false,
};

export const connectWallet: ConnectWallet = {
  isConnectInitiated: false,
  isConnectInProgress: false,
  isEvmLoaded: false,
  evmWallet: null,
};
```

# src/state/store/index.ts

```ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { SearchResult } from '../../types/api';
import type { Cart } from '../../types/store';

interface StoreState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}

export const useStore = create<StoreState>()(
  immer((set) => ({
    cart: {
      items: [],
      isCheckoutInProgress: false,
    },
    addToCart: (item: SearchResult) =>
      set((state) => {
        state.cart.items.push(item);
      }),
    removeFromCart: (item: SearchResult) =>
      set((state) => {
        state.cart.items = state.cart.items.filter(
          (cartItem: SearchResult) => !(cartItem.sld === item.sld && cartItem.tld === item.tld)
        );
      }),
  }))
);
```

# src/types/api.ts

```ts
// src/types/api.ts
import type { BaseError, TransactionReceipt } from 'viem';

export type WalletAddress = 'EVM';

export type ApiErrorResponse = {
  message: string[];
  error?: string;
  status: unknown;
};

export type SearchResult = {
  sld: string;
  tld: string;
  status: string;
  isListed: boolean;
  registrationExpiresAt: string;
  reservationExpiresAt: string;
  usdPrice: string;
  nativeAmount: string;
  nativeCurrency: string;
  clickUrl: string;
  lockExpiresAt: string;
};

export type SearchResultRequestResponse = {
  pageItems: SearchResult[];
  total: number;
};

export type PaymentOption = {
  tokenAddress: string;
  contractAddress: string;
  symbol: string;
  icon: string;
  price: number;
  addressType: WalletAddress;
  chainId: string;
};

export type PaymentOptionRequestResponse = {
  options: PaymentOption[];
};

export type CheckoutOrderRequestResponse = {
  voucher: {
    paymentId: string;
    amount: string;
    token: `0x${string}` | string;
    buyer: `0x${string}` | string;
    voucherExpiration: number;
    orderId: string;
    names: {
      label: string;
      tld: string;
      registry: `0x${string}` | string;
      expirationTime: number;
      owner: `0x${string}` | string;
      renewal: false;
    }[];
  };
  signature: `0x${string}` | string;
};

export type CheckoutCallback = CheckoutOrderRequestResponse & {
  selectedPaymentToken: PaymentOption;
};

export type OnPurchaseInit = (args: {
  handleOnSuccess: (receipt: TransactionReceipt | undefined) => void;
  handleOnError: (error: BaseError | string) => void;
  transactionVoucher: {
    voucher: CheckoutOrderRequestResponse['voucher'];
    signature: `0x${string}` | string;
    selectedPaymentToken: PaymentOption;
  };
}) => Promise<void>;
```

# src/types/store.ts

```ts
// src/types/store.ts
import type { SearchResult } from './api';

export type Cart = {
  items: SearchResult[];
  isCheckoutInProgress?: boolean;
};

export type AppSettings = {
  isCartViewOpen?: boolean;
  isOrderSuccess?: boolean;
  isWalletModalOpen?: boolean;
};

export type ConnectWallet = {
  isConnectInitiated?: boolean;
  isConnectInProgress?: boolean;
  isEvmLoaded?: boolean;
  evmWallet?: `0x${string}` | null;
};
```

# src/utils/network.ts

```ts
import { defaultBaseApiPath } from '../config/apiConfig';

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
  headers?: HeadersInit | null;
}) => {
  const apiKey = import.meta.env.VITE_D3_API_KEY;
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
  const basePath = apiEndpoint || defaultBaseApiPath;
  const absolutePath = basePath + endpoint;
  const requestHeaders = { ...headers, 'Api-Key': apiKey };

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
    ...(method === 'POST' && body && { body }),
  };

  const response = await fetch(absolutePath, requestOptions);

  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage?.message || errorMessage?.error);
  }
  return await response.json();
};
```

# src/utils/twMerge.ts

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ens-blue': '#4C82FB',
        'ens-blue-dark': '#3E74E7',
        'ens-green': '#45B882',
        'ens-green-dark': '#3DA876',
      },
    },
  },
  plugins: [],
}
```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

# vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
```

