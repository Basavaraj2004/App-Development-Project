// src/LogoutPage.js
import React from 'react';

const LogoutPage = () => {
  return (
    <div className="logout-wrapper">
      <h1>Logged Out</h1>
      <p>You have been logged out. Please <a href="/login">log in</a> again to continue.</p>
    </div>
  );
};

export default LogoutPage;
