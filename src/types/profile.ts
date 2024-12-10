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