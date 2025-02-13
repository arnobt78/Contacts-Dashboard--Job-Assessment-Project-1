## Contacts Dashboard - Job Assessment Project 1

<img width="880" alt="Screenshot 2025-02-13 at 15 04 55" src="https://github.com/user-attachments/assets/dbb9facf-a785-467c-b655-74f0383a02f7" /><img width="879" alt="Screenshot 2025-02-13 at 15 05 32" src="https://github.com/user-attachments/assets/75520e62-7d10-47c9-a722-c2130d860870" />

This project is a contacts dashboard built using React, TypeScript, and TanStack Query. It displays a paginated list of business contacts with basic filtering capabilities. The application is styled using Tailwind CSS and follows best practices for code formatting with ESLint and Prettier.

**Online Live:** https://contacts-dashboard-arnob.vercel.app/

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Tech Stack

- **React + TypeScript:** For building the user interface and ensuring type safety.
- **Vite:** For fast build tooling and development server.
- **TanStack Query (React Query):** For efficient data fetching and state management.
- **Tailwind CSS:** For utility-first CSS styling.
- **ESLint + Prettier:** For code linting and formatting.

## Project Structure

```
contacts-dashboard
├── src
│   ├── modules
│   │   ├── api
│   │   │   └── getContacts.ts
│   │   ├── contacts
│   │   │   ├── components
│   │   │   │   ├── ContactCard.tsx
│   │   │   │   └── ContactDetailsModal.tsx
│   │   │   ├── hooks
│   │   │   │   └── useContacts.ts
│   │   │   ├── pages
│   │   │   │   └── ContactsPage.tsx
│   │   │   └── types
│   │   │       └── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── index.html
├── .eslintrc.js
├── .prettierrc
├── postcss.config.js
├── tailwind.config.js
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Provided APIs

The project includes two mock API (using robohash)endpoints for fetching contacts and their count.

### 1. Get Contacts

Fetches a paginated list of contacts based on optional filters.

### 2. Get Contacts Count

Retrieves the total count of contacts based on optional filters.

## Features

- **Responsive Grid:** Displays a grid of contact cards that adjust to different screen sizes.
- **Filters:** Allows users to search and filter contacts by name, email, department, and active status.
- **Pagination:** Provides controls to navigate through pages of contacts.
- **Loading and Error States:** Handles loading animations and displays error messages when necessary.
- **Contact Details Modal:** Shows detailed information about a contact in a modal.

## Requirements

- Create a responsive grid of contact cards.
- Implement filters for searching and filtering contacts.
- Add pagination controls.
- Handle loading and error states.
- Create a modal for displaying contact details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
