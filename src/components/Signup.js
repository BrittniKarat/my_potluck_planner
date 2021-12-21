import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import * as yup from 'yup';
import schema from "../Validation/formSchema";

const initialErrors = {
    first: '',
    last: '',
    username: '',
    email:'',
    password:''
}

const Signup = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [newUser, setNewUser] = useState({
        first: '',
        last: '',
        username: '',
        email:'',
        password:''
    })
    const [formErrors, setFormErrors] = useState(initialErrors)
    const { setLoggedOut } = props;

    let navigate = useNavigate();

    const validate = (name, value) => {
        yup.reach(schema, name)
          .validate(value)
          .then(() =>  setFormErrors({...formErrors, [name]: ''}))
          .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
      };

    const handleChange = async (e) => {
        validate([e.target.name], e.target.value);
        setNewUser({
            ...newUser,
            [e.target.name] : e.target.value
        })
        const isValid = await schema.isValid(newUser)
        setDisabled(!isValid)
    }

    const handleSubmit = e => {
        e.preventDefault();

        localStorage.setItem('name', newUser.first);
        localStorage.setItem('last', newUser.last);
        localStorage.setItem('username', newUser.username);
        localStorage.setItem('password', newUser.password);        localStorage.setItem('email', newUser.email);
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
                    name='first'
                    value={newUser.first}
                    onChange={handleChange}
                />
                <h3>  {formErrors.first}</h3>
                <label> Last Name </label>
                <input
                    type='text'
                    name='last'
                    value={newUser.last}
                    onChange={handleChange}
                />
                <h3>  {formErrors.last}</h3>
                <label> Username </label>
                <input
                    type='username'
                    name='username'
                    value={newUser.username}
                    onChange={handleChange}
                />
                <h3>  {formErrors.username}</h3>
                <label> Email </label>
                <input
                    type='email'
                    name='email'
                    value={newUser.email}
                    onChange={handleChange}
                />
                <h3>  {formErrors.email}</h3>
             <label> Password </label>
                <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleChange}
                />
                <h3>  {formErrors.password}</h3>
                <input
                    type='submit'
                    name='submit'
                    disabled={disabled}
                />
            </form>
            <p> Already a member? </p><Link to='/login'> Login here </Link>
        </div>
    )
}

export default Signup;