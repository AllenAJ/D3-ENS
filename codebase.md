# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.vercel

```

# .vercel/project.json

```json
{"orgId":"team_KHAELfOHJMd9bgdTf3izvyOL","projectId":"prj_XpqqyrO6YnDGQ12SDtPCsgV7I1kk"}
```

# .vercel/README.txt

```txt
> Why do I have a folder named ".vercel" in my project?
The ".vercel" folder is created when you link a directory to a Vercel project.

> What does the "project.json" file contain?
The "project.json" file contains:
- The ID of the Vercel project that you linked ("projectId")
- The ID of the user or team your Vercel project is owned by ("orgId")

> Should I commit the ".vercel" folder?
No, you should not share the ".vercel" folder with anyone.
Upon creation, it will be automatically added to your ".gitignore" file.

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "my-d3-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.62.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.0.2",
    "tailwind-merge": "^2.5.5",
    "use-debounce": "^10.0.4",
    "viem": "^2.21.54",
    "wagmi": "^2.13.5",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/node": "^22.10.1",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
  }
}

```

# postcss.config.js

```js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }
```

# public/vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

\`\`\`js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

\`\`\`js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
\`\`\`

```

# src/App.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ens-blue: #4C82FB;
  --ens-blue-dark: #3E74E7;
  --ens-green: #45B882;
  --ens-green-dark: #3DA876;
}

body {
  @apply antialiased bg-white;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  @apply tracking-tight;
}

/* Smooth transitions */
.transition-all {
  @apply transition-all duration-200 ease-in-out;
}

/* Focus styles */
input:focus {
  @apply outline-none ring-2 ring-[#4C82FB] ring-opacity-50;
}

/* Button hover effects */
.button-hover {
  @apply transition-all duration-200 ease-in-out;
}

.button-hover:hover {
  @apply transform scale-[1.02];
}

/* Card styles */
.card {
  @apply bg-white rounded-xl border border-gray-100 shadow-sm;
}

/* Animation for page load */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}
```

# src/App.tsx

```tsx
// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { useSearch } from './hooks/useSearch';
import { WagmiProvider } from 'wagmi';
import { getWagmiConfig } from './config/evmConfig';
import { Menu } from 'lucide-react';
import { DomainProfilePage } from './components/DomainProfile/DomainProfilePage';
import { SearchPage } from './components/SearchPage';
import { BrowserRouter, Routes, Route,createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigation } from './components/Navigation';
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

function Hero() {
  const {
    searchInput,
    setSearchInput,
    searchResults,
    isLoading,
    isError,
    error,
  } = useSearch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA] pt-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[#4C82FB] text-5xl md:text-6xl font-bold mb-6">
          Your web3 username
        </h1>
        <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
          Your identity across web3, one name for all your crypto addresses,
          and your decentralised website.
        </p>
        
        <SearchBar 
          value={searchInput}
          onChange={setSearchInput}
        />
        
        {/* Show search results or announcement card */}
        {!searchInput && !isLoading && !searchResults && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4">
              <span role="img" aria-label="celebration" className="text-2xl">🎉</span>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-gray-900">Namechain is coming!</h3>
                <p className="text-gray-500">Keep up with ENSv2 development</p>
              </div>
              <button className="bg-[#45B882] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#3DA876] transition-colors whitespace-nowrap">
                ENSv2 hub
              </button>
            </div>
          </div>
        )}
        
        {/* Search Results */}
        <div className="mt-8">
          <SearchResults 
            searchResults={searchResults}
            isLoading={isLoading}
            isError={isError}
            error={error}
            searchTerm={searchInput}
          />
        </div>
      </div>
    </div>
  );
}

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

```

# src/assets/react.svg

This is a file of the type: SVG Image

# src/components/Cart.tsx

```tsx
import { useStore } from '../state/store';
import type { SearchResult } from '../types/api';
import { Checkout } from './Checkout';

