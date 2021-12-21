import React from "react";
import { Link } from 'react-router-dom';


const Header = (props) => {
    const { loggedOut } = props;

    return (
        <header>
            <h1>Potluck planner</h1>
            <nav>
            <Link to='/'> Home </Link>
            <Link to='/mypotlucks'> My Potlucks </Link>
            <Link to='/invites'> Invites </Link>
         { loggedOut && <Link to='/login'> Login </Link>}
         { !loggedOut && <Link to='/logout'> Logout </Link>}
            </nav>
        </header>
    )
}

export default Header;