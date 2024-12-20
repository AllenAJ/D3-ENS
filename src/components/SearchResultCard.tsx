import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
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
  const domainName = `${searchResult.sld}.${searchResult.tld}`;

  const handleCartAction = () => {
    if (isItemInCart) {
      handleRemoveFromCart(searchResult);
    } else {
      handleAddToCart(searchResult);
    }
  };

  return (
    <div className="bg-[#2A2D36] rounded-lg p-4 flex items-center justify-between group">
      <div className="flex items-center gap-3 flex-1">
        {isDomainAvailable ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xl text-white font-normal">
              {domainName}
            </span>
            {isRegistered && (
              <Link 
                to={`/domain/${domainName}`}
                className="text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink size={16} />
              </Link>
            )}
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