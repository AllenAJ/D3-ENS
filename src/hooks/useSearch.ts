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