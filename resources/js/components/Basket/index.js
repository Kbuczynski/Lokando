import React from 'react';
import PropTypes from 'prop-types';

const Basket = props => {

    const renderProduct = () => {
        return (
            <div className={"basket__product"}>
                <img
                    src={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                    width={80} height={80}
                />

                <div className={"basket__productTexts"}>
                    <span className={"basket__productTitle"}>Samsung Galaxy A31 128GB (czarny)</span>
                    <div className={"basket__productInfo"}>
                        <span className={"basket__price"}>3000 zł</span>
                        <span className={"basket__quantity"}>1 szt.</span>
                    </div>
                </div>

                <i className="pi pi-times basket__close"/>
            </div>
        )
    };

    return (
        <div className={"basket"}>
            <i className="pi pi-shopping-cart basket__icon">
                <div className={"basket__count"}>2</div>
            </i>
            <div className={"basket__content"}>
                <div className={"basket__products"}>
                    {renderProduct()}
                    {renderProduct()}
                </div>

                <div className={"basket__summary"}>
                    <div>
                        <span className={"basket__sumText"}>Suma: </span>
                        <span className={"basket__sumNum"}>9000 zł</span>
                    </div>

                    <button className={"basket__summaryBtn"}>Realizuj zamówienie</button>
                </div>
            </div>

        </div>
    );
};

Basket.propTypes = {};

export default Basket;
