import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, image }) => {
    return (
        <Link
            to={`${window.baseUrl}/szukaj?kategoria=${name}`}
            className="box__item"
            title={name}
        >
            <div className="item__img">
                <img src={`${image}`} alt={name} />
            </div>
            <h3 className="item__title">{name}</h3>
        </Link>
    );
};

CategoryItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};

CategoryItem.defaultProps = {
    name: "",
    image: ""
};

export default CategoryItem;
