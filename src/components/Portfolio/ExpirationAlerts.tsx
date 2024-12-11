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