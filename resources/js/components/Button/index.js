import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, isGreen, btnClassName, isSubmit }) => {
    return isSubmit ? (
        <button
            className={`button ${
                isGreen ? "button--green" : "button--blue"
            } ${btnClassName}`}
            type="submit"
        >
            {text}
        </button>
    ) : (
        <button
            className={`button ${
                isGreen ? "button--green" : "button--blue"
            } ${btnClassName}`}
            type="button"
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isGreen: PropTypes.bool,
    btnClassName: PropTypes.string,
    isSubmit: PropTypes.bool
};

Button.defaultProps = {
    text: "",
    isGreen: true,
    btnClassName: "",
    isSubmit: true
};

export default Button;
