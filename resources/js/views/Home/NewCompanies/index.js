import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import NewCompaniesItem from "./NewCompaniesItem";

const NewCompanies = () => {
    const [companies, setCompanies] = useState({});

    useEffect(() => {
        window.API.get("/company/latest").then(resp => {
            setCompanies(resp);
        });
    }, []);

    return (
        <div className="wrapper--gray">
            <div className="container">
                <div className="newComapnies">
                    <Title text="Oni nam zaufali" marginY="2" />

                    <div className="newComapnies__box">
                        {Object.keys(companies).length > 0 &&
                            Object.values(companies.data.data).map(
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
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCompanies;
