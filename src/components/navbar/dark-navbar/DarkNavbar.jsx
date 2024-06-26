import style from './DarkNavbar.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

const DarkNavbar = ({showMenu, setShowMenu}) => {

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`${style["nav-container"]} ${showMenu ? style['show-menu'] : ''}`}>
        <Link to="/headshots">
          <img className={style["nav-logo"]} src="logos/rebecka_logo_white.png" alt="rebecka slatter logo" />
        </Link>
        <h1 className={style["navbar-title"]}>HEADSHOTS</h1>
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
      <a className={style["navigation-link"]} href="/info">
        INFO
      </a>
      <a className={style["navigation-link"]} href="/headshots">
        HEADSHOTS
      </a>
      <a className={style["navigation-link"]} href="/pricing">
        PACKAGES
      </a>
      <a className={style["navigation-link"]} href="https://www.instagram.com/rebeckaslatter/?hl=en">
        <img style={{width: 29}} src="logos/instagram_icon_white.png" alt="instagram logo white" />
      </a>
      
      <a className={style["navigation-link"]} href={`mailto:${"rebecka@rebeckaslatter.com"}`}>
        <img style={{width: 37}} src="logos/email-icon-white-1.png" alt="email logo white" />
      </a>
      
      <a className={style["navigation-link"]} href="https://www.linkedin.com/in/rebecka-slatter-b28103136/">
        <img style={{width: 32}} src="logos/linkedin_icon_white.png" alt="linkedin logo white" />
      </a>
    </div>
  )
}

export default DarkNavbar;

