import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, isGreen, btnClassName, isSubmit, onClickButton }) => {
    return isSubmit ? (
        <button
            onClick={onClickButton}
            className={`button ${
                isGreen ? "button--green" : "button--blue"
            } ${btnClassName}`}
            type="submit">
            {text}
        </button>
    ) : (
        <button
            onClick={onClickButton}
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
    onClickButton: PropTypes.func,
    text: PropTypes.string.isRequired,
    isGreen: PropTypes.bool,
    btnClassName: PropTypes.string,
    isSubmit: PropTypes.bool
};

Button.defaultProps = {
    onClickButton: () => {},
    text: "",
    isGreen: true,
    btnClassName: "",
    isSubmit: true
};

export default Button;
