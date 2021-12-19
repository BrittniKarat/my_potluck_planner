import React from "react";

const Home = () => {
    const loggedIn = localStorage.getItem('name');
    return (
        <div>
            { loggedIn && <h1> Hi, {localStorage.getItem('name')} </h1>}
            <p> This is our home page</p>
        </div>
    )
}

export default Home;