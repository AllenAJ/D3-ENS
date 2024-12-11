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