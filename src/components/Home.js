import React from "react";

const Home = () => {
    return (
        <div>
            <h1> Hi, {localStorage.getItem('name')} </h1>
            <p> This is our home page</p>
        </div>
    )
}

export default Home;