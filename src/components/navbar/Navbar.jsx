import React from "react";
import DarkNavbar from "./dark-navbar/DarkNavbar.jsx";
import LightNavbar from "./light-navbar/LightNavbar.jsx";

const Navbar = ({theme}) => {
  if (theme === 'dark') {
    return <DarkNavbar />
  } else {
    return <LightNavbar />
  }
}

export default Navbar;