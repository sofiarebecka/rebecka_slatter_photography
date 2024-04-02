import style from './LightNavbar.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LightNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`${style["nav-container"]} ${showMenu ? style['show-menu'] : ''}`}>
        <Link to="/">
          <img className={style["nav-logo"]} src="logos/rebecka_logo.png" alt="rebecka slatter logo" />
        </Link>
          <div className={`${style["mobile-menu"]} ${showMenu ? style['show-menu'] : ''}`}>
            <div className={style["menu-icon"]} onClick={toggleMenu}>
              <div className={style["bar"]}></div>
              <div className={style["bar"]}></div>
              <div className={style["bar"]}></div>
            </div>
            <NavigationLinks showMenu={showMenu}/>
          </div>
      </nav>
      <div className={`${style["width-section"]} ${showMenu ? style['show-menu'] : ''}`}></div>
    </>
  );
}

const NavigationLinks = ({showMenu}) => {
  return (
    <div className={`${style["navigation-links"]} ${showMenu ? style['show-menu'] : ''}`}>
      <Link className={style["navigation-link"]} to="/work">
        Work
      </Link>
      <Link className={style["navigation-link"]} to="/about">
        About
      </Link>
      <Link className={style["navigation-link"]} to="/contact">
        Contact
      </Link>
    </div>
  )
}

export default LightNavbar;

