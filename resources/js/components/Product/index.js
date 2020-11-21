import React from 'react';
import Button from "../Button";

const Product = (props) => {
    return (
        <div className={"product"}>

            <div className={"product__left"}>
                <img src={props.img}
                     width={220}
                     height={260}
                     alt={"Zdjęcie produktu"}
                     className={"product__img"}
                />

                <div className={"product__text"}>
                    <span className={"product__title"}>{props.title}</span>
                    <div className={"product__desc"}>
                        {props.desc}
                    </div>
                    <span className={"product__price"}>{props.price} zł</span>
                </div>
            </div>

            <div className={"product__right"}>
                <div className={"product__company"}>
                    <img src={props.logo}
                         width={180}
                         height={65}
                         alt={"Logo firmy"}
                         className={"product__logo"}
                    />
                    <span className={"product__companyName"}>{props.companyName}</span>
                    <span className={"product__companyDesc"}>{props.companyLocation}</span>
                </div>

                <div className={"product__btnBasket"}>
                    <Button text={"Dodaj do koszyka"}/>
                </div>
            </div>

        </div>
    );
};

export default Product;
