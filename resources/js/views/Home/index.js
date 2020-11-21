import React from "react";
import Category from "./Category";
import HomeSlider from "./HomeSlider";
import NewCompanies from "./NewCompanies";
import Wrapper from "../../components/Wrapper";

const Home = () => {

    return (
        <Wrapper>
            <div className="container">
                <HomeSlider />
                <Category />
            </div>
            <NewCompanies />
        </Wrapper>
    );
};

export default Home;
