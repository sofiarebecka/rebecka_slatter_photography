import style from './DarkNavbar.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DarkNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`${style["nav-container"]} ${showMenu ? style['show-menu'] : ''}`}>
        <Link to="/">
          <img className={style["nav-logo"]} src="/rebecka_logo_inverted.png" alt="rebecka slatter logo" />
        </Link>
        <h1>HEADSHOTS</h1>
          <div className={`${style['mobile-menu']} ${showMenu? style['show-menu'] : ""}`} >
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
      <a className={style["navigation-link"]} href="https://www.instagram.com/rebeckaslatter/?hl=en">
        <img style={{width: 30}} src="instagram_icon_inverted.png" alt="instagram logo white" />
      </a>
      <a className="navigation-link" href="https://www.linkedin.com/in/rebecka-slatter-b28103136/">
        <img style={{width: 31.5}} src="linkedin_icon_inverted.png" alt="linkedin logo white" />
      </a>
    </div>
  )
}

export default DarkNavbar;
