import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, isGreen, btnClassName }) => {

    return (
        <button
            className={`button ${isGreen ? "button--green" : "button--blue"} ${btnClassName}`}
            type="submit">
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    isGreen: PropTypes.bool,
    btnClassName: PropTypes.string
};

Button.defaultProps = {
    text: "",
    isGreen: true,
    btnClassName: ""
};

export default Button;
