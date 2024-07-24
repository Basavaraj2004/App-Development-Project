import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import FeaturesPage from './FeaturesPage';
import ContactPage from './ContactPage';
import LogoutPage from './LogoutPage'; // Create this component if needed
import Navbar from './Navbar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <BackgroundVideo />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

const BackgroundVideo = () => {
  const location = useLocation();
  // Display the background video only on the home, login, and register pages
  if (['/', '/login', '/register'].includes(location.pathname)) {
    return (
      <video autoPlay muted loop className="background-video">
        <source src={`${process.env.PUBLIC_URL}/video1.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return null;
};

export default App;
