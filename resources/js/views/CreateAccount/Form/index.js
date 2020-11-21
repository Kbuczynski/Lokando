import React, { useEffect, useState } from "react";

import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";

const Form = () => {
    const [isRegister, setIsRegister] = useState(true);

    const handleSwitch = e => {
        const target = e.target;
        if (!target.classList.contains("switch__login--active"))
            setIsRegister(!isRegister);
    };

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (urlParams.get("view") === "login") setIsRegister(false);
        else if (urlParams.get("view") === "register") setIsRegister(true);
    }, []);

    return (
        <div className="form">
            <div className="form__switch">
                <Link to="/">
                    <img
                        src="assets/images/logo/lokando-logo-white.svg"
                        alt="Lokando STARGARD"
                    />
                </Link>
                <div>
                    <button
                        className={`switch__login ${
                            !isRegister ? "switch__login--active" : ""
                        }`}
                        onClick={handleSwitch}
                    >
                        Logowanie
                    </button>
                    <button
                        className={`switch__register ${
                            isRegister ? "switch__login--active" : ""
                        }`}
                        onClick={handleSwitch}
                    >
                        Rejestracja
                    </button>
                </div>
            </div>
            {isRegister ? <FormRegister /> : <FormLogin />}
        </div>
    );
};

export default Form;
