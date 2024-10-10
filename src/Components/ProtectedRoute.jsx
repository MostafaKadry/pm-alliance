// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
const user = useSelector((state) => state.user.user); // Get user from Redux state
return user ? element : <Navigate to="/login" />; // Redirect based on user presence};
}
export default ProtectedRoute;
