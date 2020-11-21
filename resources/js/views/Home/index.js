import React from "react";
import Header from "../../components/Header";
import Category from "./Category";
import HomeSlider from "./HomeSlider";
import NewCompanies from "./NewCompanies";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <HomeSlider />
                <Category />
            </div>
            <NewCompanies />
        </div>
    );
};

export default Home;
