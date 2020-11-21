import React from 'react';
import PropTypes from 'prop-types';

const Title = ({text, position}) => {
    return (
        <span className={`title title--${position}`}>
            {text}
        </span>
    );
};

Title.propTypes = {
    text: PropTypes.string,
    position: PropTypes.string
};

Title.defaultProps = {
    position: "center"
};

export default Title;
