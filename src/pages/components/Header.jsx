// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase"
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const location = useLocation(); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();

  function handlenavigatebutton() {
    
    if (location.pathname === "/Home") {
      const logout = async () => {
        await auth.signOut();
        localStorage.removeItem("userAuthData");
        navigate("/");
      }
      return (
          <button className="header-button" onClick={logout}><span>Log out</span></button>
      )
    } else if (location.pathname === '/' && !auth?.currentUser) {
      return (
          <button className="header-button"><span>Login</span></button>
      )
    }else{
      return (
          <button className="header-button"><span>Home</span></button>
      )
    }
  }

  const onTitleClick = () => {
    if (location.pathname === "/Home") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    } else {
      navigate("/Home");
    }
  }


  return (
    <header className="header">
      <div className='logo-container' style={{ display: 'flex', alignItems: 'center' }} onClick={onTitleClick}>
        <div className="logo">
          <img src="/images/GDSC.png" alt="Club Logo" />    
        </div>
        {isMobile ? (
          <>
            <div className="club-name" >
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
      <div className="user-info">
        { handlenavigatebutton()}
      </div>
    </header>
  );
};

export default Header;
