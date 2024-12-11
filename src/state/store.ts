// src/state/store.ts
import { create } from 'zustand';
import type { AppState, Cart } from '../types/store';
import type { SearchResult } from '../types/api';

const initialCart: Cart = {
  items: [],
  isCheckoutInProgress: false
};

export const useStore = create<AppState>((set) => ({
  cart: initialCart,
  addToCart: (item: SearchResult) => 
    set((state) => ({
      cart: {
        ...state.cart,
        items: [...state.cart.items, item]
      }
    })),
  removeFromCart: (item: SearchResult) =>
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter(
          (cartItem) => cartItem.sld + cartItem.tld !== item.sld + item.tld
        )
      }
    })),
  resetCart: () => 
    set(() => ({
      cart: initialCart
    })),
}));