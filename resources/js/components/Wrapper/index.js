import React from "react";
import Header from "../Header";
import PropTypes from "prop-types";
import Footer from "../Footer";

const Wrapper = ({ children, className }) => {
    const onSearch = (inputText, category) => {
        console.log(inputText, category);
    };

    return (
        <div className={`wrapper ${className}`}>
            <Header
                onSearch={(inputText, category) =>
                    onSearch(inputText, category)
                }
            />
            {children}
            <Footer />
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Wrapper;
