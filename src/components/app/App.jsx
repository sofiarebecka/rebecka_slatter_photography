import React, { useEffect, useState } from 'react';
import Homepage from '../homepage/Homepage.jsx'
import AboutPage from '../about/AboutPage.jsx';
import WorkPage from '../work/WorkPage.jsx';
import Navbar from '../navbar/Navbar.jsx';
import Contacts from '../contacts/Contacts.jsx';
import Headshots from '../headshots/Headshots.jsx';
import Pricing from '../pricing/Pricing.jsx';
import Info from '../info/Info.jsx';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {

  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (location.pathname == "/headshots" || location.pathname == "/pricing" || location.pathname == "/info") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [location.pathname])

  return (
    <>
      <Navbar theme={theme} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Routes>
        <Route path='/' element={<Homepage navigate={useNavigate() }/>}/>
        <Route path='/about' element={<AboutPage navigate={useNavigate() }/>}/>
        <Route path='/work' element={<WorkPage navigate={useNavigate() }/>}/>
        <Route path='/contact' element={<Contacts navigate={useNavigate() }/>}/>
        <Route path='/headshots' element={<Headshots navigate={useNavigate() } showMenu={showMenu}/>}/>
        <Route path='/pricing' element={<Pricing navigate={useNavigate() } showMenu={showMenu}/>}/>
        <Route path='/info' element={<Info navigate={useNavigate() } showMenu={showMenu}/>}/>
      </Routes>
    </>
  );
}

export default App;
