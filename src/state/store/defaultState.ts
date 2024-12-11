// src/state/store/defaultState.ts
import type { Cart, AppSettings, ConnectWallet } from '../../types/store';

export const appSettings: AppSettings = {
  isCartViewOpen: false,
  isOrderSuccess: false,
  isWalletModalOpen: false,
};

export const initialCart: Cart = {
  items: [],
  isCheckoutInProgress: false,
};

export const connectWallet: ConnectWallet = {
  isConnectInitiated: false,
  isConnectInProgress: false,
  isEvmLoaded: false,
  evmWallet: null,
};