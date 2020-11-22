import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import NewCompaniesItem from "./NewCompaniesItem";

const companies = [
    {
        name: "Nazwa firmy 123",
        logo: "assets/images/company-test/company.jpg",
        slogan: "Naturalne świece sojowe xD",
        slug: "nazwa-firmy-123"
    },
    {
        name: "Nazwa firmy 123",
        logo: "assets/images/company-test/company.jpg",
        slogan: "Naturalne świece sojowe xD",
        slug: "nazwa-firmy-123"
    },
    {
        name: "Nazwa firmy 123",
        logo: "assets/images/company-test/company.jpg",
        slogan: "Naturalne świece sojowe xD",
        slug: "nazwa-firmy-123"
    }
];
const NewCompanies = () => {
    const [companies, setCompanies] = useState({});

    useEffect(() => {
        window.API.get("/categories").then(resp => {
            setCompanies(resp);
        });
    }, []);

    return (
        <div className="wrapper--gray">
            <div className="container">
                <div className="newComapnies">
                    <Title text="Oni nam zaufali" marginY="2" />

                    <div className="newComapnies__box">
                        {/* {Object.keys(companies).length > 0 &&
                            companies.data.data.map(
                                ({
                                    company_name,
                                    company_slogan,
                                    company_slug
                                }) => {
                                    return (
                                        <NewCompaniesItem
                                            key={company_name}
                                            name={company_name}
                                            slug={company_slug}
                                            slogan={company_slogan}
                                        />
                                    );
                                }
                            )} */}
                        {/* {companies.map(
                            ({ name, logo, slug, slogan }, index) => (
                                <NewCompaniesItem
                                    key={index}
                                    name={name}
                                    slug={slug}
                                    logo={logo}
                                    slogan={slogan}
                                />
                            )
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCompanies;
