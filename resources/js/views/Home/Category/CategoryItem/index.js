import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, image, slug }) => {
    return (
        <Link
            to={`/szukaj?kategoria=${slug}`}
            className="box__item"
            title={name}
        >
            <div className="item__img">
                <img src={`${image}`} alt={slug} />
            </div>
            <h3 className="item__title">{name}</h3>
        </Link>
    );
};

CategoryItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string
};

CategoryItem.defaultProps = {
    name: "",
    image: "",
    slug: ""
};

export default CategoryItem;
