import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Potluck from './components/Potluck';
import Login from './components/Login';
import Signup from './components/Signup';
import Invites from './components/Invites'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/mypotlucks' element={<Potluck/>} />
        <Route exact path='/invites' element={<Invites/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
