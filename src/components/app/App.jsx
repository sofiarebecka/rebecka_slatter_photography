import React, { useEffect, useState } from 'react';
import Homepage from '../homepage/Homepage.jsx'
import AboutPage from '../about/AboutPage.jsx';
import WorkPage from '../work/WorkPage.jsx';
import LightNavbar from '../light-navbar/LightNavbar.jsx';
import DarkNavbar from '../dark-navbar/DarkNavbar.jsx';
import Contacts from '../contacts/Contacts.jsx';
import Headshots from '../headshots/Headshots.jsx';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (document.URL.includes("headshots") || document.URL === 'https://rebeckaslatter.com/headshots') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [document.URL])

  return (
    <>
      {theme === "light"? <LightNavbar /> : <DarkNavbar/>}
      <Routes>
        <Route path='/' element={<Homepage navigate={useNavigate() }/>}/>
        <Route path='/about' element={<AboutPage navigate={useNavigate() }/>}/>
        <Route path='/work' element={<WorkPage navigate={useNavigate() }/>}/>
        <Route path='/contact' element={<Contacts navigate={useNavigate() }/>}/>
        <Route path='/headshots' element={<Headshots navigate={useNavigate() }/>}/>
      </Routes>
    </>
  );
}

export default App;
