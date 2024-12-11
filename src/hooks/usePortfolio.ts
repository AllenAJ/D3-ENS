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