export const Cart = () => {
  const { cart, removeFromCart } = useStore();
  
  const total = cart.items?.reduce((sum: number, item: SearchResult) => {
    const priceAsNumber = parseFloat(item.usdPrice) || 0;
    return sum + priceAsNumber;
  }, 0);

  if (!cart.items?.length) {
    return null;
  }

  return (
    <div className="p-4 bg-[#2b2b2b] text-white">
      <h2 className="text-xl font-bold mb-4">Cart ({cart.items.length} items)</h2>
      <div className="space-y-3">
        {cart.items.map((item: SearchResult) => (
          <div 
            key={item.sld + item.tld}
            className="flex justify-between items-center"
          >
            <span>{item.sld}.{item.tld}</span>
            <div className="flex gap-4 items-center">
              <span>${parseFloat(item.usdPrice).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item)}
                className="px-4 py-1 bg-[#1a1a1a] rounded hover:bg-[#2f2f2f]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right border-t border-gray-700 pt-4">
        <p className="text-lg">Total: ${total?.toFixed(2)}</p>
      </div>
      
      {/* Add Checkout Component */}
      <Checkout />
    </div>
  );
};
```

# src/components/Checkout.tsx

```tsx
import { useState, useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useStore } from '../state/store';
import { Button } from './ui/Button';
import type { 
  PaymentOption, 
  CheckoutOrderRequestResponse, 
  PaymentOptionRequestResponse,
  SearchResult 
} from '../types/api';
import { apiEndpoints } from '../config/constants';
import { apiRequest } from '../utils/network';

export const Checkout = () => {
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { cart, resetCart } = useStore();
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);

  const fetchPaymentOptions = useCallback(async () => {
    if (!cart.items?.length) return;
    
    const tlds = cart.items.map((item: SearchResult) => item.tld).join(',');
    try {
      const response = await apiRequest({
        endpoint: `${apiEndpoints.paymentOptions}?tld=${tlds}`,
        method: 'GET',
        body: null
      }) as PaymentOptionRequestResponse;
      
      // Check if options exist and the first option is defined
      if (response.options?.length > 0 && response.options[0]) {
        setSelectedPayment(response.options[0]);
      } else {
        setError('No payment options available');
        setSelectedPayment(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch payment options');
      setSelectedPayment(null);
    }
  }, [cart.items]);

  const handleCheckout = async () => {
    if (!address || !selectedPayment || !cart.items?.length) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const orderPayload = {
        paymentOptions: {
          contractAddress: selectedPayment.contractAddress,
          tokenAddress: selectedPayment.tokenAddress,
          buyerAddress: address
        },
        names: cart.items.map((item: SearchResult) => ({
          sld: item.sld,
          tld: item.tld,
          autoRenew: false,
          domainLength: 1
        }))
      };

      const response = await apiRequest({
        endpoint: apiEndpoints.startCheckoutOrder,
        method: 'POST',
        body: JSON.stringify(orderPayload)
      }) as CheckoutOrderRequestResponse;

      if (response.voucher && response.signature) {
        resetCart();
        console.log('Checkout successful!', response);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentOptions();
  }, [fetchPaymentOptions]);

  if (!cart.items?.length) {
    return null;
  }

  const total = cart.items.reduce((sum: number, item: SearchResult) => {
    return sum + parseFloat(item.usdPrice);
  }, 0);

  return (
    <div className="mt-4 p-4 border border-gray-700 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Checkout</h3>
      
      {/* Payment Options */}
      {selectedPayment && (
        <div className="mb-4">
          <p className="text-sm text-gray-400">Payment Method</p>
          <div className="flex items-center gap-2 mt-2">
            <img 
              src={selectedPayment.icon} 
              alt={selectedPayment.symbol} 
              className="w-6 h-6"
            />
            <span>{selectedPayment.symbol}</span>
          </div>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center mb-4">
        <span>Total</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm mb-4">
          {error}
        </div>
      )}

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        disabled={isLoading || !address || !selectedPayment}
        className="w-full"
      >
        {isLoading ? 'Processing...' : address ? 'Complete Purchase' : 'Connect Wallet to Checkout'}
      </Button>
    </div>
  );
};
```

# src/components/DomainProfile/DomainProfilePage.tsx

```tsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Camera, Mail, Globe, MapPin, Loader2 } from 'lucide-react';
import { useDomainProfile } from '../../hooks/useDomainProfile';

export function DomainProfilePage() {
  const { domain } = useParams<{ domain: string }>();
  const [activeTab, setActiveTab] = useState('metadata');
  const { data: profile, isLoading, error } = useDomainProfile(domain || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#4C82FB]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{domain}</h1>
          <p className="text-gray-500">
            {profile?.owner ? `Owned by ${profile.owner}` : 'Loading ownership information...'}
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8" aria-label="Tabs">
              {['Profile', 'Social', 'NFTs', 'Transactions', 'Subdomains'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`
                    py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.toLowerCase()
                      ? 'border-[#4C82FB] text-[#4C82FB]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'metadata' && (
              <div className="space-y-6">
                {/* Avatar and Bio */}
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    {profile?.metadata?.avatar ? (
                      <img
                        src={profile.metadata.avatar}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="prose max-w-none">
                      <p className="text-gray-700">
                        {profile?.metadata?.bio || 'No bio provided'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile?.metadata?.email && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{profile.metadata.email}</span>
                    </div>
                  )}
                  
                  {profile?.metadata?.website && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <a 
                        href={profile.metadata.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {profile.metadata.website}
                      </a>
                    </div>
                  )}
                  
                  {profile?.metadata?.location && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.metadata.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Other tabs will be implemented next */}
            {activeTab === 'social' && <div>Social accounts coming soon...</div>}
            {activeTab === 'nfts' && <div>NFT collections coming soon...</div>}
            {activeTab === 'transactions' && <div>Transaction history coming soon...</div>}
            {activeTab === 'subdomains' && <div>Subdomains coming soon...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
```

# src/components/DomainProfile/sections/ProfileMetadataSection.tsx

```tsx
import { Camera, Mail, Globe, MapPin } from 'lucide-react';
import type { ProfileMetadata } from '../../../types/profile';

interface ProfileMetadataSectionProps {
  metadata: ProfileMetadata;
}

export function ProfileMetadataSection({ metadata }: ProfileMetadataSectionProps) {
  return (
    <div className="space-y-6">
      {/* Avatar and Bio */}
      <div className="flex items-start space-x-6">
        <div className="relative">
          {metadata.avatar ? (
            <img
              src={metadata.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="prose max-w-none">
            <p className="text-gray-700">{metadata.bio || 'No bio provided'}</p>
          </div>
        </div>
      </div>

      {/* Contact and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metadata.email && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span>{metadata.email}</span>
          </div>
        )}
        
        {metadata.website && (
          <div className="flex items-center space-x-2 text-gray-600">
            <Globe className="w-4 h-4" />
            <a 
              href={metadata.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {metadata.website}
            </a>
          </div>
        )}
        
        {metadata.location && (
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{metadata.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
```

# src/components/Layout.tsx

```tsx
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

# src/components/NameRecommendations.tsx

```tsx
import { useQuery } from '@tanstack/react-query';
import { SearchResult } from '../types/api';
import { apiRequest } from '../utils/network';
import { Skeleton } from './ui/Skeleton';
import { useCart } from '../hooks/useCart';

// Hook for recommendations
export function useNameRecommendations(sld: string) {
  return useQuery({
    queryKey: ['recommendations', sld],
    queryFn: async () => {
      if (!sld) return [];
      return apiRequest({
        endpoint: `/v1/partner/recommendations?sld=${sld}`,
        method: 'GET',
        body: null,
      }) as Promise<SearchResult[]>;
    },
    enabled: Boolean(sld),
  });
}

export function NameRecommendations({ searchTerm }: { searchTerm: string }) {
  const { data: recommendations, isLoading } = useNameRecommendations(searchTerm);
  const { handleAddToCart, getIsItemInCart } = useCart();

  if (isLoading) {
    return (
      <div className="mt-8 space-y-3">
        <Skeleton className="h-[72px]" />
        <Skeleton className="h-[72px]" />
      </div>
    );
  }

  if (!recommendations?.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Similar Names You Might Like
      </h2>
      <div className="space-y-3">
        {recommendations.map((result) => (
          <div
            key={`${result.sld}.${result.tld}`}
            className="bg-[#2A2D36] rounded-lg p-4 flex items-center justify-between group"
          >
            <div className="flex-1">
              <span className="text-white text-lg">
                {result.sld}.{result.tld}
              </span>
              <div className="text-gray-400 text-sm mt-1">
                {result.status === 'available' ? 'Available' : 'Registered'}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-white">
                  ${parseFloat(result.usdPrice || '0').toFixed(2)}
                </div>
                {result.nativeAmount && (
                  <div className="text-gray-400 text-sm">
                    {result.nativeAmount} {result.nativeCurrency}
                  </div>
                )}
              </div>
              
              {result.status === 'available' && (
                <button
                  onClick={() => handleAddToCart(result)}
                  className="bg-[#4C82FB] hover:bg-[#3E74E7] text-white px-6 py-2 rounded-lg transition-colors"
                  disabled={getIsItemInCart(result)}
                >
                  {getIsItemInCart(result) ? 'Added' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

# src/components/Navigation.tsx

```tsx
import { Link, useLocation } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Search, Briefcase, ChevronDown } from 'lucide-react';

export function Navigation() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const location = useLocation();

  const shortenAddress = (addr: string) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';
  };

  const handleConnect = () => {
    const connector = connectors[0];
    if (connector) {
      connect({ connector });
    }
  };

  const isActivePath = (path: string) => {
    return location?.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and main navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-[#4C82FB]">
                D3 Names
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath('/')
                    ? 'text-[#4C82FB] border-b-2 border-[#4C82FB]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
              <Link
                to="/portfolio"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  isActivePath('/portfolio')
                    ? 'text-[#4C82FB] border-b-2 border-[#4C82FB]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Portfolio
              </Link>
            </div>
          </div>

          {/* Right side - Wallet connection */}
          <div className="flex items-center">
            {isConnected && address ? (
              <div className="relative inline-block text-left">
                <button
                  onClick={() => disconnect()}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  {shortenAddress(address)}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnect}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4C82FB] hover:bg-[#3E74E7] focus:outline-none"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActivePath('/')
                ? 'text-[#4C82FB] border-l-4 border-[#4C82FB] bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Search
          </Link>
          <Link
            to="/portfolio"
            className={`block pl-3 pr-4 py-2 text-base font-medium ${
              isActivePath('/portfolio')
                ? 'text-[#4C82FB] border-l-4 border-[#4C82FB] bg-blue-50'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

# src/components/Portfolio/DomainList.tsx

```tsx
import { Clock, ArrowUpRight, MoreVertical } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';

interface Domain {
  sld: string;
  tld: string;
  expirationDate: string;
  registrationDate: string;
  value: string;
  chainId: string;
  contractAddress: string;
  tokenId: string;
}

interface DomainListProps {
  domains: Domain[];
  view: 'grid' | 'list';
}

export function DomainList({ domains, view }: DomainListProps) {
  if (domains.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No domains found in your portfolio</p>
      </div>
    );
  }

  if (view === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {domains.map((domain) => (
          <div
            key={`${domain.sld}.${domain.tld}`}
            className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <Link
                  to={`/domain/${domain.sld}.${domain.tld}`}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1"
                >
                  {domain.sld}.{domain.tld}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-sm text-gray-500 mt-1">
                  Chain ID: {domain.chainId}
                </p>
              </div>
              <button className="p-1 hover:bg-gray-200 rounded">
                <MoreVertical className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <div className="mt-3 flex justify-between items-end">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                Expires {formatDistanceToNow(new Date(domain.expirationDate))}
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Value</p>
                <p className="text-lg font-medium text-gray-900">
                  ${parseFloat(domain.value).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Domain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Chain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Registration Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Expiration
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Value
            </th>
            <th className="px-6 py-3 relative">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {domains.map((domain) => (
            <tr
              key={`${domain.sld}.${domain.tld}`}
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4">
                <Link
                  to={`/domain/${domain.sld}.${domain.tld}`}
                  className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-1"
                >
                  {domain.sld}.{domain.tld}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {domain.chainId}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {new Date(domain.registrationDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {formatDistanceToNow(new Date(domain.expirationDate))}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                ${parseFloat(domain.value).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

# src/components/Portfolio/ExpirationAlerts.tsx

```tsx
import { AlertTriangle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Domain {
  sld: string;
  tld: string;
  expirationDate: string;
}

interface ExpirationAlertsProps {
  domains: Domain[];
}

export function ExpirationAlerts({ domains }: ExpirationAlertsProps) {
  // Filter domains expiring in the next 30 days
  const expiringDomains = domains
    .map(domain => ({
      ...domain,
      daysUntilExpiration: Math.floor(
        (new Date(domain.expirationDate).getTime() - Date.now()) /
        (1000 * 60 * 60 * 24)
      ),
    }))
    .filter(domain => domain.daysUntilExpiration <= 30 && domain.daysUntilExpiration > 0)
    .sort((a, b) => a.daysUntilExpiration - b.daysUntilExpiration);

  if (expiringDomains.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">No domains expiring soon</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expiringDomains.map((domain) => (
        <div
          key={`${domain.sld}.${domain.tld}`}
          className={`p-3 rounded-lg flex items-center gap-3 ${
            domain.daysUntilExpiration <= 7
              ? 'bg-red-50'
              : domain.daysUntilExpiration <= 14
              ? 'bg-orange-50'
              : 'bg-yellow-50'
          }`}
        >
          <AlertTriangle className={`w-5 h-5 ${
            domain.daysUntilExpiration <= 7
              ? 'text-red-500'
              : domain.daysUntilExpiration <= 14
              ? 'text-orange-500'
              : 'text-yellow-500'
          }`} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {domain.sld}.{domain.tld}
            </p>
            <p className="text-xs text-gray-500">
              Expires {formatDistanceToNow(new Date(domain.expirationDate))}
            </p>
          </div>
          <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Renew
          </button>
        </div>
      ))}
    </div>
  );
}
```

# src/components/Portfolio/PortfolioDashboard.tsx

```tsx
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { BarChart3, Calendar, Wallet2 } from 'lucide-react';
import { DomainList } from '../Portfolio/DomainList';
import { ExpirationAlerts } from './ExpirationAlerts';
import { PortfolioStats } from './PortfolioStats';
import { usePortfolio } from '../../hooks/usePortfolio';

import type { DomainPortfolio } from '../../types/portfolio';

export function PortfolioDashboard() {
  const { address } = useAccount();
  const { data: portfolio, isLoading } = usePortfolio(address);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  if (!address) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Wallet2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700">Connect Your Wallet</h2>
          <p className="text-gray-500 mt-2">Connect your wallet to view your domain portfolio</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="animate-pulse p-8">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-96 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Domain Portfolio</h1>
        <p className="text-gray-500 mt-1">Manage and track your domain investments</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <PortfolioStats 
          totalDomains={portfolio?.analytics.totalDomains || 0}
          totalValue={portfolio?.analytics.totalValue || '0'}
          expiringCount={portfolio?.analytics.expiringCount || 0}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Domain List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Domains</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setView('grid')}
                  className={`p-2 rounded ${
                    view === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-2 rounded ${
                    view === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <DomainList 
              domains={portfolio?.domains || []}
              view={view}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Expiration Alerts */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Expiring Domains
            </h2>
            <ExpirationAlerts 
              domains={portfolio?.domains || []}
            />
          </div>

          {/* Chain Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Chain Distribution
            </h2>
            <div className="space-y-4">
              {portfolio?.analytics.chainDistribution.map((chain) => (
                <div key={chain.chainId} className="flex justify-between items-center">
                  <span className="text-gray-600">{chain.chainId}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${chain.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">
                      {chain.count} domains
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

# src/components/Portfolio/PortfolioStats.tsx

```tsx
import { DollarSign, Globe, Clock } from 'lucide-react';

interface PortfolioStatsProps {
  totalDomains: number;
  totalValue: string;
  expiringCount: number;
}

export function PortfolioStats({
  totalDomains,
  totalValue,
  expiringCount
}: PortfolioStatsProps) {
  const stats = [
    {
      name: 'Total Domains',
      value: totalDomains,
      icon: Globe,
      change: '+4.75%',
      changeType: 'increase' as const
    },
    {
      name: 'Portfolio Value',
      value: `$${parseFloat(totalValue).toLocaleString()}`,
      icon: DollarSign,
      change: '+54.02%',
      changeType: 'increase' as const
    },
    {
      name: 'Expiring Soon',
      value: expiringCount,
      icon: Clock,
      change: '-12.5%',
      changeType: 'decrease' as const
    }
  ];

  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center">
            <div className="p-2 bg-blue-50 rounded-lg">
              <stat.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
          <div className="mt-4">
            <div
              className={`inline-flex items-center text-sm font-medium
                ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}
            >
              {stat.change}
            </div>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>
      ))}
    </>
  );
}
```

# src/components/SearchBar.tsx

```tsx
import { X } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-[60px] px-6 text-xl bg-white rounded-full border-2 border-[#4C82FB] focus:outline-none focus:border-[#4C82FB] transition-all"
          placeholder="Search names..."
          style={{
            boxShadow: '0 0 0 2px rgba(76, 130, 251, 0.1)',
          }}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
```

# src/components/SearchPage.tsx

```tsx
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { NameRecommendations } from './NameRecommendations';
import { useSearch } from '../hooks/useSearch';
import { Cart } from './Cart';

export function SearchPage() {
  const {
    searchInput,
    setSearchInput,
    searchResults,
    isLoading,
    isError,
    error,
  } = useSearch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA] pt-32 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[#4C82FB] text-5xl md:text-6xl font-bold mb-6 text-center">
          Your web3 username
        </h1>
        <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto text-center">
          Your identity across web3, one name for all your crypto addresses,
          and your decentralised website.
        </p>
        
        <SearchBar 
          value={searchInput}
          onChange={setSearchInput}
        />
        
        <div className="mt-8">
          <SearchResults 
            searchResults={searchResults}
            isLoading={isLoading}
            isError={isError}
            error={error}
            searchTerm={searchInput}
          />
        </div>

        {searchInput && !isLoading && (
          <NameRecommendations searchTerm={searchInput} />
        )}

        <div className="mt-8">
          <Cart />
        </div>
      </div>
    </div>
  );
}
```

# src/components/SearchResultCard.tsx

```tsx
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import type { SearchResult } from '../types/api';
import { useCart } from '../hooks/useCart';

type SearchResultCardProps = {
  searchResult: SearchResult;
};

export const SearchResultCard = memo(function SearchResultCard({ 
  searchResult 
}: SearchResultCardProps) {
  const { handleAddToCart, handleRemoveFromCart, getIsItemInCart } = useCart();
  const isItemInCart = getIsItemInCart(searchResult);
  const isDomainAvailable = searchResult?.status?.toLowerCase() === 'available';
  const isRegistered = searchResult?.status?.toLowerCase() === 'registered';
  const domainName = `${searchResult.sld}.${searchResult.tld}`;

  const handleCartAction = () => {
    if (isItemInCart) {
      handleRemoveFromCart(searchResult);
    } else {
      handleAddToCart(searchResult);
    }
  };

  return (
    <div className="bg-[#2A2D36] rounded-lg p-4 flex items-center justify-between group">
      <div className="flex items-center gap-3 flex-1">
        {isDomainAvailable ? (
          <CheckCircle className="w-5 h-5 text-green-400" />
        ) : (
          <XCircle className="w-5 h-5 text-red-400" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xl text-white font-normal">
              {domainName}
            </span>
            {isRegistered && (
              <Link 
                to={`/domain/${domainName}`}
                className="text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink size={16} />
              </Link>
            )}
          </div>
          <div className="text-sm mt-0.5">
            {isDomainAvailable && (
              <span className="text-green-400">Available</span>
            )}
            {isRegistered && (
              <span className="text-red-400">Registered</span>
            )}
            {!isDomainAvailable && !isRegistered && (
              <span className="text-gray-400 capitalize">{searchResult.status}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-white text-lg">
            ${parseFloat(searchResult.usdPrice || '0').toFixed(2)}
          </div>
          <div className="text-gray-400 text-sm">
            {searchResult.nativeAmount} {searchResult.nativeCurrency}
          </div>
        </div>

        {isDomainAvailable && (
          <button
            onClick={handleCartAction}
            className="bg-[#4C82FB] hover:bg-[#3E74E7] text-white px-6 py-2 rounded-lg transition-colors"
          >
            {isItemInCart ? 'Remove' : 'Add to Cart'}
          </button>
        )}
      </div>
    </div>
  );
});
```

# src/components/SearchResults.tsx

```tsx
import type { ApiErrorResponse, SearchResultRequestResponse } from '../types/api';
import { SearchResultCard } from './SearchResultCard';

interface SearchResultsProps {
  isError: boolean;
  isLoading: boolean;
  error: ApiErrorResponse | null;
  searchResults: SearchResultRequestResponse | undefined;
  searchTerm?: string;
}

export function SearchResults({
  isError,
  isLoading,
  error,
  searchResults,
  searchTerm,
}: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-4 space-y-3">
        <div className="animate-pulse bg-[#2A2D36] rounded-lg h-[72px]" />
        <div className="animate-pulse bg-[#2A2D36] rounded-lg h-[72px]" />
      </div>
    );
  }

  if (isError && error) {
    return (
      <div className="mt-4 p-4 text-center text-red-500">
        {error.message || 'Something went wrong'}
      </div>
    );
  }

  if (!searchResults?.pageItems?.length && searchTerm) {
    return (
      <div className="mt-4 text-center text-gray-500">
        No domains found for "{searchTerm}"
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {searchResults?.pageItems?.map((searchResult) => (
        <SearchResultCard
          key={`${searchResult.sld}.${searchResult.tld}`}
          searchResult={searchResult}
        />
      ))}
    </div>
  );
}
```

# src/components/ui/Button.tsx

```tsx
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/twMerge';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

# src/components/ui/Card.tsx

```tsx
import * as React from 'react';
import { cn } from '../../utils/twMerge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow',
        className
      )}
      {...props}
    />
  );
}
```

# src/components/ui/Skeleton.tsx

```tsx
import { cn } from "../../utils/twMerge";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-700/20", className)}
      {...props}
    />
  );
}

export { Skeleton };
```

# src/config/apiConfig.ts

```ts
export const defaultBaseApiPath = 'https://api-public.d3.app';

// VITE_D3_API_KEY=your_api_key_here
// VITE_API_ENDPOINT=https://api-public.d3.app
```

# src/config/constants.ts

```ts
// src/config/constants.ts
export const searchParams = {
  sld: 'sld',
  tld: 'tld',
  limit: 'limit',
  skip: 'skip',
};

export const cacheKeys = {
  fetchSearchResults: 'FETCH_SEARCH_RESULTS',
  fetchPaymentMethods: 'FETCH_PAYMENT_METHODS',
  startCheckoutOrder: 'START_CHECKOUT_ORDER',
};

export const apiEndpoints = {
  search: '/v1/partner/search',
  paymentOptions: '/v1/partner/payment/options',
  startCheckoutOrder: '/v1/partner/order',
};

export const PAGE_SIZE = 12;
export const CART_LIMIT = 20;

export const currencyConfigForFractionDigits = {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
};

export const numbersConfigForFractionDigits = {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
};
```

# src/config/evmConfig.ts

```ts
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
```

# src/hooks/useCart.ts

```ts
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
```

# src/hooks/useDomainProfile.ts

```ts
import { useQuery } from '@tanstack/react-query';
import type { DomainProfile } from '../types/profile';
import { apiRequest } from '../utils/network';

export function useDomainProfile(domain: string) {
  return useQuery({
    queryKey: ['domainProfile', domain],
    queryFn: async () => {
      try {
        // This endpoint would need to be implemented on your backend
        const response = await apiRequest({
          endpoint: `/v1/domain/${domain}/profile`,
          method: 'GET',
          body: null,
        });
        return response as DomainProfile;
      } catch (error) {
        throw new Error('Failed to fetch domain profile');
      }
    },
    enabled: Boolean(domain),
  });
}
```

# src/hooks/useFetchRequest.ts

```ts
import { useQuery, type QueryKey, UseQueryOptions } from '@tanstack/react-query';
import type { ApiErrorResponse } from '../types/api';
import { apiRequest } from '../utils/network';

interface FetchRequestOptions<TData, TError> {
  queryKey: QueryKey;
  endpoint: string;
  queryParameters?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;
  method?: 'GET' | 'POST' | 'PUT' | 'UPDATE';
  requestBody?: unknown;
}

export const useFetchRequest = <TData = unknown, TError = ApiErrorResponse>({
  queryKey,
  endpoint,
  queryParameters = {},
  method = 'GET',
  requestBody = null,
}: FetchRequestOptions<TData, TError>) => {
  const body = requestBody ? JSON.stringify(requestBody) : null;
  
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      const response = await apiRequest({ endpoint, body, method });
      return response as TData;
    },
    ...queryParameters,
  });
};
```

# src/hooks/usePortfolio.ts

```ts
import { useQuery } from '@tanstack/react-query';
import type { Address } from 'viem';
import type { DomainPortfolio } from '../types/portfolio';
import { apiRequest } from '../utils/network';

export function usePortfolio(address?: Address) {
  return useQuery({
    queryKey: ['portfolio', address],
    queryFn: async () => {
      if (!address) throw new Error('No address provided');

      // Fetch tokens for the address
      const response = await apiRequest({
        endpoint: `/v1/partner/tokens/EVM/${address}`,
        method: 'GET',
        body: null,
      });

      // Transform the response into our portfolio format
      const portfolio: DomainPortfolio = {
        domains: response.pageItems.map((item: any) => ({
          sld: item.sld,
          tld: item.tld,
          expirationDate: item.expirationDate,
          registrationDate: new Date(item.expirationDate).toISOString(), // This would come from additional metadata
          value: item.usdPrice || '0',
          chainId: item.chainId,
          contractAddress: item.contractAddress,
          tokenId: item.tokenId,
        })),
        analytics: {
          totalDomains: response.total,
          totalValue: response.pageItems.reduce((acc: number, item: any) => 
            acc + parseFloat(item.usdPrice || '0'), 0).toString(),
          expiringCount: response.pageItems.filter((item: any) => {
            const daysUntilExpiration = Math.floor(
              (new Date(item.expirationDate).getTime() - Date.now()) / 
              (1000 * 60 * 60 * 24)
            );
            return daysUntilExpiration <= 30;
          }).length,
          recentlyRegistered: response.pageItems.filter((item: any) => {
            const daysSinceRegistration = Math.floor(
              (Date.now() - new Date(item.registrationDate).getTime()) / 
              (1000 * 60 * 60 * 24)
            );
            return daysSinceRegistration <= 7;
          }).length,
          chainDistribution: Object.entries(
            response.pageItems.reduce((acc: any, item: any) => {
              acc[item.chainId] = (acc[item.chainId] || 0) + 1;
              return acc;
            }, {})
          ).map(([chainId, count]) => ({
            chainId,
            count: count as number,
            percentage: ((count as number) / response.total) * 100,
          })),
        },
        owner: address,
      };

      return portfolio;
    },
    enabled: !!address,
  });
}
```

# src/hooks/useSearch.ts

```ts
import { useCallback, useMemo, useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { apiEndpoints, cacheKeys, PAGE_SIZE } from '../config/constants';
import { useFetchRequest } from './useFetchRequest';
import type { SearchResultRequestResponse, ApiErrorResponse } from '../types/api';

type SearchQueryParams = {
  sld: string;
  tld: string;
  skip: number;
  limit: number;
};

const appTlds = import.meta.env.VITE_TLDS || 'core,shib';

// Minimum length for search term before making API calls
const MIN_SEARCH_LENGTH = 3;

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQueryParams, setSearchQueryParams] = useState<SearchQueryParams>({
    sld: '',
    tld: appTlds,
    skip: 0,
    limit: PAGE_SIZE,
  });

  // Much longer debounce time
  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.length >= MIN_SEARCH_LENGTH) {
      setSearchQueryParams(prev => ({
        ...prev,
        sld: value,
      }));
    }
  }, 1000); // Increased to 1 second

  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    } else {
      setSearchQueryParams(prev => ({ ...prev, sld: '' }));
    }
  }, [searchInput, debouncedSearch]);

  const searchUrlWithParams = useMemo(() => {
    if (!searchQueryParams.sld || searchQueryParams.sld.length < MIN_SEARCH_LENGTH) {
      return '';
    }
    return `${apiEndpoints.search}?` + new URLSearchParams({
      sld: searchQueryParams.sld,
      tld: searchQueryParams.tld,
      skip: searchQueryParams.skip.toString(),
      limit: searchQueryParams.limit.toString(),
    }).toString();
  }, [searchQueryParams]);

  const {
    data: searchResults,
    isLoading,
    isError,
    error,
  } = useFetchRequest<SearchResultRequestResponse, ApiErrorResponse>({
    queryKey: [cacheKeys.fetchSearchResults, searchQueryParams],
    endpoint: searchUrlWithParams,
    queryParameters: {
      enabled: Boolean(searchQueryParams.sld) && searchQueryParams.sld.length >= MIN_SEARCH_LENGTH,
      retry: 2,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 60000, // Cache results for 1 minute
      cacheTime: 300000, // Keep in cache for 5 minutes
      refetchOnWindowFocus: false,
    },
  });

  return {
    searchInput,
    setSearchInput,
    searchResults,
    isLoading,
    isError,
    error,
    isReadyToSearch: searchInput.length >= MIN_SEARCH_LENGTH,
  } as const;
};
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --ens-blue: #4C82FB;
  --ens-blue-dark: #3E74E7;
  --ens-green: #45B882;
  --ens-green-dark: #3DA876;
}

