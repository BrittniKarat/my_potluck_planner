import React, { useState } from "react";

const Potluck = () => {
    const initialFormValues = {
        name: '',
        date: '',
        time: '',
        location: '',
        items: '',
    }
    const [values, setValues] = useState(initialFormValues)
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
            <h3>Potlucks</h3>
            <p>Potlucks you've created and are invited to are below, along with their info.</p>
            <div>
                <span>Filler Potluck</span>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Add a Potluck</h3>
                <label>Name:&nbsp;
                    <input type='text' name='name' value={values.name} onChange={handleChange} />
                </label>
                <label>Date:&nbsp;
                    <input type='date' name='date' value={values.date} onChange={handleChange} />
                </label>
                <label>Time:&nbsp;
                    <input type='time' name='time' value={values.time} onChange={handleChange} />
                </label>
                <label>Location:&nbsp;
                    <input type='text' name='location' value={values.location} onChange={handleChange} />
                </label>
                <label>Items:&nbsp;
                    <input type='text' name='text' value={values.items} onChange={handleChange} />&nbsp;&#40;separate items with commas&#41;&nbsp;
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Potluck;