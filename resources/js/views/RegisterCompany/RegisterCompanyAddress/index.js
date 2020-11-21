import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useHistory } from "react-router-dom";

const RegisterCompanyAddress = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    const history = useHistory();
    return (
        <div className="registerCompany__address container">
            <div className="address__title">
                <h2 className="title__main">Daj się znaleźć swoim klientom</h2>
                <p className="title__desc">
                    Uzupełnij dane dotyczące lokalizacji swojej firmy
                </p>
            </div>

            <form className="address__form" onSubmit={handleSubmit}>
                <div className="form__item">
                    <label htmlFor="company_nip" className="item__label">
                        Numer NIP
                    </label>
                    <input
                        id="company_nip"
                        type="number"
                        className="item__input"
                        placeholder="Podaj numer NIP"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_name" className="item__label">
                        Nazwa firmy
                    </label>
                    <input
                        id="company_name"
                        type="text"
                        className="item__input"
                        placeholder="Podaj nazwę"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_phone" className="item__label">
                        Numer telefonu
                    </label>
                    <input
                        id="company_phone"
                        type="tel"
                        className="item__input"
                        placeholder="Podaj numer telefonu"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_street" className="item__label">
                        Ulica
                    </label>
                    <input
                        id="company_street"
                        type="text"
                        className="item__input"
                        placeholder="Podaj nazwę ulicy"
                    />
                </div>
                <div className="form__item">
                    <label
                        htmlFor="company_street_number"
                        className="item__label"
                    >
                        Numer lokalu
                    </label>
                    <input
                        id="company_street_number"
                        type="text"
                        className="item__input"
                        placeholder="Podaj numer lokalu"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_city" className="item__label">
                        Miasto
                    </label>
                    <input
                        id="company_city"
                        type="text"
                        className="item__input"
                        placeholder="Podaj miasto"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_postal" className="item__label">
                        Kod pocztowy
                    </label>
                    <input
                        id="company_postal"
                        type="text"
                        className="item__input"
                        placeholder="Podaj kod pocztowy"
                    />
                </div>
                <div className="login__item">
                    <span onClick={() => history.goBack()}>
                        <Button text="Powrót" isGreen={false} />
                    </span>
                    <Link to="/uzupelnij-profil-firmy?step=2">
                        <Button text="Przejdź dalej" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterCompanyAddress;
