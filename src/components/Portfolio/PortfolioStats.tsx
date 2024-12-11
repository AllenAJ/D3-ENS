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