body {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

#root {
  min-height: 100vh;
}
```

# src/main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Make sure this is here
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

# src/state/store.ts

```ts
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
```

# src/state/store/defaultState.ts

```ts
import type { Cart, ConnectWallet, AppSettings } from '../../types/store';

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
```

# src/state/store/index.ts

```ts
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
```

# src/types/api.ts

```ts
// src/types/api.ts
import type { BaseError, TransactionReceipt } from 'viem';

export type WalletAddress = 'EVM';

export type ApiErrorResponse = {
  message: string[];
  error?: string;
  status: unknown;
};

export type SearchResult = {
  sld: string;
  tld: string;
  status: string;
  isListed: boolean;
  registrationExpiresAt: string;
  reservationExpiresAt: string;
  usdPrice: string;
  nativeAmount: string;
  nativeCurrency: string;
  clickUrl: string;
  lockExpiresAt: string;
};

export type SearchResultRequestResponse = {
  pageItems: SearchResult[];
  total: number;
};

export type PaymentOption = {
  tokenAddress: string;
  contractAddress: string;
  symbol: string;
  icon: string;
  price: number;
  addressType: WalletAddress;
  chainId: string;
};

export type PaymentOptionRequestResponse = {
  options: PaymentOption[];
};

export type CheckoutOrderRequestResponse = {
  voucher: {
    paymentId: string;
    amount: string;
    token: `0x${string}` | string;
    buyer: `0x${string}` | string;
    voucherExpiration: number;
    orderId: string;
    names: {
      label: string;
      tld: string;
      registry: `0x${string}` | string;
      expirationTime: number;
      owner: `0x${string}` | string;
      renewal: false;
    }[];
  };
  signature: `0x${string}` | string;
};

