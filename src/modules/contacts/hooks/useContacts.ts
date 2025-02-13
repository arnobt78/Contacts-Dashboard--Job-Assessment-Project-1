import { useQuery } from 'react-query';
import { getContacts, ContactsResponse } from '../../api/getContacts';

// Custom hook to fetch contacts based on the provided parameters
export const useContacts = (params: {
  page?: number; // The page number for pagination
  limit?: number; // The number of contacts to fetch per page
  search?: string; // The search query to filter contacts by name or email
  department?: string; // The department to filter contacts by
  isActive?: boolean; // The active status to filter contacts by
}) => {
  // Use the useQuery hook from react-query to fetch contacts
  return useQuery<ContactsResponse>(['contacts', params], () =>
    getContacts(params),
  );
};
