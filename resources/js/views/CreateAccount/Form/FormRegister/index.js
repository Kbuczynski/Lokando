import React, { useRef, useState } from "react";
import Button from "../../../../components/Button";
import { useHistory } from "react-router-dom";

const FormRegister = () => {
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [stepOneValues, setStepOneValues] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        password_confirmation: "",
        is_company: false
    });
    const [isValidPassword, setIsValidPassword] = useState(true);
    const passwordRef = useRef(),
        passwordRepeatRef = useRef();
    const history = useHistory();
    const [isError, setIsError] = useState(false);

    const changeValue = (key, newVal) => {
        const newValues = Object.assign(stepOneValues, {});
        newValues[key] = newVal;

        setStepOneValues(newValues);
    };

    const handleFullName = e => {
        const values = e.target.value.split(" ");
        const name = values[0];
        const surname = values[1];

        changeValue("name", name);
        changeValue("surname", surname);
    };

    const handleEmail = e => {
        const email = e.target.value;
        changeValue("email", email);
    };

    const handlePassword = () => {
        if (passwordRef.current.value === passwordRepeatRef.current.value) {
            setIsValidPassword(true);
            changeValue("password", passwordRef.current.value);
            changeValue(
                "password_confirmation",
                passwordRepeatRef.current.value
            );
        } else setIsValidPassword(false);
    };

    const handleCheckbox = () => {
        setCheckboxValue(!checkboxValue);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (checkboxValue) {
            history.push({
                pathname: `/uzupelnij-profil-firmy`,
                search: "?step=1",
                state: stepOneValues
            });
        } else {
            console.log("elo");
            API.post("/auth/register", stepOneValues)
                .then(() => {
                    history.push({
                        pathname: `/utworz-konto`,
                        search: "?view=login"
                    });
                })
                .catch(() => {
                    setIsError(true);
                });
        }
    };

    return (
        <form className="form__register" onSubmit={handleSubmit}>
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
                    onChange={handleFullName}
                />
                <small className="item__alert">
                    Należy podać w formacie &quot;Imię Nazwisko&quot;
                </small>
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
                    onChange={handleEmail}
                />
                {isError && (
                    <small className="item__alert">
                        Konto z podanym adresem e-mail już istnieje
                    </small>
                )}
            </div>
            <div className="register__item">
                <label htmlFor="password" className="item__label">
                    Hasło
                </label>
                <input
                    ref={passwordRef}
                    id="password"
                    type="password"
                    className="item__input"
                    placeholder="Utwórz swoje nowe hasło"
                    autoComplete="true"
                    required
                    onChange={handlePassword}
                    minLength="8"
                />
            </div>
            <div className="register__item">
                <label htmlFor="password-repeat" className="item__label">
                    Powtórz hasło
                </label>
                <input
                    ref={passwordRepeatRef}
                    id="password-repeat"
                    type="password"
                    className="item__input"
                    placeholder="Powtórz utworzone hasło"
                    autoComplete="true"
                    required
                    onChange={handlePassword}
                    minLength="8"
                />
                {!isValidPassword && (
                    <small className="item__alert">
                        Podane hasła różnią się od siebie
                    </small>
                )}
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
