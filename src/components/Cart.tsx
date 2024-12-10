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