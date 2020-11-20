import React from 'react';
import Button from "../Button";
import Search from "./Search";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"header__container"}>

                <span className={"logo header__logo"}/>
                <Search />
                <Button text={"Dołącz do nas!"} isGreen={true}/>

            </div>
        </div>
    );
};

export default Header;
