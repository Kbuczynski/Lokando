import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import Search from "./Search";
// import { slide as Menu } from 'react-burger-menu'

const Header = (props) => {

    const isLoggedIn = false;
    const [category, setCategory] = useState("");
    const [inputVal, setInputVal] = useState("");

    return (
        <Fragment>
        <div className={"header"} id={"page-wrap"}>
            <div className={"header__container container"}>

                <span className={"header__logo"}>
                    <img src={"./assets/images/logo/lokando-logo-white.svg"} alt={"Logo"} />
                </span>

                <Search
                    onSearch={() => props.onSearch(inputVal, category)}
                    setInputVal={(val) => setInputVal(val)}
                    setCategory={(category) => setCategory(category)}
                    inputVal={inputVal}
                    category={category}
                />

                {isLoggedIn
                    ?
                    null // burger
                    :
                    <Button text={"Dołącz do nas!"} isGreen={true}/>
                }

            </div>
        </div>
            <Search
                mobile={true}
                onSearch={() => props.onSearch(inputVal, category)}
                setInputVal={(val) => setInputVal(val)}
                setCategory={(category) => setCategory(category)}
                inputVal={inputVal}
                category={category}
            />
        </Fragment>
    );
};

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;
