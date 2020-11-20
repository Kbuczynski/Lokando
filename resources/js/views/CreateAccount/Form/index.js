import React, { useState } from "react";

import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";

const Form = () => {
    const [isRegister, setIsRegister] = useState(true);

    const handleSwitch = e => {
        const target = e.target;
        if (!target.classList.contains("switch__login--active"))
            setIsRegister(!isRegister);
    };

    return (
        <div className="form">
            <div className="form__switch">
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
            {isRegister ? <FormRegister /> : <FormLogin />}
        </div>
    );
};

export default Form;
