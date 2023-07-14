import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import React, { useState } from 'react';
import BookingFormEvents from '../bookings/BookingFormEvents'
import BookingFormFashion from '../bookings/BookingFormFashion'
import Homepage from '../homepage/Homepage'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/' element={<Homepage navigate={useNavigate() }/>}/>
          <Route path='/bookEvent' element={<BookingFormEvents navigate={useNavigate() }/>}/>
          <Route path='/bookFashion' element={<BookingFormFashion navigate={ useNavigate() }/>}/>
          <Route path='/login' element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
