import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, position, marginY, className }) => {
    return (
        <span
            className={`title title--${position} ${className}`}
            style={{ margin: `${marginY}rem 0` }}
        >
            {text}
        </span>
    );
};

Title.propTypes = {
    text: PropTypes.string,
    position: PropTypes.string,
    marginY: PropTypes.string,
    className: PropTypes.string,
};

Title.defaultProps = {
    position: "center",
    text: "",
    marginY: "0"
};

export default Title;
