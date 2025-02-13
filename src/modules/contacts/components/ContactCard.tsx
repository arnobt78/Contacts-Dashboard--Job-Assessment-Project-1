import React from 'react';
import { Contact } from '../../api/getContacts';

// Define the props for the ContactCard component
interface ContactCardProps {
  contact?: Contact; // The contact information to display
  onClick?: (contact: Contact) => void; // Function to call when the card is clicked
  isLoading?: boolean; // Flag to indicate if the data is loading
}

// Define the ContactCard component
const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onClick,
  isLoading,
}) => {
  // Render a loading skeleton if the data is loading
  if (isLoading) {
    return (
      <div className="p-4 border rounded shadow animate-pulse">
        <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
      </div>
    );
  }

  // Render a message if no contact information is available
  if (!contact) {
    return (
      <div className="p-4 border rounded shadow">
        <p className="text-gray-500">No contact information available.</p>
      </div>
    );
  }

  // Render the contact card with the contact information
  return (
    <div
      className="p-4 border rounded shadow cursor-pointer"
      onClick={() => onClick && contact && onClick(contact)}
    >
      <img
        src={contact.avatarUrl}
        alt={contact.name}
        className="w-16 h-16 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{contact.name}</h2>
      <p>{contact.email}</p>
      <div className="flex items-center">
        <p className="mr-2 p-1 bg-gray-100 rounded shadow">
          {contact.department}
        </p>
        <span
          className={`w-3 h-3 rounded-full ${
            contact.isActive ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></span>
      </div>
    </div>
  );
};

export default ContactCard;
