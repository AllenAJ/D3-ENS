import { create } from 'zustand';
import type { AppState } from '../types/store';
import type { SearchResult } from '../types/api';

const initialState: CartState = {
  items: []
};

export const useStore = create<AppState>((set) => ({
  cart: initialState,
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
          (i) => i.sld + i.tld !== item.sld + item.tld
        )
      }
    })),
}));