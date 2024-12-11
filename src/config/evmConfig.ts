import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

const DEFAULT_POLLING_INTERVAL = 8_000;

export const getWagmiConfig = () => {
  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      injected({
        shimDisconnect: true,
      })
    ],
    ssr: true,
    syncConnectedChain: true,
    pollingInterval: DEFAULT_POLLING_INTERVAL,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
};