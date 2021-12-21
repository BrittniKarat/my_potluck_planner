import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import styled from "styled-components";
import './App.css';

import Header from './components/constants/Header';
import Footer from './components/constants/Footer';
import Home from './components/Home';
import Potluck from './components/Potluck';
import Invites from './components/Invites';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

const StyledDiv = styled.div`
  font-family: 'Caveat', cursive;

  h1{
    font-size: 4rem;
  }

  h2 {
    margin-top: 1.5em;
  }

  Footer, Header nav{
    padding: 0 3%;
    background-color: #FFCC96;
    font-size: 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  a:hover{
    text-decoration: underline;
  }

  Footer a, Header nav a{
    text-shadow: 2px 2px 5px #000000;
    color: #FFFFFF;
  }

  Footer a:hover, Header nav a:hover{
    text-decoration: none;
  }

`


function App() {
  const [loggedOut, setLoggedOut] = useState(true);

  return (
    <StyledDiv>
      <Header loggedOut={loggedOut}/>
      <Routes>
        <Route exact path='/' element={<Home loggedOut={loggedOut}/>} />
        <Route exact path='/mypotlucks' element={<Potluck/>} />
        <Route exact path='/invites' element={<Invites/>} />
        <Route exact path='/login' element={<Login setLoggedOut={setLoggedOut}/>} />
        <Route exact path='/signup' element={<Signup setLoggedOut={setLoggedOut}/>}/>
        <Route exact path='/logout' element={<Logout setLoggedOut={setLoggedOut}/>}/>
      </Routes>
      <Footer />
    </StyledDiv>
  );
}

export default App;
