// src/types/store.ts
import type { SearchResult } from './api';

export type Cart = {
  items: SearchResult[];
  isCheckoutInProgress?: boolean;
};

export type AppSettings = {
  isCartViewOpen?: boolean;
  isOrderSuccess?: boolean;
  isWalletModalOpen?: boolean;
};

export type ConnectWallet = {
  isConnectInitiated?: boolean;
  isConnectInProgress?: boolean;
  isEvmLoaded?: boolean;
  evmWallet?: `0x${string}` | null;
};

export interface AppState {
  cart: Cart;
  addToCart: (item: SearchResult) => void;
  removeFromCart: (item: SearchResult) => void;
  resetCart: () => void;
}