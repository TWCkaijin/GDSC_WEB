// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ clubName, userAvatar, onLogin, islogin }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/GDSC.png" alt="Club Logo" />
      </div>
      <div className="club-name">
        <h1>Google Developer Student Club</h1>
        <h2>NSYSU</h2>
      </div>
      <div className="user-info">
        {(islogin) ? 
          null :
          (
            <Link to="/login">
              <button onClick={onLogin} className="login-button">Login</button>
            </Link>
          )
        }

        <img src={userAvatar} alt="User Avatar" className="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
