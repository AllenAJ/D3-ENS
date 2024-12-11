import { useQuery } from '@tanstack/react-query';
import { SearchResult } from '../types/api';
import { apiRequest } from '../utils/network';
import { Skeleton } from './ui/Skeleton';
import { useCart } from '../hooks/useCart';

// Hook for recommendations
export function useNameRecommendations(sld: string) {
  return useQuery({
    queryKey: ['recommendations', sld],
    queryFn: async () => {
      if (!sld) return [];
      return apiRequest({
        endpoint: `/v1/partner/recommendations?sld=${sld}`,
        method: 'GET',
        body: null,
      }) as Promise<SearchResult[]>;
    },
    enabled: Boolean(sld),
  });
}

export function NameRecommendations({ searchTerm }: { searchTerm: string }) {
  const { data: recommendations, isLoading } = useNameRecommendations(searchTerm);
  const { handleAddToCart, getIsItemInCart } = useCart();

  if (isLoading) {
    return (
      <div className="mt-8 space-y-3">
        <Skeleton className="h-[72px]" />
        <Skeleton className="h-[72px]" />
      </div>
    );
  }

  if (!recommendations?.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Similar Names You Might Like
      </h2>
      <div className="space-y-3">
        {recommendations.map((result) => (
          <div
            key={`${result.sld}.${result.tld}`}
            className="bg-[#2A2D36] rounded-lg p-4 flex items-center justify-between group"
          >
            <div className="flex-1">
              <span className="text-white text-lg">
                {result.sld}.{result.tld}
              </span>
              <div className="text-gray-400 text-sm mt-1">
                {result.status === 'available' ? 'Available' : 'Registered'}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-white">
                  ${parseFloat(result.usdPrice || '0').toFixed(2)}
                </div>
                {result.nativeAmount && (
                  <div className="text-gray-400 text-sm">
                    {result.nativeAmount} {result.nativeCurrency}
                  </div>
                )}
              </div>
              
              {result.status === 'available' && (
                <button
                  onClick={() => handleAddToCart(result)}
                  className="bg-[#4C82FB] hover:bg-[#3E74E7] text-white px-6 py-2 rounded-lg transition-colors"
                  disabled={getIsItemInCart(result)}
                >
                  {getIsItemInCart(result) ? 'Added' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}