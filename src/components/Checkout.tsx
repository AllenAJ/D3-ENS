import { useState, useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useStore } from '../state/store';
import { Button } from './ui/Button';
import type { 
  PaymentOption, 
  CheckoutOrderRequestResponse, 
  PaymentOptionRequestResponse,
  SearchResult 
} from '../types/api';
import { apiEndpoints } from '../config/constants';
import { apiRequest } from '../utils/network';

export const Checkout = () => {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { cart, resetCart } = useStore(state => ({
    cart: state.cart,
    resetCart: state.resetCart
  }));
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);


  const fetchPaymentOptions = useCallback(async () => {
    if (!cart.items?.length) return;
    
    const tlds = cart.items.map((item: SearchResult) => item.tld).join(',');
    try {
      const response = await apiRequest({
        endpoint: `${apiEndpoints.paymentOptions}?tld=${tlds}`,
        method: 'GET',
        body: null
      }) as PaymentOptionRequestResponse;
      
      // Check if options exist and the first option is defined
      if (response.options?.length > 0 && response.options[0]) {
        setSelectedPayment(response.options[0]);
      } else {
        setError('No payment options available');
        setSelectedPayment(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch payment options');
      setSelectedPayment(null);
    }
  }, [cart.items]);

  const handleCheckout = async () => {
    if (!address || !selectedPayment || !cart.items?.length) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const orderPayload = {
        paymentOptions: {
          contractAddress: selectedPayment.contractAddress,
          tokenAddress: selectedPayment.tokenAddress,
          buyerAddress: address
        },
        names: cart.items.map((item: SearchResult) => ({
          sld: item.sld,
          tld: item.tld,
          autoRenew: false,
          domainLength: 1
        }))
      };

      const response = await apiRequest({
        endpoint: apiEndpoints.startCheckoutOrder,
        method: 'POST',
        body: JSON.stringify(orderPayload)
      }) as CheckoutOrderRequestResponse;

      if (response.voucher && response.signature) {
        resetCart();
        console.log('Checkout successful!', response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentOptions();
  }, [fetchPaymentOptions]);

  if (!cart.items?.length) {
    return null;
  }

  const total = cart.items.reduce((sum: number, item: SearchResult) => {
    return sum + parseFloat(item.usdPrice);
  }, 0);

  return (
    <div className="mt-4 p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Checkout</h3>
      
      {/* Payment Options */}
      {selectedPayment && (
        <div className="mb-4">
          <p className="text-sm text-gray-400">Payment Method</p>
          <div className="flex items-center gap-2 mt-2">
            <img 
              src={selectedPayment.icon} 
              alt={selectedPayment.symbol} 
              className="w-6 h-6"
            />
            <span>{selectedPayment.symbol}</span>
          </div>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <span>Total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        disabled={isLoading || !address || !selectedPayment}
        className="w-full"
      >
        {isLoading ? 'Processing...' : address ? 'Complete Purchase' : 'Connect Wallet to Checkout'}
      </Button>
    </div>
  );
};