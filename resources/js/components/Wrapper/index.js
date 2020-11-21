import React from 'react';
import Header from "../Header";
import PropTypes from 'prop-types';

const Wrapper = (props) => {

    const onSearch = (inputText, category) => {
        console.log(inputText, category);
    };

    return (
        <div className={"wrapper"}>
            <Header onSearch={(inputText, category) => onSearch(inputText, category)} />

            {props.children}
        </div>
    );
};

Wrapper.propTypes = {
  children: PropTypes.node
};

export default Wrapper;
