import type { SearchResult } from './api';

export type Cart = {
  items: SearchResult[];
  isCheckoutInProgress?: boolean;
};

export interface AppState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
}