import style from './Footer.module.css';
import React, { useEffect } from 'react';

const Footer = ({ theme }) => {

  const position = theme === 'light' ? 
  `${style['pos-relative']} ${style['light']}` :
  `${style['pos-absolute']} ${style['dark']}`;

  console.log(window.location.pathname);

  const animation = window.location.pathname === '/about' ? ` ${style['animate']}` : '';

  return (
    <footer className={position + animation}>
      <i className="fa-brands fa-instagram fa-2xl"></i>
      <i className="fa-brands fa-linkedin-in fa-2xl"></i>
      <i className="fa-regular fa-envelope fa-2xl"></i>
    </footer>
  )
}

export default Footer;