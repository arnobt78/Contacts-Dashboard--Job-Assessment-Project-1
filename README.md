# Contacts Dashboard - Job Assessment Project 1

<img width="880" alt="Screenshot 2025-02-13 at 15 04 55" src="https://github.com/user-attachments/assets/dbb9facf-a785-467c-b655-74f0383a02f7" /><img width="880" alt="Screenshot 2025-02-13 at 15 05 32" src="https://github.com/user-attachments/assets/75520e62-7d10-47c9-a722-c2130d860870" />

---

## Project Summary

Contacts Dashboard is a fully responsive dashboard web application built with React, TypeScript, and Vite. The project showcases a modern approach to managing and viewing a list of business contacts, equipped with advanced filtering, pagination, and a rich UI/UX experience using Tailwind CSS. It leverages TanStack Query (React Query) for efficient data fetching and state management, demonstrating best practices in frontend development.

- **Live-Demo:** https://contacts-dashboard-arnob.vercel.app/
  
---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Live Demo](#live-demo)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [API Mock Endpoints](#api-mock-endpoints)
8. [Components & Functionality Walkthrough](#components--functionality-walkthrough)
9. [How it Works](#how-it-works)
10. [Keywords & Concepts](#keywords--concepts)
11. [Example Usage & Code Snippets](#example-usage--code-snippets)
12. [Conclusion](#conclusion)
13. [Acknowledgements](#acknowledgements)

---

## Features

- **Responsive Grid:** Contact cards display elegantly across all device sizes.
- **Search & Filters:** Filter contacts by name, email, department, and status.
- **Pagination:** Navigate between pages of contacts.
- **Detail Modal:** View in-depth contact information in a modal pop-up.
- **Loading & Error States:** User-friendly feedback for data fetching.
- **Modern Codebase:** Uses TypeScript, React, Vite, TanStack Query, and Tailwind CSS.
- **Clean Code & Linting:** ESLint and Prettier for consistent, high-quality code.

---

## Tech Stack

- **React + TypeScript:** Component-based UI and strong type safety.
- **Vite:** Lightning-fast development tooling and builds.
- **TanStack Query (React Query):** Data fetching, caching, and synchronization.
- **Tailwind CSS:** Utility-first, responsive, and customizable CSS.
- **ESLint + Prettier:** For code linting and automatic formatting.

---

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

**Key folders:**
- `modules/api/`: API utilities for fetching contacts.
- `modules/contacts/components/`: UI components like cards and modals.
- `modules/contacts/hooks/`: Custom React hooks for business logic.
- `modules/contacts/pages/`: Page-level components (main screens).
- `modules/contacts/types/`: TypeScript type definitions.

---

## Getting Started

Follow these instructions to run the project locally:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/arnobt78/Contacts-Dashboard--Job-Assessment-Project-1.git
    cd Contacts-Dashboard--Job-Assessment-Project-1
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

---

## API Mock Endpoints

This project uses mock endpoints (simulated with robohash or similar) for demonstration and learning purposes.

### 1. Get Contacts
Fetches a paginated list of contacts with optional filters (name, email, department, active status).

### 2. Get Contacts Count
Retrieves the total count of contacts, useful for pagination and filters.

---

## Components & Functionality Walkthrough

### Main Components

- **ContactCard.tsx**  
  Renders individual contact information (name, avatar, department, etc.) in a grid layout.
- **ContactDetailsModal.tsx**  
  Shows all available details about a selected contact in a popup modal.
- **ContactsPage.tsx**  
  The main page, orchestrates fetching, filtering, pagination, and rendering of contacts.

### Custom Hooks

- **useContacts.ts**  
  Encapsulates data fetching logic for contacts using React Query, including support for filters and pagination.

### Types

- **index.ts**  
  TypeScript definitions for contacts, filters, API results, and more.

---

## How it Works

1. **Fetching Data:**  
   On page load, the app fetches a paginated list of contacts using `useContacts` (powered by TanStack Query).
2. **Filtering:**  
   Users can type in search fields or use dropdowns to filter contacts by various criteria. The query updates and new results are fetched immediately.
3. **Pagination:**  
   The UI displays navigation buttons to move between pages. The total contact count (from the API) drives page numbers.
4. **Viewing Details:**  
   Clicking a contact card opens a modal with detailed information about the selected contact.
5. **Responsive Design:**  
   All layouts use Tailwind CSS for mobile-first, responsive rendering.

---

## Keywords & Concepts

- **React Query**
- **Pagination**
- **Filtering/Search**
- **React Components**
- **TypeScript Types**
- **Tailwind CSS**
- **Responsive Design**
- **Custom Hooks**
- **API Mocking**
- **Modals**
- **State Management**

---

## Example Usage & Code Snippets

### Example: Fetching Contacts with Filters

```typescript
// src/modules/contacts/hooks/useContacts.ts
import { useQuery } from '@tanstack/react-query';

function useContacts(filters, page) {
  return useQuery(['contacts', filters, page], () =>
    fetchContactsFromAPI(filters, page)
  );
}
```

### Example: Contact Card Component

```tsx
// src/modules/contacts/components/ContactCard.tsx
export function ContactCard({ contact, onClick }) {
  return (
    <div className="p-4 bg-white rounded shadow" onClick={() => onClick(contact)}>
      <img src={contact.avatar} alt={contact.name} className="w-16 h-16 rounded-full" />
      <h3>{contact.name}</h3>
      <p>{contact.department}</p>
    </div>
  );
}
```

### Example: Running Locally

```sh
npm install
npm run dev
# Visit http://localhost:3000
```

---

## Conclusion

Contacts Dashboard is a modern, educational project for learning and demonstrating best practices in frontend development with React, TypeScript, and modern tooling. It is perfect for job assessment, learning, and sharing with others. The project’s clean structure, strong typing, and use of industry-standard libraries make it easy to extend and adapt for real-world use cases. Use this repository to sharpen your skills in building responsive, data-driven web applications!

---

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---
