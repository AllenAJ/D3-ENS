import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { NameRecommendations } from './NameRecommendations';
import { useSearch } from '../hooks/useSearch';
import { Cart } from './Cart';

export function SearchPage() {
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
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[#4C82FB] text-5xl md:text-6xl font-bold mb-6 text-center">
          Your web3 username
        </h1>
        <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto text-center">
          Your identity across web3, one name for all your crypto addresses,
          and your decentralised website.
        </p>
        
        <SearchBar 
          value={searchInput}
          onChange={setSearchInput}
        />
        
        <div className="mt-8">
          <SearchResults 
            searchResults={searchResults}
            isLoading={isLoading}
            isError={isError}
            error={error}
            searchTerm={searchInput}
          />
        </div>

        {searchInput && !isLoading && (
          <NameRecommendations searchTerm={searchInput} />
        )}

        <div className="mt-8">
          <Cart />
        </div>
      </div>
    </div>
  );
}