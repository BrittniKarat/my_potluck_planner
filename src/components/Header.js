import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <h1>Potluck planner</h1>
            <nav>
            <Link to='/'> Home </Link>
            <Link to='/mypotlucks'> My Potlucks </Link>
            <Link to='/invites'> Invites </Link>
            <Link to='/login'> Login </Link>
            </nav>
        </div>
    )
}

export default Header;