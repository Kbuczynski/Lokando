import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCategoryItem = ({ name }) => {
    return <Link to={`/szukaj?kategoria=${name}`}>{name}</Link>;
};

FooterCategoryItem.propTypes = {
    name: PropTypes.string
};

FooterCategoryItem.defaultProps = {
    name: ""
};

export default FooterCategoryItem;
