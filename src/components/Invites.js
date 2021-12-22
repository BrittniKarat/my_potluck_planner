import React, { useState } from "react";

const Invites = () => {
    const initialValues = {
        first: '',
        last: '',
        email: ''
    }
    const [values, setValues] = useState(initialValues)
    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h3>Send Invitations</h3>
            <form onSubmit={handleSubmit}>
                <h4>Select Friends to Invite</h4>
                <label>Test User&nbsp;
                    <input type='checkbox' />
                </label>
                <button>Submit</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h4>Invite Other Friends</h4>
                <p>This form will send an invite by email, use this to invite friends who are not signed up.</p>
                <label>First Name:&nbsp;
                    <input type='text' name='first' value={values.first} onChange={handleChange} />
                </label>
                <label>Last Name:&nbsp;
                    <input type='text' name='last' value={values.last} onChange={handleChange} />
                </label>
                <label>Email:&nbsp;
                    <input text='text' name='email' values={values.email} onChange={handleChange} />&nbsp;
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Invites;