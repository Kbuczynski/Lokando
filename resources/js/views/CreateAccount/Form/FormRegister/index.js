import React from "react";

import Button from "../../../../components/Button";

const FormRegister = () => {
    return (
        <form className="form__register">
            <div className="register__item">
                <label htmlFor="name" className="item__label">
                    Imię i nazwisko
                </label>
                <input
                    id="name"
                    type="text"
                    className="item__input"
                    placeholder="Podaj swoje imię i nazwisko"
                />
            </div>
            <div className="register__item">
                <label htmlFor="email" className="item__label">
                    E-mail
                </label>
                <input
                    id="email"
                    type="email"
                    className="item__input"
                    placeholder="Podaj swój e-mail"
                />
            </div>
            <div className="register__item">
                <label htmlFor="password" className="item__label">
                    Hasło
                </label>
                <input
                    id="password"
                    type="password"
                    className="item__input"
                    placeholder="Utwórz swoje nowe hasło"
                    autoComplete="true"
                />
            </div>
            <div className="register__item">
                <label htmlFor="password-repeat" className="item__label">
                    Powtórz hasło
                </label>
                <input
                    id="password-repeat"
                    type="password"
                    className="item__input"
                    placeholder="Powtórz utworzone hasło"
                    autoComplete="true"
                />
            </div>
            <div className="login__item">
                <Button text="Zarejestruj się" />
            </div>
        </form>
    );
};

export default FormRegister;
