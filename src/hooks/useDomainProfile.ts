import { useQuery } from '@tanstack/react-query';
import type { DomainProfile } from '../types/profile';
import { apiRequest } from '../utils/network';

export function useDomainProfile(domain: string) {
  return useQuery({
    queryKey: ['domainProfile', domain],
    queryFn: async () => {
      try {
        // This endpoint would need to be implemented on your backend
        const response = await apiRequest({
          endpoint: `/v1/domain/${domain}/profile`,
          method: 'GET',
          body: null,
        });
        return response as DomainProfile;
      } catch (error) {
        throw new Error('Failed to fetch domain profile');
      }
    },
    enabled: Boolean(domain),
  });
}