/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../Pages/Home';
import Services from '../Pages/Services'; 
import About from '../Pages/About'; 
import ConnectForm from '../Pages/ConnectForm';
import Login from '../Pages/Login';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/connect' element={<ConnectForm/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default Router;
