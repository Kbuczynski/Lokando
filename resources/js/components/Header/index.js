import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Search from "./Search";
import {Link, useHistory} from "react-router-dom";
import Basket from "../Basket";

window.onclick = function(event) {
    if (!event.target.matches(".dropdown__btn")) {
        const dropdowns = document.getElementsByClassName("dropdown__content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("dropdown--show")) {
                openDropdown.classList.remove("dropdown--show");
            }
        }
    }
};

const Header = props => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [category, setCategory] = useState("");
    const [inputVal, setInputVal] = useState("");

    const refDropdown = useRef();
    const history = useHistory();

    useEffect(() => {
        const URLParams = new URLSearchParams(window.location.search);
        const category = URLParams.get("cat");
        const inputVal = URLParams.get("tags");
        const user = sessionStorage.getItem("user");

        if (category)
            setCategory(category);
        if (inputVal)
            setInputVal(inputVal);

        if (user) {
            const { is_company } = JSON.parse(user).user;

            if (is_company === 1) setLoggedIn(true);
            else setLoggedIn(false);
        }
    }, []);

    const onSearch = () => {
        history.push("/szukaj?cat=" + category + "&tags=" + inputVal);
    };

    const onMenuClick = () => {
        if (refDropdown.current.classList.contains("dropdown--show")) {
            refDropdown.current.classList.remove("dropdown--show");
        } else {
            refDropdown.current.classList.add("dropdown--show");
        }
    };

    const handleLogout = () => {
        API.get("/logout")
            .then(() => {
                setLoggedIn(false);
                sessionStorage.removeItem("user");
            })
            .catch(e => console.log(e));
    };

    return (
        <Fragment>
            <div className={"header"} id={"page-wrap"}>
                <div className={"header__container container"}>
                    <Link
                        className={"header__logo"}
                        to="/"
                        title="Strona główna"
                    >
                        <img
                            src={"./assets/images/logo/lokando-logo-white.svg"}
                            alt={"Logo"}
                        />
                    </Link>

                    <Search
                        onSearch={() => onSearch()}
                        setInputVal={val => setInputVal(val)}
                        setCategory={category => setCategory(category)}
                        inputVal={inputVal}
                        category={category}
                    />

                    {isLoggedIn ? (
                        <div className={"dropdownWrap"}>
                            <div className="dropdown">
                                <button
                                    onClick={() => onMenuClick()}
                                    className="dropdown__btn"
                                >
                                    Menu
                                </button>
                                <div
                                    className={`dropdown__content`}
                                    ref={refDropdown}
                                >
                                    <Link to={""}>Zamówienia</Link>
                                    <Link to={""}>Link 2</Link>
                                    <Link to={"/"} onClick={handleLogout}>
                                        Wyloguj się
                                    </Link>
                                </div>
                            </div>
                            <Basket/>
                        </div>
                    ) : (
                        // burger
                        <div className={"header__buttons"}>
                            <Link to="/utworz-konto?view=register">
                                <Button text={"Dołącz do nas!"} />
                            </Link>
                            <Link to="/utworz-konto?view=login">
                                <Button
                                    text={"Mam już konto"}
                                    isGreen={false}
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <Search
                mobile={true}
                onSearch={() => props.onSearch(inputVal, category)}
                setInputVal={val => setInputVal(val)}
                setCategory={category => setCategory(category)}
                inputVal={inputVal}
                category={category}
            />
        </Fragment>
    );
};

Header.propTypes = {
    onSearch: PropTypes.func
};

export default Header;
