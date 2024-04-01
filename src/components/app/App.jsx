import React, { useEffect, useState } from 'react';
import Homepage from '../homepage/Homepage.jsx'
import AboutPage from '../about/AboutPage.jsx';
import WorkPage from '../work/WorkPage.jsx';
import Navbar from '../navbar/Navbar.jsx';
import Contacts from '../contacts/Contacts.jsx';
import Headshots from '../headshots/Headshots.jsx';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (location.pathname == "/headshots") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [location.pathname])

  useEffect(() => {
    console.log("theme changing to ", theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} />
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
