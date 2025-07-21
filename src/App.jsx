import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Service Subpages
import LegalAdvice from './pages/services/LegalAdvice';
import Documentation from './pages/services/Documentation';
import Upload from './pages/services/Upload';
import UpcommingProject from './pages/services/UpcommingProject';
import PhotoGallery from './pages/services/PhotoGallery';
import CV from './pages/services/CV';
import CVList from './pages/services/CVList';

// New Pages
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import Circular from './pages/services/Circular';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Service Dropdown Subpages */}
        <Route path="/services/photoGallery" element={<PhotoGallery />} />
        <Route path="/services/legal-advice" element={<LegalAdvice />} />
        <Route path="/services/documentation" element={<Documentation />} />
        <Route
          path="/services/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route path="/services/upcommingProject" element={<UpcommingProject />} />
        <Route path="/services/circular" element={<Circular />} />
        <Route path="/services/cv" element={<CV />} />
        <Route path="/services/cvList" element={<CVList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
