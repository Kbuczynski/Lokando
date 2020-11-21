import React from "react";
import PropTypes from "prop-types";

const Title = ({ text, position, marginY }) => {
    return (
        <span
            className={`title title--${position}`}
            style={{ margin: `${marginY}rem 0` }}
        >
            {text}
        </span>
    );
};

Title.propTypes = {
    text: PropTypes.string,
    position: PropTypes.string,
    marginY: PropTypes.string
};

Title.defaultProps = {
    position: "center",
    text: "",
    marginY: "0"
};

export default Title;
