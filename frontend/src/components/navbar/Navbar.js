import './Navbar.css'
import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <Link to="/"><img className="nav-logo" src="/rebecka_logo.png" alt="rebecka slatter logo"></img></Link>
        <div className="space-between1"></div>
        <Link className="navigation-link" to="/about">About</Link>
        <Link className="navigation-link" to="/work">Work</Link>
        <Link className="navigation-link" to="/contacts">Contact</Link>
      </nav>
    </>
  )
}

export default Navbar;