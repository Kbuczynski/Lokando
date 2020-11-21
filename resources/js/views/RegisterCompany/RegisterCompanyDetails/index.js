import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const RegisterCompanyDetails = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };
    const history = useHistory();
    const [categories, setCategories] = useState({});

    useEffect(() => {
        window.API.get("/categories").then(resp => {
            setCategories(resp);
        });
    }, []);

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

export default RegisterCompanyDetails;
