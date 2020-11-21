import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewCompaniesItem = ({ logo, name, slug, slogan }) => {
    return (
        <Link to={`/firmy/${slug}`} className="box__item" title="Odwiedź sklep">
            <div className="item__image">
                <img src={`${logo}`} alt={name} />
            </div>
            <h3 className="item__title">{name}</h3>
            <p className="item__slogan">{slogan}</p>
        </Link>
    );
};

NewCompaniesItem.propTypes = {
    logo: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    slug: PropTypes.string
};

NewCompaniesItem.defaultProps = {
    logo: "",
    name: "",
    slogan: "",
    slug: ""
};

export default NewCompaniesItem;
