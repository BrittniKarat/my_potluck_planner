import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    text-align: center;
    background-image: url('https://lh5.googleusercontent.com/H8Dwnvxp0vBF7uYZUBtK58n7_srVGytwpq62W7Z18FymTdu-3L60CtutlYjjWqwXJJTolojt2yV47GWK_e59OuJCY-GRf9DXaVkdXYsi1yM8UEpUdIOnL5PC09ScjTnoWTFQBg7s-1QPpg');
    background-repeat: no-repeat;
    background-size: cover;

    h1{
        margin: 0;
        padding: 4% 0;
        text-shadow: 2px 2px 5px #ffffff;
    }
`
const Header = (props) => {
    const { loggedOut } = props;

    return (
        <StyledHeader>
            <h1>Potluck planner</h1>
            <nav>
            <Link to='/'> Home </Link>
            <Link to='/mypotlucks'> My Potlucks </Link>
            <Link to='/invites'> Invites </Link>
         { loggedOut && <Link to='/login'> Login </Link>}
         { !loggedOut && <Link to='/logout'> Logout </Link>}
            </nav>
        </StyledHeader>
    )
}

export default Header;