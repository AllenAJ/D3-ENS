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