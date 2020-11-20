import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, isGreen }) => {
    return (
        <button
            className={`button ${isGreen ? "button--green" : "button--blue"}`}
            type="submit"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isGreen: PropTypes.bool
};

Button.defaultProps = {
    text: "",
    isGreen: true
};

export default Button;
