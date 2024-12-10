import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { coinbaseWallet, injected } from 'wagmi/connectors';

const DEFAULT_POLLING_INTERVAL = 8_000;

export const getWagmiConfig = () => {
  const defaultAppMeta = {
    name: "D3 api demo",
    description: "Official Identity Service for Top web3 communities",
    url: window.location.origin,
    icons: ["https://d3.app/favicon.png"],
  };

  return createConfig({
    chains: [mainnet, sepolia],
    connectors: [
      coinbaseWallet({
        appLogoUrl: defaultAppMeta.icons[0],
        darkMode: true,
      }),
      injected({ shimDisconnect: false }),
    ],
    ssr: true,
    syncConnectedChain: true,
    multiInjectedProviderDiscovery: true,
    cacheTime: DEFAULT_POLLING_INTERVAL,
    pollingInterval: DEFAULT_POLLING_INTERVAL,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
};