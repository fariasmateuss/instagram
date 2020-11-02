import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import direct from '../../assets/send.svg';
import profile from '../../assets/profile.svg';
import explore from '../../assets/explore.svg';

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <img 
            src={logo} 
            alt="Instagram logo"
            title="Instagram"
          />
        </Link>

        <div className="header-content-input">
          <input type="text" placeholder="Search" />
        </div>

        <div className="header-content-icon">
          <img 
            src={direct} 
            alt="Direct" 
            title="Direct"
          />
        
          <img 
            src={explore} 
            alt="Explore" 
            title="Explore"
          />
          
          <img 
            src={like} 
            alt="Likes" 
            title="Like"
          />
          
          <Link to="/new">
            <img 
              src={profile} 
              alt="Profile"
              title="Profile"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