export type CheckoutCallback = CheckoutOrderRequestResponse & {
  selectedPaymentToken: PaymentOption;
};

export type OnPurchaseInit = (args: {
  handleOnSuccess: (receipt: TransactionReceipt | undefined) => void;
  handleOnError: (error: BaseError | string) => void;
  transactionVoucher: {
    voucher: CheckoutOrderRequestResponse['voucher'];
    signature: `0x${string}` | string;
    selectedPaymentToken: PaymentOption;
  };
}) => Promise<void>;
```

# src/types/portfolio.ts

```ts
import type { Address } from 'viem'

export interface DomainAnalytics {
  totalDomains: number;
  totalValue: string;
  expiringCount: number;
  recentlyRegistered: number;
  chainDistribution: {
    chainId: string;
    count: number;
    percentage: number;
  }[];
}

export interface DomainPortfolio {
  domains: {
    sld: string;
    tld: string;
    expirationDate: string;
    registrationDate: string;
    value: string;
    chainId: string;
    contractAddress: string;
    tokenId: string;
  }[];
  analytics: DomainAnalytics;
  owner: Address;
}

export interface ExpirationAlert {
  domain: string;
  daysUntilExpiration: number;
  expirationDate: string;
}
```

# src/types/profile.ts

```ts
import type { Address } from 'viem'

