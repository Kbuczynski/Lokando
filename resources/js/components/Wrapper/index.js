import React from "react";
import Header from "../Header";
import PropTypes from "prop-types";
import Footer from "../Footer";

const Wrapper = ({ children, className }) => {
    return (
        <div className={`wrapper ${className}`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

Wrapper.defaultProps = {
  className: ''
};

export default Wrapper;
