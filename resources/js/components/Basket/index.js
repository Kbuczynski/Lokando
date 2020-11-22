import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Basket = (props) => {

    const [sum, setSum] = useState(0);

    useEffect(() => {
        let tempSum = 0;
        props.items.forEach((item) => {
            tempSum += item.price;
        });
        setSum(tempSum);

    }, [props.items]);

    const renderProducts = () => {
        let productsToRender = [];

        props.items.map((item, key) => {

            productsToRender.push(
                <div className={"basket__product"} key={key}>
                    <img
                        src={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        width={80} height={80}
                    />

                    <div className={"basket__productTexts"}>
                        <span className={"basket__productTitle"}>{item.name}</span>
                        <div className={"basket__productInfo"}>
                            <span className={"basket__price"}>{item.price} zł</span>
                            {/*<span className={"basket__quantity"}>{item.count} szt.</span>*/}
                        </div>
                    </div>

                    <i className="pi pi-times basket__close" onClick={() => props.onRemoveFromBasket(item.id)}/>
                </div>
            );
        });

        return productsToRender;
    };

    return (
        <div className={"basket"}>
            <i className="pi pi-shopping-cart basket__icon" onClick={props.onRedirectClicked}>
                {
                    props.items.length > 0 ?
                        <div className={"basket__count"}>{props.items.length}</div>
                        :
                        null
                }
            </i>
            <div className={"basket__content"}>
                <div className={"basket__products"}>
                    {props.items.length > 0 ?
                        renderProducts()
                        :
                        <div className={"basket__empty"}>
                            <span>Koszyk pusty</span>
                        </div>
                    }
                </div>

                <div className={"basket__summary"}>
                    <div>
                        <span className={"basket__sumText"}>Suma: </span>
                        <span className={"basket__sumNum"}>{sum} zł</span>
                    </div>

                    <button className={"basket__summaryBtn"} onClick={props.onRedirectClicked}>
                        Realizuj zamówienie
                    </button>
                </div>
            </div>

        </div>
    );
};

Basket.propTypes = {
    items: PropTypes.array,
    onRedirectClicked: PropTypes.func,
    onRemoveFromBasket: PropTypes.func
};

Basket.defaultProps = {
    items: []
};

export default Basket;
