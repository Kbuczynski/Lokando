import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Search from "./Search";
import { Link } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu'

const Header = props => {
    const isLoggedIn = false;
    const [category, setCategory] = useState("");
    const [inputVal, setInputVal] = useState("");

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
                        onSearch={() => props.onSearch(inputVal, category)}
                        setInputVal={val => setInputVal(val)}
                        setCategory={category => setCategory(category)}
                        inputVal={inputVal}
                        category={category}
                    />

                    {isLoggedIn ? null : ( // burger
                        <Link to="/utworz-konto?view=register">
                            <Button text={"Dołącz do nas!"} isGreen={true} />
                        </Link>
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
