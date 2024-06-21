import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email.includes('student')) {
        // Ako je korisnik student, zabrani pristup
        return <Navigate to="/" />;
    }

    // Ako korisnik nije student, dozvoli pristup
    return children;
}

export default ProtectedRoute;
