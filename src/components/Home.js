import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLogoutDiv = styled.div`
    text-align: center;
    
    h2{
        margin-top: 0;
        font-size: 3rem;
    }
    p{
        font-size: 2rem;
    }

    a{
        font-size: 2rem;
        color: black;
        text-decoration: underline;
    }

    padding: 3% 0;
`

const Home = (props) => {
    const loggedIn = localStorage.getItem('name');
    const {loggedOut} = props;

    return (
        <StyledLogoutDiv>
            {/* { loggedIn && <h1> Hi, {localStorage.getItem('name')} </h1>} */}
            { loggedOut && 
            <>
                <h2>The Shared Lunchbox</h2>
                <p>Collaborate with your friends and family to make your next potluck a well-organized affair. Take the luck out of potluck by making sure that everyone is a part of the planning process.</p>
                <Link to={`/login`}><strong>Login/Sign Up</strong></Link>
            </>}
        </StyledLogoutDiv>
    )
}

export default Home;