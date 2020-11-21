import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const RegisterCompanyDetails = ({ fullValues, setFullValues }) => {
    const [isError, setIsError] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        API.post("/auth/register", fullValues)
            .then(() => {
                setRegistrationSuccess(true);

                setTimeout(() => {
                    history.push({
                        pathname: `/utworz-konto`,
                        search: "?view=login"
                    });
                }, 5000);
            })
            .catch(() => {
                setIsError(true);
            });
    };
    const history = useHistory();
    const [categories, setCategories] = useState({});

    useEffect(() => {
        window.API.get("/categories").then(resp => {
            setCategories(resp);
        });
    }, []);

    const changeValue = (key, newVal) => {
        const newValues = Object.assign(fullValues, {});
        newValues[key] = newVal;

        setFullValues(newValues);
    };

    return (
        <div className="registerCompany__address container">
            <div className="address__title">
                <h2 className="title__main">Stwórz swoją markę w internecie</h2>
                <p className="title__desc">
                    Uzupełnij dane dotyczące wizerunku firmy
                </p>
            </div>

            <form className="address__form" onSubmit={handleSubmit}>
                <div className="form__item">
                    <label htmlFor="company_desc" className="item__label">
                        Opis firmy
                    </label>
                    <textarea
                        id="company_desc"
                        className="item__input"
                        placeholder="Podaj opis firmy"
                        defaultValue={fullValues.company_description}
                        onChange={e =>
                            changeValue("company_description", e.target.value)
                        }
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_slogan" className="item__label">
                        Slogan
                    </label>
                    <input
                        id="company_slogan"
                        type="text"
                        className="item__input"
                        placeholder="Podaj slogan"
                        defaultValue={fullValues.company_slogan}
                        onChange={e =>
                            changeValue("company_slogan", e.target.value)
                        }
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="company_category" className="item__label">
                        Wybierz kategorie
                    </label>
                    <select
                        name="cars"
                        id="company_category"
                        className="item__input"
                        onChange={e =>
                            changeValue("category_id", e.target.value)
                        }
                    >
                        {Object.keys(categories).length > 0 &&
                            categories.data.data.map(({ id, name }) => {
                                return (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                );
                            })}
                    </select>
                    {registrationSuccess && (
                        <small className="item__alert">
                            Konto zostało utworzone poprawnie, zostaniesz
                            przekierowany na stronę do logowania
                        </small>
                    )}
                </div>
                <div className="login__item">
                    <span onClick={() => history.goBack()}>
                        <Button
                            text="Powrót"
                            isGreen={false}
                            isSubmit={false}
                        />
                    </span>

                    <Button text="Zakończ tworzenie konta" />
                </div>
            </form>
        </div>
    );
};

RegisterCompanyDetails.propTypes = {
    fullValues: PropTypes.object,
    setFullValues: PropTypes.func
};

RegisterCompanyDetails.defaultProps = {
    fullValues: {},
    setFullValues: () => {}
};

export default RegisterCompanyDetails;
