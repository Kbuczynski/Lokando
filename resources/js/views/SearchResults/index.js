import React, {useState, useEffect} from 'react';
import Wrapper from "../../components/Wrapper";
import Filters from "./Filters";
import Product from "../../components/Product";
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as BasketActions from '../../actions/BasketActions';
import * as SearchActions from '../../actions/SearchActions';

const SearchResults = (props) => {

    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("domyslnie");

    const [results, setResults] = useState([]);

    useEffect(() => {

        if (props.search.phrase && props.search.phrase.length > 1) {
            let params = {phrase: props.search.phrase};

            if (props.search.category.length > 1) {
                params.category = props.search.category;
            }

            API.post('/products/search', params)
                .then((res) => {
                    setResults(res.data.data.data);
                })

        } else {
            API.get('/products')
                .then((res) => {
                    setResults(res.data.data.data);
                })
        }

    }, [props.search.phrase, props.search.category]);

    const onAddToBasketClicked = (product) => {
        // console.log("onAddToBasketClicked", product);
        props.basketActions.addToBasket(product);
    };

    const renderProducts = () => {

        if (results.length === 0) return;

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

SearchResults.propTypes = {
    search: PropTypes.object,
    basketActions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => {
    return {
        basketActions: bindActionCreators(BasketActions, dispatch),
        searchActions: bindActionCreators(SearchActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        search: state.search,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
