import React, {useState, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import Filters from "./Filters";
import Product from "../../components/Product";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BasketActions from '../../actions/BasketActions';

const SearchResults = (props) => {

    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("domyslnie");

    const [results, setResults] = useState([]);

    useEffect(() => {
        API.get("/products").then((res) => {
            setResults(res.data.data.data);
        })

    }, []);

    const onAddToBasketClicked = (product) => {
        // console.log("onAddToBasketClicked", product);
        props.basketActions.addToBasket(product);
    };

    const renderProducts = () => {
        let resultsToRender = [];

        results.map((product, key) => {

            // console.log(product);

            resultsToRender.push(
                <Product
                    onAddToBasketClicked={() => onAddToBasketClicked(product)}
                    key={key}
                    id={product.id}
                    img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                    title={product.name}
                    desc={product.short_description}
                    price={product.price}
                    logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                    companyName={product.company.company_name}
                    companyLocation={product.company.company_street + ", " + product.company.company_city}
                />
            );

        });
            return resultsToRender;
    };

    return (
        <Wrapper>
            <div className={"searchResults"}>
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
                    {renderProducts()}
                </div>
            </div>
        </Wrapper>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        basketActions: bindActionCreators(BasketActions, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
