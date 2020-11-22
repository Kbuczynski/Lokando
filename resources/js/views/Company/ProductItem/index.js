import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Button from "../../../components/Button";
import { API } from "../../../utils/ApiClass";

const ProductItem = ({ isReadOnly, firstItem, product, id }) => {
    const [name, setName] = useState(product.name);
    const [short_description, setShort_description] = useState(
        product.short_description
    );
    const [long_description, setLong_description] = useState(
        product.long_description
    );
    const [price, setPrice] = useState(product.price);
    const [type, setType] = useState(product.type);
    const [isUpdateCorrect, setIsUpdateCorrect] = useState(false);
    const formRef = useRef();

    const handleProduct = () => {
        const editProductData = {
            id: id,
            name: name,
            short_description: short_description,
            long_description: long_description,
            price: price,
            type: type
        };

        const productData = {
            name: name,
            short_description: short_description,
            long_description: long_description,
            price: price,
            type: type
        };

        if (firstItem) {
            API.post(`/products`, productData).then(() => {
                setIsUpdateCorrect(true);
                formRef.current.reset();
                setTimeout(() => setIsUpdateCorrect(false), 1000);
            });
        } else {
            API.put(`/products/${id}`, editProductData).then(() => {
                setIsUpdateCorrect(true);

                setTimeout(() => setIsUpdateCorrect(false), 1000);
            });
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleProduct();
    };

    return (
        <form className="products__item" onSubmit={handleSubmit} ref={formRef}>
            <input
                type="text"
                required
                defaultValue={product.name === "" ? "" : product.name}
                onChange={e => setName(e.target.value)}
                className={`item__input input ${
                    !isReadOnly ? "input--edit" : ""
                }`}
                placeholder="Nazwa nowego produktu"
            />
            <input
                type="text"
                required
                defaultValue={
                    product.short_description === ""
                        ? ""
                        : product.short_description
                }
                onChange={e => setShort_description(e.target.value)}
                className={`item__input input ${
                    !isReadOnly ? "input--edit" : ""
                }`}
                placeholder="Krótki opis"
            />
            <textarea
                required
                defaultValue={
                    product.long_description === ""
                        ? ""
                        : product.long_description
                }
                onChange={e => setLong_description(e.target.value)}
                className={`item__input input ${
                    !isReadOnly ? "input--edit" : ""
                }`}
                placeholder="Opis"
            />
            <input
                type="number"
                required
                onChange={e => setPrice(e.target.value)}
                defaultValue={product.price === "" ? "" : product.price}
                className={`item__input input ${
                    !isReadOnly ? "input--edit" : ""
                }`}
                placeholder="Cena (w groszach)"
            />

            {!isReadOnly && <small>Cenę należy podać w groszach</small>}

            {!isReadOnly && (
                <React.Fragment>
                    <select
                        required
                        defaultValue={product.type === "" ? "" : product.type}
                        onChange={e => setType(e.target.value)}
                        className={`item__input--option input ${
                            !isReadOnly ? "input--edit" : ""
                        }`}
                    >
                        <option value={0}>Usługa</option>
                        <option value={1}>Produkt</option>
                        <option value={2}>Gastronomia</option>
                    </select>
                    <small>Wybierz typ produktu</small>
                </React.Fragment>
            )}

            {!isReadOnly ? (
                firstItem ? (
                    <Button text={"Dodaj produkt"} />
                ) : (
                    <Button text={"Edytuj produkt"} />
                )
            ) : null}

            {isUpdateCorrect && <small>Poprawnie dodano produkt</small>}
        </form>
    );
};

ProductItem.propTypes = {
    isReadOnly: PropTypes.bool,
    firstItem: PropTypes.bool,
    product: PropTypes.object,
    id: PropTypes.number
};

ProductItem.defaultProps = {
    isReadOnly: false,
    firsItem: false,
    product: {}
};

export default ProductItem;
