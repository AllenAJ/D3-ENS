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