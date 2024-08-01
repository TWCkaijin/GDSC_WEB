// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ clubName, userAvatar, onLogin, islogin }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Club Logo" />
      </div>
      <div className="club-name">{clubName}</div>
      <div className="user-info">
        {islogin }
        <Link to="/login">
          <button onClick={onLogin} className="login-button">Login</button>
        </Link>
        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
