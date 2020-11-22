import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { API } from "../../utils/ApiClass";
import Wrapper from "../../components/Wrapper";
import ProductItem from "./ProductItem";
import CompanyHeader from "./CompanyHeader";
import Product from "../../components/Product";

const Company = ({
    match: {
        params: { slug }
    }
}) => {
    const [companyData, setCompanyData] = useState({});
    const [products, setProducts] = useState({});
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [isCompany, setIsCompany] = useState(false);
    const [newCompanyData, setNewCompanyData] = useState({});

    console.log(companyData);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if (user.user.is_company === 1) {
                if (user.user.company.company_slug === slug) {
                    setIsCompany(true);
                } else {
                    setIsCompany(false);
                }
            }
        }

        API.get(`/company/${slug}`)
            .then(resp => {
                setCompanyData(resp.data.data);
                setNewCompanyData(resp.data.data);
                const company_id = resp.data.data.id;

                API.get(`/${company_id}/products`)
                    .then(resp => {
                        setProducts(resp.data.data.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    const handleEdit = () => {
        setIsReadOnly(!isReadOnly);

        if (!isReadOnly) {
            API.put("/company", newCompanyData);
        }
    };

    return (
        <Wrapper>
            <div className="container">
                <div className="company">
                    {isCompany && (
                        <div className="company__type" onClick={handleEdit}>
                            {isReadOnly ? "Edytuj" : "Zakończ"}
                        </div>
                    )}

                    <CompanyHeader
                        companyData={companyData}
                        isReadOnly={isReadOnly}
                        setNewCompanyData={setNewCompanyData}
                        newCompanyData={newCompanyData}
                    />

                    <div className="company__products">
                        {!isReadOnly && (
                            <React.Fragment>
                                <ProductItem
                                    isReadOnly={isReadOnly}
                                    firstItem={true}
                                />
                                {products.length > 0 &&
                                    products.map(product => (
                                        <ProductItem
                                            key={product.name}
                                            isReadOnly={isReadOnly}
                                            firstItem={false}
                                            product={product}
                                            id={product.id}
                                        />
                                    ))}
                            </React.Fragment>
                        )}

                        {isReadOnly &&
                            products.length > 0 &&
                            products.map(product => (
                                <Product
                                    companyName={companyData.companyData}
                                    price={product.price}
                                    img={
                                        "https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"
                                    }
                                    desc={product.long_description}
                                    logo={
                                        "https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"
                                    }
                                    title={product.name}
                                    key={product.name}
                                    companyLocation={`ul. ${companyData.company_street} ${companyData.company_street_number}`}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

Company.propTypes = {
    match: PropTypes.object
};

Company.defaultProps = {
    match: {}
};

export default Company;
