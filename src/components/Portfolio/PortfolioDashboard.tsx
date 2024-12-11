import { useState } from 'react';
import { useAccount } from 'wagmi';
import { BarChart3, Calendar, Wallet2 } from 'lucide-react';
import { DomainList } from '../Portfolio/DomainList';
import { ExpirationAlerts } from './ExpirationAlerts';
import { PortfolioStats } from './PortfolioStats';
import { usePortfolio } from '../../hooks/usePortfolio';

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