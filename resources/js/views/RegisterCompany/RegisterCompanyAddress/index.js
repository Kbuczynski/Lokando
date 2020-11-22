import PropTypes from "prop-types";
import React from "react";
import Button from "../../../components/Button";
import { Link, useHistory } from "react-router-dom";

const RegisterCompanyAddress = ({ fullValues, setFullValues }) => {
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
    };

    const changeValue = (key, newVal) => {
        const newValues = Object.assign(fullValues, {});
        newValues[key] = newVal;

        setFullValues(newValues);
    };

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
                        maxLength={12}
                        defaultValue={fullValues.company_nip}
                        onChange={e =>
                            changeValue("company_nip", e.target.value)
                        }
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
                        defaultValue={fullValues.company_name}
                        onChange={e =>
                            changeValue("company_name", e.target.value)
                        }
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
                        defaultValue={fullValues.company_phone}
                        onChange={e =>
                            changeValue("company_phone", e.target.value)
                        }
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
                        defaultValue={fullValues.company_street}
                        onChange={e =>
                            changeValue("company_street", e.target.value)
                        }
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
                        defaultValue={fullValues.company_street_number}
                        onChange={e =>
                            changeValue("company_street_number", e.target.value)
                        }
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
                        defaultValue={fullValues.company_city}
                        onChange={e =>
                            changeValue("company_city", e.target.value)
                        }
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
                        defaultValue={fullValues.company_postal}
                        onChange={e =>
                            changeValue("company_postal", e.target.value)
                        }
                    />
                </div>
                <div className="login__item">
                    <span onClick={() => history.goBack()}>
                        <Button
                            text="Powrót"
                            isGreen={false}
                            isSubmit={false}
                        />
                    </span>
                    <Link to="/uzupelnij-profil-firmy?step=2">
                        <Button text="Przejdź dalej" />
                    </Link>
                </div>
            </form>
        </div>
    );
};

RegisterCompanyAddress.propTypes = {
    fullValues: PropTypes.object,
    setFullValues: PropTypes.func
};

RegisterCompanyAddress.defaultProps = {
    fullValues: {},
    setFullValues: () => {}
};
export default RegisterCompanyAddress;
