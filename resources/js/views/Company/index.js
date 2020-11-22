import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { API } from "../../utils/ApiClass";

const Company = ({
    match: {
        params: { slug }
    }
}) => {
    const [companyData, setCompanyData] = useState({});
    const [isReadOnly, setIsReadOnly] = useState(true);

    useEffect(() => {
        API.get(`/company/${slug}`)
            .then(resp => {
                setCompanyData(resp.data.data);
                console.log(resp);
            })
            .catch(e => {
                console.log(e, "404");
            });
    }, []);

    const handleEdit = () => {
        setIsReadOnly(!isReadOnly);
    };

    const handlePhoneChange = e => {
        if (!isReadOnly) {
            e.preventDefault();
        }
    };

    return (
        <div className="container" onClick={handleEdit}>
            <div className="company">
                <div className="company__header">
                    <div className="header__left">
                        <h2 className="left__title">
                            {companyData.company_name}
                        </h2>
                        <div className="left__contact">
                            <ul className="contact__list">
                                <li className="list__item">
                                    <a
                                        href={`tel:${companyData.company_phone}`}
                                        onClick={handlePhoneChange}
                                    >
                                        Telefon:{" "}
                                        <input
                                            className={`input ${
                                                !isReadOnly ? "input--edit" : ""
                                            }`}
                                            type="text"
                                            readOnly={isReadOnly}
                                            defaultValue={
                                                companyData.company_phone
                                            }
                                        />
                                    </a>
                                </li>
                                <li className="list__item">
                                    Miasto:{" "}
                                    <input
                                        className={`input ${
                                            !isReadOnly ? "input--edit" : ""
                                        }`}
                                        type="text"
                                        readOnly={isReadOnly}
                                        defaultValue={companyData.company_city}
                                    />
                                </li>
                                <li className="list__item">
                                    Adres:&nbsp;
                                    <input
                                        className={`input ${
                                            !isReadOnly ? "input--edit" : ""
                                        }`}
                                        type="text"
                                        readOnly={isReadOnly}
                                        defaultValue={
                                            companyData.company_street
                                        }
                                    />
                                    &nbsp;
                                    <input
                                        className={`input ${
                                            !isReadOnly ? "input--edit" : ""
                                        }`}
                                        type="text"
                                        readOnly={isReadOnly}
                                        defaultValue={
                                            companyData.company_street_number
                                        }
                                    />
                                </li>
                                <li className="list__item">
                                    Kod pocztowy:{" "}
                                    <input
                                        className={`input ${
                                            !isReadOnly ? "input--edit" : ""
                                        }`}
                                        type="text"
                                        readOnly={isReadOnly}
                                        defaultValue={
                                            companyData.company_postal
                                        }
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="right__map">
                            <p>mapa xD</p>
                        </div>
                        <div className="right__description">
                            <textarea
                                className={`input ${
                                    !isReadOnly ? "input--edit" : ""
                                }`}
                                defaultValue={companyData.company_description}
                                readOnly={isReadOnly}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Company.propTypes = {
    match: PropTypes.object
};

Company.defaultProps = {
    match: {}
};

export default Company;
