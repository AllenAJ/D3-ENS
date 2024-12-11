import { useQuery, type QueryKey, UseQueryOptions } from '@tanstack/react-query';
import type { ApiErrorResponse } from '../types/api';
import { apiRequest } from '../utils/network';

interface FetchRequestOptions<TData, TError> {
  queryKey: QueryKey;
  endpoint: string;
  queryParameters?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;
  method?: 'GET' | 'POST' | 'PUT' | 'UPDATE';
  requestBody?: unknown;
}

export const useFetchRequest = <TData = unknown, TError = ApiErrorResponse>({
  queryKey,
  endpoint,
  queryParameters = {},
  method = 'GET',
  requestBody = null,
}: FetchRequestOptions<TData, TError>) => {
  const body = requestBody ? JSON.stringify(requestBody) : null;
  
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      const response = await apiRequest({ endpoint, body, method });
      return response as TData;
    },
    ...queryParameters,
  });
};