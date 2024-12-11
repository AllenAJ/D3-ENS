// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { getWagmiConfig } from './config/evmConfig';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DomainProfilePage } from './components/DomainProfile/DomainProfilePage';
import { SearchPage } from './components/SearchPage';
import { PortfolioDashboard } from './components/Portfolio/PortfolioDashboard';
import { Layout } from './components/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      retryOnMount: true,
    },
  },
});

const wagmiConfig = getWagmiConfig();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/domain/:domain",
        element: <DomainProfilePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioDashboard />,
      },
    ],
  },
]);

function AppContent() {
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;