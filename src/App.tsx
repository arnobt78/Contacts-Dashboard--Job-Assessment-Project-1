import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './modules/contacts/pages/ContactsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
