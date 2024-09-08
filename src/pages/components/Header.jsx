// src/components/Header.js
import React from 'react';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../config/firebase"
import { useMediaQuery } from 'react-responsive';
import {useAuth} from "../../utils/authContext";

const Header = () => {
  const location = useLocation(); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();
  const {userData,login,logout} = useAuth();

  function handlenavigatebutton() {
    
    if (location.pathname === "/Home") {
      return (
          /* From Uiverse.io by kennyotsu-monochromia */ 
        <button className="Btn" onClick={logout}>
          <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
          <div className="text">Logout</div>
        </button>
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
              <h1>GDSC<br/>NSYSU</h1>
            </div>
          </>
        ):(
          <>
            <div className="club-name">
              <h1>Google Developer Student Club<br/>NSYSU</h1>
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
