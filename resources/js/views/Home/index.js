import React from "react";
import Header from "../../components/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <h1>Home</h1>
            {console.log(window.apiUrl)}
        </div>
    );
};

export default Home;
