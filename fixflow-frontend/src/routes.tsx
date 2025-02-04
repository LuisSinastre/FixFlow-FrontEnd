// src/routes.tsx
import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';


function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />            
            <Route path="*" element={<Navigate to="/login" />} />
            
        </Routes>
    );
}

export default RoutesApp;
