import React, { useState } from "react";

import Button from "../../../../components/Button";

const FormLogin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleEmail = e => {
        const email = e.target.value;

        setLoginData({
            email: email,
            password: loginData.password
        });
    };

    const handlePassword = e => {
        const password = e.target.value;

        setLoginData({
            email: loginData.email,
            password: password
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        API.post("/auth/login", loginData);
    };

    return (
        <form className="form__login" onSubmit={handleSubmit}>
            <div className="login__item">
                <label htmlFor="email" className="item__label">
                    E-mail
                </label>
                <input
                    id="email"
                    type="email"
                    className="item__input"
                    placeholder="Podaj swój e-mail"
                    required
                    onChange={handleEmail}
                />
            </div>
            <div className="login__item">
                <label htmlFor="password" className="item__label">
                    Hasło
                </label>
                <input
                    id="password"
                    type="password"
                    className="item__input"
                    placeholder="Utwórz swoje hasło"
                    autoComplete="true"
                    required
                    min="8"
                    onChange={handlePassword}
                />
            </div>
            <div className="login__item">
                <Button text="Zaloguj się" />
            </div>
        </form>
    );
};

export default FormLogin;
