// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { auth } from "../../config/firebase"
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const location = useLocation(); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  function handlenavigatebutton() {

    if (location.pathname === "/Home") {
      const logout = async () => {
        await auth.signOut();
      }
      return (
        <Link to="/">
          <button className="header-button" onClick={logout}>Log out</button>
        </Link>
      )
    } else if (location.pathname === '/' && !auth?.currentUser) {
      return (
        <Link to="/login">
          <button className="header-button">Login</button>
        </Link>
      )
    }else{
      return (
        <Link to="/Home">
          <button className="header-button">Home</button>
        </Link>
      )
    }
  }


  return (
    <header className="header">
      <Link to="/Home">
      <div className='logo-container' style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo">
          <img src="/images/GDSC.png" alt="Club Logo" />    
        </div>
        {isMobile ? (
          <>
            <div className="club-name">
              <h1>GDSC</h1>
              <h2>NSYSU</h2>
            </div>
          </>
        ):(
          <>
            <div className="club-name">
              <h1>Google Developer Student Club</h1>
              <h2>NSYSU</h2>
            </div>
          </>
        )}
      </div>
      </Link>
      <div className="user-info">
        { handlenavigatebutton()}
        <img src={auth?.currentUser ? auth?.currentUser.photoURL : 'https://via.placeholder.com/40'} alt="User Avatar" className="user-avatar" />
      </div>
    </header>
  );
};

export default Header;