export type SocialAccount = {
  platform: 'twitter' | 'github' | 'discord' | 'telegram';
  handle: string;
  verified: boolean;
  url: string;
}

export type NFTCollection = {
  contractAddress: Address;
  name: string;
  symbol: string;
  tokens: {
    tokenId: string;
    image: string;
    name: string;
  }[];
}

export type Transaction = {
  hash: string;
  timestamp: number;
  from: string;
  to: string;
  value: string;
  type: 'send' | 'receive' | 'contract';
}

export type Subdomain = {
  name: string;
  owner: string;
  createdAt: number;
  expiresAt: number;
}

export type ProfileMetadata = {
  bio: string;
  avatar: string;
  email?: string;
  website?: string;
  location?: string;
}

export type DomainProfile = {
  domain: string;
  owner: Address;
  socialAccounts: SocialAccount[];
  nftCollections: NFTCollection[];
  transactions: Transaction[];
  subdomains: Subdomain[];
  metadata: ProfileMetadata;
  lastUpdated: number;
}
```

# src/types/store.ts

```ts
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
```

# src/utils/network.ts

```ts
import { defaultBaseApiPath } from '../config/apiConfig';

// Stricter rate limiting configuration
const RATE_LIMIT = {
  MAX_REQUESTS_PER_WINDOW: 2, // Even more conservative
  WINDOW_MS: 2000, // 2 second window
  MIN_REQUEST_SPACING_MS: 1000, // Minimum 1 second between requests
  RETRY_AFTER_429_MS: 8000, // Longer wait after 429
  MAX_RETRIES: 2,
  CACHE_TTL_MS: 60000 // Cache for 1 minute
};

