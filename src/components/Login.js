import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const FormDiv = styled.div`
    font-size: 1.5rem;
`

const initialUser = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [user, setUser] = useState(initialUser);
    const { setLoggedOut } = props;

    let navigate = useNavigate();

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('name', 'User');
        localStorage.setItem('Username', user.username);
        localStorage.setItem('password', user.password);
        setLoggedOut(false);
        navigate('/', { replace: true });
    }

    return (
        <FormDiv>
            <form onSubmit={handleSubmit}>
                <h1> Login </h1>
                <label> Username </label>
                <input
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                    value={user.username}
                    onChange={handleChange}
                />
                <br/>
                <label> Password </label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={user.password}
                    onChange={handleChange}
                />
                <input
                    type='submit'
                    name='submit'
                />
            </form>
            {console.log(user)}
            <p> Not a member? </p>
            <Link to='/signup'> Sign up here </Link>
        </FormDiv>
    )
}

export default Login;