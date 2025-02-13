// export interface Activity {
//   date: string;
//   description: string;
// }

import { ReactNode } from 'react';

// export interface ContactStatistics {
//   totalCalls: number;
//   totalEmails: number;
//   totalMeetings: number;
// }

// export interface Contact {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   country: string;
//   department: string;
//   isActive: boolean;
//   avatarUrl: string;
//   activeSinceDate: string;
//   recentActivity: Activity[];
//   statistics: ContactStatistics;
// }

// export interface ContactsResponse {
//   contacts: Contact[];
//   pagination: {
//     total: number;
//     page: number;
//     limit: number;
//     totalPages: number;
//   };
// }

// // Mock data
// const mockContacts: Contact[] = Array.from({ length: 40 }, (_, index) => ({
//   id: index + 1,
//   name: `Contact ${index + 1}`,
//   email: `contact${index + 1}@example.com`,
//   phone: `123-456-789${index}`,
//   address: `123 Main St, City ${index}, Country`,
//   city: `City ${index}`,
//   country: `Country`,
//   department: ['Sales', 'Marketing', 'Engineering', 'Support', 'HR'][index % 5],
//   isActive: index % 2 === 0,
//   avatarUrl: `https://avatars.dicebear.com/api/human/${index}.svg`,
//   activeSinceDate: new Date().toISOString(),
//   recentActivity: [
//     { date: new Date().toISOString(), description: 'Activity 1' },
//     { date: new Date().toISOString(), description: 'Activity 2' },
//     { date: new Date().toISOString(), description: 'Activity 3' },
//   ],
//   statistics: {
//     totalCalls: index * 10,
//     totalEmails: index * 5,
//     totalMeetings: index * 2,
//   },
// }));

// export const getContacts = async (params: {
//   page?: number;
//   limit?: number;
//   search?: string;
//   department?: string;
//   isActive?: boolean;
// }): Promise<ContactsResponse> => {
//   const { page = 1, limit = 5, search, department, isActive } = params;

//   let filteredContacts = mockContacts;

//   if (search) {
//     filteredContacts = filteredContacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(search.toLowerCase()) ||
//         contact.email.toLowerCase().includes(search.toLowerCase()),
//     );
//   }

//   if (department) {
//     filteredContacts = filteredContacts.filter(
//       (contact) => contact.department === department,
//     );
//   }

//   if (isActive !== undefined) {
//     filteredContacts = filteredContacts.filter(
//       (contact) => contact.isActive === isActive,
//     );
//   }

//   const total = filteredContacts.length;
//   const totalPages = Math.ceil(total / limit);
//   const start = (page - 1) * limit;
//   const end = start + limit;
//   const contacts = filteredContacts.slice(start, end);

//   return {
//     contacts,
//     pagination: {
//       total,
//       page,
//       limit,
//       totalPages,
//     },
//   };
// };

// export const getContactsCount = async (params: {
//   search?: string;
//   department?: string;
//   isActive?: boolean;
// }): Promise<number> => {
//   const { search, department, isActive } = params;

//   let filteredContacts = mockContacts;

//   if (search) {
//     filteredContacts = filteredContacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(search.toLowerCase()) ||
//         contact.email.toLowerCase().includes(search.toLowerCase()),
//     );
//   }

//   if (department) {
//     filteredContacts = filteredContacts.filter(
//       (contact) => contact.department === department,
//     );
//   }

//   if (isActive !== undefined) {
//     filteredContacts = filteredContacts.filter(
//       (contact) => contact.isActive === isActive,
//     );
//   }

//   return filteredContacts.length;
// };

// Define the structure of an activity
export interface Activity {
  date: string;
  description: string;
}

// Define the structure of contact statistics
export interface ContactStatistics {
  responseRate: ReactNode;
  totalCalls: number;
  totalEmails: number;
  totalMeetings: number;
}

// Define the structure of a contact
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  department: string;
  isActive: boolean;
  avatarUrl: string;
  activeSinceDate: string;
  recentActivity: Activity[];
  statistics: ContactStatistics;
}

// Define the structure of the response from the getContacts function
export interface ContactsResponse {
  contacts: Contact[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Mock data for contacts
const mockContacts: Contact[] = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `Contact ${index + 1}`,
  email: `contact${index + 1}@example.com`,
  phone: `123-456-789${index}`,
  address: `123 Main St, City ${index}, Country`,
  city: `City ${index}`,
  country: `Country`,
  department: ['Sales', 'Marketing', 'Engineering', 'Support', 'HR'][index % 5],
  isActive: index % 2 === 0,
  avatarUrl: `https://robohash.org/${index}.png`,
  activeSinceDate: new Date().toISOString(),
  recentActivity: [
    { date: new Date().toISOString(), description: 'Activity 1' },
    { date: new Date().toISOString(), description: 'Activity 2' },
    { date: new Date().toISOString(), description: 'Activity 3' },
  ],
  statistics: {
    responseRate: null,
    totalCalls: index * 10,
    totalEmails: index * 5,
    totalMeetings: index * 2,
  },
}));

// Function to get contacts based on the provided parameters
export const getContacts = async (params: {
  page?: number;
  limit?: number;
  search?: string;
  department?: string;
  isActive?: boolean;
}): Promise<ContactsResponse> => {
  const { page = 1, limit = 5, search, department, isActive } = params;

  let filteredContacts = mockContacts;

  // Filter contacts based on the search query
  if (search) {
    filteredContacts = filteredContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Filter contacts based on the department
  if (department) {
    filteredContacts = filteredContacts.filter(
      (contact) => contact.department === department,
    );
  }

  // Filter contacts based on the active status
  if (isActive !== undefined) {
    filteredContacts = filteredContacts.filter(
      (contact) => contact.isActive === isActive,
    );
  }

  const total = filteredContacts.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;
  const contacts = filteredContacts.slice(start, end);

  return {
    contacts,
    pagination: {
      total,
      page,
      limit,
      totalPages,
    },
  };
};

// Function to get the count of contacts based on the provided parameters
export const getContactsCount = async (params: {
  search?: string;
  department?: string;
  isActive?: boolean;
}): Promise<number> => {
  const { search, department, isActive } = params;

  let filteredContacts = mockContacts;

  // Filter contacts based on the search query
  if (search) {
    filteredContacts = filteredContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Filter contacts based on the department
  if (department) {
    filteredContacts = filteredContacts.filter(
      (contact) => contact.department === department,
    );
  }

  // Filter contacts based on the active status
  if (isActive !== undefined) {
    filteredContacts = filteredContacts.filter(
      (contact) => contact.isActive === isActive,
    );
  }

  return filteredContacts.length;
};
