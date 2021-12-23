import React from 'react';
import {Link} from "react-router-dom";

const LoggedOut = (props) => {
    return(
        <>
            <h2>The Shared Lunchbox</h2>
            <p>Collaborate with your friends and family to make your next potluck a well-organized affair. Take the luck out of potluck by making sure that everyone is a part of the planning process.</p>
            <Link to={`/login`}><strong>Login/Sign Up</strong></Link>
        </>
    )
}

export default LoggedOut;