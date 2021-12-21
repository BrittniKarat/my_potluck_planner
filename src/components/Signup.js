import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Signup = (props) => {
    const [newUser, setNewUser] = useState({
        first: '',
        last: '',
        username: '',
        email:'',
        password:''
    })
    const { setLoggedOut } = props;

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('name', newUser.first);
        localStorage.setItem('Username', newUser.username);
        localStorage.setItem('password', newUser.password);
        setLoggedOut(false);
        navigate('/', { replace: true });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Sign Up </h1>
             <label> First Name </label>
                <input
                    type='text'
                    name='firstName'
                    value={newUser.first}
                    onChange={handleChange}
                />
                <br/>
                <label> Last Name </label>
                <input
                    type='text'
                    name='lastName'
                    value={newUser.last}
                    onChange={handleChange}
                />
                <br/>
                <label> Username </label>
                <input
                    type='username'
                    name='username'
                    value={newUser.username}
                    onChange={handleChange}
                />
                <br/>
                <label> Email </label>
                <input
                    type='email'
                    name='email'
                    value={newUser.email}
                    onChange={handleChange}
                />
                <br/>
             <label> Re-enter your email </label>
                <input
                    type='email'
                    name='confirmEmail'
                />
                <br/>
             <label> Password </label>
                <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleChange}
                />
                <br/>
             <label> Re-enter your password </label>
                <input
                    type='password'
                    name='confirmPassword'
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