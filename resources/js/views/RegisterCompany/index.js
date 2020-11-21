import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import RegisterCompanyAddress from "./RegisterCompanyAddress";
import RegisterCompanyDetails from "./RegisterCompanyDetails";

const RegisterCompany = props => {
    const [baseValues, setBaseValues] = useState(props.location.state);
    const [step, setStep] = useState("1");

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setStep(urlParams.get("step"));
    }, [window.location.search]);

    return (
        <div className="registerCompany">
            {step === "1" ? (
                <RegisterCompanyAddress />
            ) : (
                <RegisterCompanyDetails />
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
