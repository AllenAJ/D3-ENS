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