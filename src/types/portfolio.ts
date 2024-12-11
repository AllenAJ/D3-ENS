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