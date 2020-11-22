import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import RegisterCompanyAddress from "./RegisterCompanyAddress";
import RegisterCompanyDetails from "./RegisterCompanyDetails";

const RegisterCompany = props => {
    // eslint-disable-next-line no-unused-vars
    const [baseValues, setBaseValues] = useState(props.location.state);

    const [fullValues, setFullValues] = useState({
        name: baseValues.name,
        surname: baseValues.surname,
        email: baseValues.email,
        password: baseValues.password,
        password_confirmation: baseValues.password_confirmation,
        is_company: 1,
        company_nip: "",
        company_name: "",
        company_phone: "",
        company_street: "",
        company_street_number: "",
        company_city: "",
        company_postal: "",
        company_description: "",
        company_slogan: "",
        category_id: 1
    });
    const [step, setStep] = useState("1");

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setStep(urlParams.get("step"));
    }, [window.location.search]);

    return (
        <div className="registerCompany">
            {step === "1" ? (
                <RegisterCompanyAddress
                    fullValues={fullValues}
                    setFullValues={setFullValues}
                />
            ) : (
                <RegisterCompanyDetails
                    fullValues={fullValues}
                    setFullValues={setFullValues}
                />
            )}
        </div>
    );
};

RegisterCompany.propTypes = {
    location: PropTypes.object
};

RegisterCompany.defaultProps = {
    location: {}
};

export default RegisterCompany;
