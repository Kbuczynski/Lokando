import React from "react";
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
    return (
        <div className="wrapper--gray">
            <div className="container">
                <div className="newComapnies">
                    <h2 className="newComapnies__title">Oni nam zaufali</h2>
                    <div className="newComapnies__box">
                        {companies.map(
                            ({ name, logo, slug, slogan }, index) => (
                                <NewCompaniesItem
                                    key={index}
                                    name={name}
                                    slug={slug}
                                    logo={logo}
                                    slogan={slogan}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCompanies;
