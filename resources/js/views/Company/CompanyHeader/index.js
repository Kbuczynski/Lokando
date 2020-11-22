import PropTypes from "prop-types";
import React from "react";

const CompanyHeader = ({
    companyData,
    isReadOnly,
    setNewCompanyData,
    newCompanyData
}) => {
    const handleHrefChange = e => {
        if (!isReadOnly) {
            e.preventDefault();
        }
    };

    const changeValue = (key, newVal) => {
        const newValues = Object.assign(newCompanyData, {});
        newValues[key] = newVal;

        setNewCompanyData(newValues);
    };

    return (
        <div className="company__header">
            <div className="header__left">
                <h2 className="left__title">{companyData.company_name}</h2>
                <div className="left__contact">
                    <ul className="contact__list">
                        <li className="list__item">
                            <a
                                href={`tel:${companyData.company_phone}`}
                                onClick={handleHrefChange}
                            >
                                Telefon:{" "}
                                <input
                                    className={`input ${
                                        !isReadOnly ? "input--edit" : ""
                                    }`}
                                    type="text"
                                    onChange={e =>
                                        changeValue(
                                            "company_phone",
                                            e.target.value
                                        )
                                    }
                                    readOnly={isReadOnly}
                                    defaultValue={companyData.company_phone}
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
                                onChange={e =>
                                    changeValue("company_city", e.target.value)
                                }
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
                                defaultValue={companyData.company_street}
                                onChange={e =>
                                    changeValue(
                                        "company_street",
                                        e.target.value
                                    )
                                }
                            />
                            &nbsp;
                            <input
                                className={`input ${
                                    !isReadOnly ? "input--edit" : ""
                                }`}
                                type="text"
                                readOnly={isReadOnly}
                                defaultValue={companyData.company_street_number}
                                onChange={e =>
                                    changeValue(
                                        "company_street_number",
                                        e.target.value
                                    )
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
                                defaultValue={companyData.company_postal}
                                onChange={e =>
                                    changeValue(
                                        "company_postal",
                                        e.target.value
                                    )
                                }
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header__right">
                <div className="right__map">
                    <p>mapa</p>
                </div>
                <div className="right__description">
                    <textarea
                        className={`input ${!isReadOnly ? "input--edit" : ""}`}
                        defaultValue={companyData.company_description}
                        readOnly={isReadOnly}
                        onChange={e =>
                            changeValue("company_description", e.target.value)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

CompanyHeader.propTypes = {
    companyData: PropTypes.object,
    isReadOnly: PropTypes.bool,
    setNewCompanyData: PropTypes.func,
    newCompanyData: PropTypes.object
};

export default CompanyHeader;
