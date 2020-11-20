import React from "react";
import Header from "../../components/Header";

const Home = () => {

    const onSearch = (inputText, category) => {
      console.log(inputText, category);
    };

    return (
        <div>
            <Header onSearch={(inputText, category) => onSearch(inputText, category)} />
            <h1>Home</h1>
        </div>
    );
};

export default Home;