// Simple cache implementation
class RequestCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();

  set(key: string, data: any) {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    // Check if cache entry is still valid
    if (Date.now() - entry.timestamp > RATE_LIMIT.CACHE_TTL_MS) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  clear() {
    this.cache.clear();
  }
}

class RequestQueue {
  private queue: { timestamp: number }[] = [];
  private lastRequestTime = 0;
  private cache = new RequestCache();

  private cleanup() {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT.WINDOW_MS;
    this.queue = this.queue.filter(req => req.timestamp > windowStart);
  }

  async waitIfNeeded(): Promise<void> {
    this.cleanup();

    // Check if we need to wait for the rate limit window
    if (this.queue.length >= RATE_LIMIT.MAX_REQUESTS_PER_WINDOW) {
      const oldestRequest = this.queue[0];
      const waitTime = oldestRequest.timestamp + RATE_LIMIT.WINDOW_MS - Date.now();
      if (waitTime > 0) {
        await new Promise(resolve => setTimeout(resolve, waitTime));
        this.cleanup();
      }
    }

    // Ensure minimum spacing between requests
    const timeSinceLastRequest = Date.now() - this.lastRequestTime;
    if (timeSinceLastRequest < RATE_LIMIT.MIN_REQUEST_SPACING_MS) {
      await new Promise(resolve => 
        setTimeout(resolve, RATE_LIMIT.MIN_REQUEST_SPACING_MS - timeSinceLastRequest)
      );
    }
  }

