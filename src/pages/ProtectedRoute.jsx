import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userEmail = localStorage.getItem('userEmail');
  const allowedEmail = 'nursajid@gmail.com';

  if (userEmail !== allowedEmail) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
