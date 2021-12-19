import React from 'react';
import { Link, Route, Routes, Outlet} from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './App.css';

import Home from './components/Home';
import Potluck from './components/Potluck';
import Login from './components/Login';
import Invites from './components/Invites'

function App() {

  return (
    <div>
      <h1>Potluck planner</h1>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/mypotlucks'> My Potlucks </Link>
        <Link to='/invites'> Invites </Link>
        <Link to='/login'> Login </Link>
        <Outlet/>
      </nav>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/mypotlucks' element={<Potluck/>} />
      <Route exact path='/invites' element={<Invites/>} />
    </Routes>
    </div>
  );
}

export default App;
