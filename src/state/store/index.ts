import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { SearchResult } from '../../types/api';
import type { Cart } from '../../types/store';

interface StoreState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}

export const useStore = create<StoreState>()(
  immer((set) => ({
    cart: {
      items: [],
      isCheckoutInProgress: false,
    },
    addToCart: (item: SearchResult) =>
      set((state) => {
        state.cart.items.push(item);
      }),
    removeFromCart: (item: SearchResult) =>
      set((state) => {
        state.cart.items = state.cart.items.filter(
          (cartItem: SearchResult) => !(cartItem.sld === item.sld && cartItem.tld === item.tld)
        );
      }),
  }))
);