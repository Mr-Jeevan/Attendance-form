import { BrowserRouter, Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import FacialAttendanceLanding from './pages/LandingPage/FacialAttendanceLanding.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import McaOne from './pages/McaOne.jsx';


function App() {

  return (
    <>
    <FacialAttendanceLanding/>
    <RegisterPage/>
    <LoginPage/>
     <McaOne />
    </>
  )
}

export default App
