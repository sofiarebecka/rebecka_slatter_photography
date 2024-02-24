import React from 'react';
import Homepage from '../homepage/Homepage'
import AboutPage from '../about/AboutPage';
import WorkPage from '../work/WorkPage';
import Navbar from '../navbar/Navbar';
import Contacts from '../contacts/Contacts';
import Headshots from '../Headshots/Headshots';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
    return (
      <>
        <Navbar />
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
