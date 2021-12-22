import React from "react";
import { Link } from 'react-router-dom';
import './App.css';



const Header = (props) => {
    const { loggedOut } = props;

    return (
        <div>
            <h1>The Shared Lunchbox</h1>
            <h2> The latest in potluck organization </h2>
            <nav>
            {!loggedOut && <h3> Hi, {localStorage.getItem('name')} </h3>}
            <Link to='/'> Home </Link>
            <Link to='/mypotlucks'> My Potlucks </Link>
            <Link to='/invites'> Invites </Link>
            { loggedOut && <Link to='/login'> Login </Link>}
            { !loggedOut && <Link to='/logout'> Logout </Link>}
            </nav>
        </div>
    )
}

export default Header;