import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
    const { setLoggedOut }= props;

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('name');
        localStorage.removeItem('last');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('email');
        setLoggedOut(true);
        navigate('/', { replace: true });
    }, [])

    return (
        <div></div>
    )
}

export default Logout;