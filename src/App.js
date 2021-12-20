import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Potluck from './components/Potluck';
import Invites from './components/Invites';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';


function App() {
  const [loggedOut, setLoggedOut] = useState(true);

  return (
    <div>
      <Header loggedOut={loggedOut}/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/mypotlucks' element={<Potluck/>} />
        <Route exact path='/invites' element={<Invites/>} />
        <Route exact path='/login' element={<Login setLoggedOut={setLoggedOut}/>} />
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/logout' element={<Logout setLoggedOut={setLoggedOut}/>}/>
      </Routes>
    </div>
  );
}

export default App;
