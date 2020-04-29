import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import like from '../assets/like.svg';
import send from '../assets/send.svg';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="IntaRocket" />            
        </Link>
        <div className="header-content-icon">
          <Link to="/new">
            <img src={camera} alt="Enviar publicação" />
          </Link>
          <Link>
            <img src={like} alt="Enviar publicação" />
          </Link>
          <Link>
            <img src={send} alt="Enviar publicação" />
          </Link>
        </div>
      </div>
    </header>
  );
}