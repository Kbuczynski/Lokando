import React, { useState } from "react";

import Button from "../../../../components/Button";

const FormRegister = () => {
    const [checkboxValue, setCheckboxValue] = useState(false);

    const handleCheckbox = () => {
        setCheckboxValue(!checkboxValue);
    };

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
                    required
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
                    required
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
                    required
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
                    required
                />
            </div>
            <div className="register__item">
                <label htmlFor="account-type" className="item__label--checkbox">
                    {checkboxValue && <i className="pi pi-check"></i>}
                </label>
                <input
                    id="account-type"
                    type="checkbox"
                    className="item__input"
                    onChange={handleCheckbox}
                />
                <label htmlFor="account-type" className="item__label">
                    Zakładam konto dla mojej firmy
                </label>
            </div>
            <div className="login__item">
                <Button text="Zarejestruj się" />
            </div>
        </form>
    );
};

export default FormRegister;
