import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Product from "../../components/Product";
import Button from "../../components/Button";

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

const BasketSummary = props => {

    return (
        <Wrapper>
            <div className={"grayBg"}>
                <div className={"container basketSummary"}>
                    <Title text={"Twój koszyk"} position={"left"} className={"basketSummary__title"} marginY={2}/>

                    <ProductGroup>
                        <Product
                            className={"basketSummary__product"}
                            id={1}
                            img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                            title={"Samsung Galaxy A31 128GB (czarny)"}
                            desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                            "Pojemność baterii   5000 mAh \n" +
                            "Pamięć   4 GB / 128 GB\n" +
                            "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                            price={3000}
                            logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                            companyName={"Sklep Ily Line"}
                            companyLocation={"ul. Świecowa 4"}
                            showAddToBasket={false}
                        />
                        <Product
                            className={"basketSummary__product"}
                            id={1}
                            img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                            title={"Samsung Galaxy A31 128GB (czarny)"}
                            desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                            "Pojemność baterii   5000 mAh \n" +
                            "Pamięć   4 GB / 128 GB\n" +
                            "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                            price={3000}
                            logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                            companyName={"Sklep Ily Line"}
                            companyLocation={"ul. Świecowa 4"}
                            showAddToBasket={false}
                        />
                    </ProductGroup>

                    <ProductGroup>
                        <Product
                            className={"basketSummary__product"}
                            id={1}
                            img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                            title={"Samsung Galaxy A31 128GB (czarny)"}
                            desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                            "Pojemność baterii   5000 mAh \n" +
                            "Pamięć   4 GB / 128 GB\n" +
                            "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                            price={3000}
                            logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                            companyName={"Sklep Ily Line"}
                            companyLocation={"ul. Świecowa 4"}
                            showAddToBasket={false}
                        />
                    </ProductGroup>
                </div>
            </div>
        </Wrapper>
    );
};

BasketSummary.propTypes = {};

export default BasketSummary;
