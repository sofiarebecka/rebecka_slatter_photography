import './Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`nav-container ${showMenu ? 'show-menu' : ''}`}>
        <Link to="/">
          <img className="nav-logo" src="/rebecka_logo_transparent.png" alt="rebecka slatter logo" />
        </Link>
          <div className={`mobile-menu ${showMenu ? 'show-menu' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <NavigationLinks showMenu={showMenu}/>
          </div>
      </nav>
      <div className={`width-section ${showMenu ? 'show-menu' : ''}`}></div>
    </>
  );
}

const NavigationLinks = ({showMenu}) => {
  return (
    <div className={`navigation-links ${showMenu ? 'show-menu' : ''}`}>
      <Link className="navigation-link" to="/work">
        Work
      </Link>
      <Link className="navigation-link" to="/about">
        About
      </Link>
      <Link className="navigation-link" to="/contact">
        Contact
      </Link>
    </div>
  )
}

export default Navbar;

