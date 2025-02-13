import React from 'react';
import { Contact } from '../../api/getContacts';
import { FaPhone, FaEnvelope, FaUsers } from 'react-icons/fa';

// Define the props for the ContactDetailsModal component
interface ContactDetailsModalProps {
  contact?: Contact; // The contact information to display
  onClose: () => void; // Function to call when the modal is closed
  isLoading?: boolean; // Flag to indicate if the data is loading
  error?: string; // Error message to display if there is an error
}

// Define the ContactDetailsModal component
const ContactDetailsModal: React.FC<ContactDetailsModalProps> = ({
  contact,
  onClose,
  isLoading,
  error,
}) => {
  // Get the street name with number from the address
  const address = contact?.address.split(',')[0];

  // Render a loading skeleton if the data is loading
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative animate-pulse">
          <div className="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded-full"></div>
          <h2 className="text-2xl font-bold text-center mb-4 bg-gray-300 h-6 rounded"></h2>
          <div className="flex mb-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full mr-4"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // Render an error message if there is an error
  if (error) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mb-4">Error</h2>
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </div>
    );
  }

  // Render a message if no contact is selected
  if (!contact) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mb-4">
            No Contact Selected
          </h2>
          <p className="text-gray-500 text-center">
            Please select a contact to view details.
          </p>
        </div>
      </div>
    );
  }

  // Render the contact details
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-4">Contact Details</h2>
        <div className="flex mb-4">
          <img
            src={contact.avatarUrl}
            alt={contact.name}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <div className="flex items-center mb-2">
              <p className="mr-2 p-1 bg-gray-100 rounded shadow text-gray-600">
                {contact.department}
              </p>
              <span
                className={`w-3 h-3 rounded-full mr-2 ${
                  contact.isActive ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
              <span className="text-gray-600">
                {contact.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Phone:</span>
                <span>{contact.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Address:</span>
                <span>{address}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">City:</span>
                <span>{contact.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Country:</span>
                <span>{contact.country}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Active Since:</span>
                <span>
                  {contact.activeSinceDate
                    ? new Date(contact.activeSinceDate).toLocaleDateString()
                    : 'N/A'}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Statistics</h3>
            <div className="space-y-2 text-gray-600 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">Total Calls:</span>
                <span>{contact.statistics.totalCalls}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total Emails:</span>
                <span>{contact.statistics.totalEmails}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Total Meetings:</span>
                <span>{contact.statistics.totalMeetings}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Response Rate:</span>
                <span>{contact.statistics.responseRate}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <FaPhone className="text-green-500" />
              </div>
              <div>
                <span className="font-bold">Latest call with client</span>
                <p className="text-gray-600">
                  {contact.recentActivity[0]?.date
                    ? new Date(
                        contact.recentActivity[0].date,
                      ).toLocaleDateString()
                    : 'N/A'}
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <FaEnvelope className="text-blue-500" />
              </div>
              <div>
                <span className="font-bold">Email response to inquiry</span>
                <p className="text-gray-600">
                  {contact.recentActivity[1]?.date
                    ? new Date(
                        contact.recentActivity[1].date,
                      ).toLocaleDateString()
                    : 'N/A'}
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                <FaUsers className="text-purple-500" />
              </div>
              <div>
                <span className="font-bold">Team meeting discussion</span>
                <p className="text-gray-600">
                  {contact.recentActivity[2]?.date
                    ? new Date(
                        contact.recentActivity[2].date,
                      ).toLocaleDateString()
                    : 'N/A'}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsModal;
