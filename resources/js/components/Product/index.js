import React from 'react';
import Button from "../Button";

const Product = () => {
    return (
        <div className={"product"}>

            <img src={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                 width={220}
                 height={260}
                 alt={"Zdjęcie produktu"}
                 className={"product__img"}
            />

            <div className={"product__text"}>
                <span className={"product__title"}>Samsung Galaxy A31 128GB (czarny)</span>
                <span className={"product__desc"}>
                    <b>Aparaty tylny/przedni</b>   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix <br />
                    <b>Pojemność baterii</b>   5000 mAh <br />
                    <b>Pamięć</b>   4 GB / 128 GB <br />
                    <b>Wyświetlacz</b>   6,4 &quot;, 2400 x 1080 pikseli, AMOLED
                </span>
                <span className={"product__price"}>3000 zł</span>
            </div>

            <div className={"product__company"}>
                <img src={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                     width={180}
                     height={65}
                     alt={"Logo firmy"}
                     className={"product__logo"}
                />
                <span className={"product__companyName"}>Sklep Ily Line</span>
                <span className={"product__companyDesc"}>ul. Świecowa 4</span>
            </div>

            {/*<div className={"product__btnBasket"}>*/}
            {/*    <Button text={"Dodaj do koszyka"} isGreen={true} />*/}
            {/*</div>*/}

        </div>
    );
};

export default Product;
