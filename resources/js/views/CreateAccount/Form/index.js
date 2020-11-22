import React, { useEffect, useState } from "react";
import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Form = () => {
    const [isRegister, setIsRegister] = useState("register");
    const history = useHistory();

    const handleSwitch = e => {
        const target = e.target;
        if (!target.classList.contains("switch__login--active")) {
            if (isRegister === "register") {
                history.push({
                    pathname: `/utworz-konto`,
                    search: "?view=login"
                });
            } else {
                history.push({
                    pathname: `/utworz-konto`,
                    search: "?view=register"
                });
            }
        }
    };

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setIsRegister(urlParams.get("view"));
    }, [window.location.search]);

    useEffect(() => {
        if (window.location.search === "") {
            history.push({
                pathname: `/utworz-konto`,
                search: "?view=register"
            });
        }
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
                            isRegister === "login"
                                ? "switch__login--active"
                                : ""
                        }`}
                        onClick={handleSwitch}
                    >
                        Logowanie
                    </button>
                    <button
                        className={`switch__register ${
                            isRegister === "register"
                                ? "switch__login--active"
                                : ""
                        }`}
                        onClick={handleSwitch}
                    >
                        Rejestracja
                    </button>
                </div>
            </div>
            {isRegister === "register" ? <FormRegister /> : <FormLogin />}
        </div>
    );
};

export default Form;
