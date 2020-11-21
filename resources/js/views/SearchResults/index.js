import React, {useState} from 'react';
import Wrapper from "../../components/Wrapper";
import Filters from "./Filters";
import Product from "../../components/Product";
import PropTypes from "prop-types";

const SearchResults = (props) => {

    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("domyslnie");

    return (
        <Wrapper>
            <Filters
                category={category}
                setCategory={setCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSort={setSort}
            />

            <div className={"searchResults__products products container"}>
                <Product />
            </div>

        </Wrapper>
    );
};

export default SearchResults;
