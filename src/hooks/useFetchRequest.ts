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