import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Product from "../../components/Product";
import Button from "../../components/Button";

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as BasketActions from '../../actions/BasketActions';

const ProductGroup = (props) => {
    return (
        <div className={"productGroup"}>
            {props.children}

            <div className={"productGroup__btn"}>
                <Button text={"Zapłać"} />
            </div>
        </div>
    )
};

const BasketSummary = (props) => {

    const [grouped, setGrouped] = useState({});

    useEffect(() => {
        let grouped = {};

        props.basket.items.forEach((item) => {
            if (grouped[item.company_id]) {
                grouped[item.company_id] = [...grouped[item.company_id], item];
            } else {
                grouped[item.company_id] = [item];
            }
        });
        setGrouped(grouped);
        console.log(grouped);

    }, [props.basket.items]);

    const renderProducts = (products) => {
        let productsToRender = [];

        products.map(function(product, key) {
            productsToRender.push(
                <Product
                    key={key}
                    className={"basketSummary__product"}
                    id={product.id}
                    img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                    title={product.name}
                    desc={product.short_description}
                    price={product.price}
                    logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                    companyName={product.company.company_name}
                    companyLocation={product.company.company_street}
                    showAddToBasket={false}
                />
            )
        });

        return productsToRender;
    };

    const renderGroups = () => {
      let groupsToRender = [];

        Object.keys(grouped).map(function(key, renderKey) {
            // console.log(grouped[key]);
            groupsToRender.push(
                <ProductGroup key={renderKey}>
                    {renderProducts(grouped[key])}
                </ProductGroup>
            )
        });

      return groupsToRender;
    };

    return (
        <Wrapper>
            <div className={"grayBg"}>
                <div className={"container basketSummary"}>
                    <Title text={"Twój koszyk"} position={"left"} className={"basketSummary__title"} marginY={"2"}/>

                    {renderGroups()}
                </div>
            </div>
        </Wrapper>
    );
};

ProductGroup.propTypes = {
  children: PropTypes.node
};

BasketSummary.propTypes = {
    basket: PropTypes.object
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         basketActions: bindActionCreators(BasketActions, dispatch),
//     };
// };

const mapStateToProps = (state) => {
    return {
        basket: state.basket,
    };
};

export default connect(mapStateToProps, null)(BasketSummary);
