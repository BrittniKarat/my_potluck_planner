import React from "react";
import styled from "styled-components";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./loggedIn/LoggedIn";

const StyledLogout = styled.div`
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
    const {loggedOut} = props;

    return (
        <StyledLogout>
            {!loggedOut && <LoggedIn />}
            { loggedOut && <LoggedOut />}
        </StyledLogout>
    )
}

export default Home;