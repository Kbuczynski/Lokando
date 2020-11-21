import React, { useState } from "react";

import Button from "../../../../components/Button";

const FormLogin = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [isError, setIsError] = useState(false);

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

        API.post("/auth/login", loginData)
            .then(() => {
                window.location.href = `${window.baseUrl}/`;
            })
            .catch(() => {
                setIsError(true);
            });
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
                    value={loginData.email}
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
                    value={loginData.password}
                />
            </div>
            <div className="login__item">
                <Button text="Zaloguj się" />
                {isError && (
                    <small className="item__alert">
                        Login lub hasło nie są poprawne 🤔
                    </small>
                )}
            </div>
        </form>
    );
};

export default FormLogin;
