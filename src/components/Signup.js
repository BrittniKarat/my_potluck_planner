import React from "react";
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <form>
                <h1> Sign Up </h1>
             <label> First Name </label>
                <input
                    type='text'
                    name='firstName'
                />
                <br/>
                <label> Last Name </label>
                <input
                    type='text'
                    name='lastName'
                />
                <br/>
                <label> Email </label>
                <input
                    type='email'
                    name='email'
                />
                <br/>
             <label> Re-enter your email </label>
                <input
                    type='email'
                    name='email'
                />
                <br/>
             <label> Password </label>
                <input
                    type='password'
                    name='password'
                />
                <br/>
             <label> Re-enter your password </label>
                <input
                    type='password'
                    name='password'
                />
                <br/>
                <input
                    type='submit'
                    name='submit'
                />
            </form>
            <p> Already a member? </p><Link to='/login'> Login here </Link>
        </div>
    )
}

export default Signup;