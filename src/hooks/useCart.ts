import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { CART_LIMIT } from '../config/constants';
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';
import type { Cart } from '../types/store';

// Define the store state type
interface StoreState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}

export const useCart = () => {
  const { cart, addToCart, removeFromCart } = useStore(
    useShallow((state: StoreState) => ({
      cart: state.cart,
      addToCart: state.addToCart,
      removeFromCart: state.removeFromCart,
    }))
  );

  const isCartLimitReached = useMemo(() => {
    return (cart?.items?.length || 0) >= CART_LIMIT;
  }, [cart?.items?.length]);

  const getIsItemInCart = useCallback(
    (domain: SearchResult) => {
      return cart?.items?.some(
        (item) => item.sld === domain.sld && item.tld === domain.tld
      );
    },
    [cart?.items]
  );

  const handleAddToCart = useCallback(
    (domain: SearchResult) => {
      if (!getIsItemInCart(domain)) {
        addToCart(domain);
      }
    },
    [addToCart, getIsItemInCart]
  );

  const handleRemoveFromCart = useCallback(
    (domain: SearchResult) => {
      removeFromCart(domain);
    },
    [removeFromCart]
  );

  return {
    cart,
    getIsItemInCart,
    handleAddToCart,
    handleRemoveFromCart,
    isCartLimitReached,
  };
};