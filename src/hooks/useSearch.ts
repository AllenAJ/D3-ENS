import { useCallback, useMemo, useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { apiEndpoints, cacheKeys, PAGE_SIZE } from '../config/constants';
import { useFetchRequest } from './useFetchRequest';
import type { SearchResultRequestResponse, ApiErrorResponse } from '../types/api';

type SearchQueryParams = {
  sld: string;
  tld: string;
  skip: number;
  limit: number;
};

const appTlds = import.meta.env.VITE_TLDS || 'core,shib';

// Minimum length for search term before making API calls
const MIN_SEARCH_LENGTH = 3;

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>({
    sld: '',
    tld: appTlds,
    skip: 0,
    limit: PAGE_SIZE,
  });

  // Much longer debounce time
  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.length >= MIN_SEARCH_LENGTH) {
      setSearchQueryParams(prev => ({
        ...prev,
        sld: value,
      }));
    }
  }, 1000); // Increased to 1 second

  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    } else {
      setSearchQueryParams(prev => ({ ...prev, sld: '' }));
    }
  }, [searchInput, debouncedSearch]);

  const searchUrlWithParams = useMemo(() => {
    if (!searchQueryParams.sld || searchQueryParams.sld.length < MIN_SEARCH_LENGTH) {
      return '';
    }
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
  } = useFetchRequest<SearchResultRequestResponse, ApiErrorResponse>({
    queryKey: [cacheKeys.fetchSearchResults, searchQueryParams],
    endpoint: searchUrlWithParams,
    queryParameters: {
      enabled: Boolean(searchQueryParams.sld) && searchQueryParams.sld.length >= MIN_SEARCH_LENGTH,
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 60000, // Cache results for 1 minute
      cacheTime: 300000, // Keep in cache for 5 minutes
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
    isReadyToSearch: searchInput.length >= MIN_SEARCH_LENGTH,
  } as const;
};