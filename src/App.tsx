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