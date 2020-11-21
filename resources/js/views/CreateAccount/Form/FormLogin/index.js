import React from "react";

import Button from "../../../../components/Button";

const FormLogin = () => {
    return (
        <form className="form__login">
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
                />
            </div>
            <div className="login__item">
                <Button text="Zaloguj się" />
            </div>
        </form>
    );
};

export default FormLogin;
