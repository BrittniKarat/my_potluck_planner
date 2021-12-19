import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form>
                <h1> Login </h1>
                <label> Username </label>
                <input
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                />
                <br/>
                <label> Password </label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                />
                <input
                    type='submit'
                    name='submit'
                />
            </form>
            <p> Not a member? </p><Link to='/signup'>Sign up here </Link>
        </div>
    )
}

export default Login;