  addRequest() {
    this.cleanup();
    this.lastRequestTime = Date.now();
    this.queue.push({ timestamp: this.lastRequestTime });
  }

  getCachedResponse(key: string) {
    return this.cache.get(key);
  }

  setCachedResponse(key: string, data: any) {
    this.cache.set(key, data);
  }
}

const requestQueue = new RequestQueue();

export class APIError extends Error {
  public status: number;
  public errors: string[];

  constructor(message: string, status: number, errors: string[] = []) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.errors = errors;
  }
}

async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const apiRequest = async ({
  endpoint,
  body,
  method = 'GET',
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}: {
  endpoint: string;
  body: BodyInit | null;
  method?: string;
  headers?: HeadersInit;
}) => {
  const apiKey = import.meta.env.VITE_D3_API_KEY;
  const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
  const basePath = apiEndpoint || defaultBaseApiPath;
  const absolutePath = basePath + endpoint;
  const cacheKey = `${method}:${absolutePath}:${body}`;

  // Check cache first for GET requests
  if (method === 'GET') {
    const cachedResponse = requestQueue.getCachedResponse(cacheKey);
    if (cachedResponse) {
      return cachedResponse;
    }
  }

  let retries = 0;
  const requestHeaders = { ...headers, 'Api-Key': apiKey };

  while (retries <= RATE_LIMIT.MAX_RETRIES) {
    try {
      // Wait if we need to respect rate limits
      await requestQueue.waitIfNeeded();

      // Make the request
      requestQueue.addRequest();
      const response = await fetch(absolutePath, {
        method,
        headers: requestHeaders,
        ...(method === 'POST' && body && { body }),
      });

      // Handle rate limiting
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        const waitTime = retryAfter ? 
          parseInt(retryAfter) * 1000 : 
          RATE_LIMIT.RETRY_AFTER_429_MS * (retries + 1);
        
        console.warn(`Rate limited, waiting ${waitTime}ms before retry`);
        await wait(waitTime);
        retries++;
        continue;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new APIError(
          errorData.message || 'API request failed',
          response.status,
          Array.isArray(errorData.message) ? errorData.message : [errorData.message]
        );
      }

      const data = await response.json();
      
      // Cache successful GET responses
      if (method === 'GET') {
        requestQueue.setCachedResponse(cacheKey, data);
      }

      return data;

    } catch (error) {
      if (error instanceof APIError && error.status !== 429) {
        throw error;
      }
      
      if (retries === RATE_LIMIT.MAX_RETRIES) {
        throw new APIError(
          'Maximum retry attempts reached',
          429,
          ['Too many requests, please try again later']
        );
      }

      retries++;
      await wait(RATE_LIMIT.RETRY_AFTER_429_MS * retries);
    }
  }

  throw new APIError(
    'Request failed after maximum retries',
    500,
    ['An unexpected error occurred']
  );
};
```

# src/utils/twMerge.ts

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ens-blue': '#4C82FB',
        'ens-blue-dark': '#3E74E7',
        'ens-green': '#45B882',
        'ens-green-dark': '#3DA876',
      },
    },
  },
  plugins: [],
}
```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

# vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
```

