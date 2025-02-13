import React, { useState } from 'react';
import { useContacts } from '../hooks/useContacts';
import ContactCard from '../components/ContactCard';
import ContactDetailsModal from '../components/ContactDetailsModal';
import { Contact } from '../../api/getContacts';

const ContactsPage: React.FC = () => {
  // State variables for pagination, search, department filter, active status filter, and selected contact
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Fetch contacts using the custom hook with the specified parameters
  const { data, isLoading, error } = useContacts({
    page,
    limit: 5,
    search,
    department,
    isActive,
  });

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Handle department filter change
  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartment(e.target.value);
  };

  // Handle active status filter change
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked ? true : undefined);
  };

  // Handle previous page button click
  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  // Handle next page button click
  const handleNextPage = () => {
    if (data && page < data.pagination.totalPages) setPage(page + 1);
  };

  // Handle contact card click to select a contact
  const handleCardClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  // Handle modal close to deselect the contact
  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts Dashboard</h1>
      <div className="mb-4 flex flex-wrap items-center">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={handleSearchChange}
          className="p-2 border rounded mr-2 mb-2"
        />
        <select
          value={department}
          onChange={handleDepartmentChange}
          className="p-2 border rounded mr-2 mb-2"
        >
          <option value="">All Departments</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Support">Support</option>
          <option value="HR">HR</option>
        </select>
        <label className="inline-flex items-center mb-2">
          <input
            type="checkbox"
            checked={isActive === true}
            onChange={handleStatusChange}
            className="mr-2"
          />
          Active
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          // Render loading skeletons if data is loading
          Array.from({ length: 5 }).map((_, index) => (
            <ContactCard key={index} isLoading />
          ))
        ) : data?.contacts.length === 0 ? (
          // Render message if no contacts are found
          <p className="text-gray-500">No contacts found.</p>
        ) : (
          // Render contact cards
          data?.contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onClick={handleCardClick}
            />
          ))
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="p-2 border rounded"
        >
          Previous
        </button>
        <span>
          Page {page} of {data?.pagination.totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={data && page >= data.pagination.totalPages}
          className="p-2 border rounded"
        >
          Next
        </button>
      </div>
      {selectedContact && (
        <ContactDetailsModal
          contact={selectedContact}
          onClose={handleCloseModal}
          error={error as string | undefined}
        />
      )}
    </div>
  );
};

export default ContactsPage;
