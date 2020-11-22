import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../../components/Button";

const FormLogin = () => {
    const history = useHistory();
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

    const sendLogin = () => {
        return API.post("/auth/login", loginData);
    };

    const getInfo = () => {
        API.get("/me").then(resp => {
            sessionStorage.setItem("user", JSON.stringify(resp.data.data));

            history.push({
                pathname: `/`
            });
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        sendLogin().then(() => {
            getInfo();
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
                {isError && (
                    <small className="item__alert">
                        Login lub hasło nie są poprawne
                    </small>
                )}
            </div>
        </form>
    );
};

export default FormLogin;
