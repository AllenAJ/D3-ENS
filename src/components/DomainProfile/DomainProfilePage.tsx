import { useState } from 'react';
import type { DomainProfile } from '../../types/profile';
import { SocialAccountsSection } from './sections/SocialAccountsSection';
import { NFTCollectionsSection } from './sections/NFTCollectionsSection';
import { TransactionHistorySection } from './sections/TransactionHistorySection';
import { SubdomainsSection } from './sections/SubdomainsSection';
import { ProfileMetadataSection } from './sections/ProfileMetadataSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Card } from '../ui/Card';

interface DomainProfilePageProps {
  profile: DomainProfile;
  isLoading?: boolean;
}

export function DomainProfilePage({ profile, isLoading }: DomainProfilePageProps) {
  const [activeTab, setActiveTab] = useState('metadata');

  if (isLoading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{profile.domain}</h1>
        <p className="text-gray-500">Owned by {profile.owner}</p>
      </div>

      {/* Main Content */}
      <Card className="bg-white shadow-sm">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="border-b border-gray-200">
            <TabsTrigger value="metadata">Profile</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="subdomains">Subdomains</TabsTrigger>
          </TabsList>

          <div className="p-6">
            <TabsContent value="metadata">
              <ProfileMetadataSection metadata={profile.metadata} />
            </TabsContent>

            <TabsContent value="social">
              <SocialAccountsSection accounts={profile.socialAccounts} />
            </TabsContent>

            <TabsContent value="nfts">
              <NFTCollectionsSection collections={profile.nftCollections} />
            </TabsContent>

            <TabsContent value="transactions">
              <TransactionHistorySection transactions={profile.transactions} />
            </TabsContent>

            <TabsContent value="subdomains">
              <SubdomainsSection subdomains={profile.subdomains} />
            </TabsContent>
          </div>
        </Tabs>
      </Card>
    </div>
  );
}