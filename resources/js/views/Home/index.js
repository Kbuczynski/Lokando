import React from "react";
import Header from "../../components/Header";
import Category from "./Category";
import HomeSlider from "./HomeSlider";
import NewCompanies from "./NewCompanies";

const Home = () => {

    const onSearch = (inputText, category) => {
      console.log(inputText, category);
    };

    return (
        <div>
            <Header onSearch={(inputText, category) => onSearch(inputText, category)} />
            <div className="container">
                <HomeSlider />
                <Category />
            </div>
            <NewCompanies />
        </div>
    );
};

export default Home;
