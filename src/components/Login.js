import React from "react";

const Login = () => {
    return (
        <div>
            <form>
                <label> Username </label>
                <input
                    type='text'
                    name='username'
                    placeholder='Enter your username'
                />
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
        </div>
    )
}

export default Login;