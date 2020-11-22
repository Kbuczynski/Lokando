import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

const Search = (props) => {

    const categories = [
        {label: 'Kategorie', value: ''},
        {label: 'Gastronomia', value: 1},
        {label: 'Zakupy', value: 2},
        {label: 'Zdrowie i uroda', value: 3},
        {label: 'Wyposażenie', value: 4},
        {label: 'Edukacja', value: 5},
        {label: 'Transport', value: 6},
        {label: 'Elektronika', value: 7},
        {label: 'Zwierzęta', value: 8},
        {label: 'Sport i Hobby', value: 9},
        {label: 'Inne Usługi', value: 10}
    ];

    return (
        <div className={`search ${props.mobile ? 'search--mobile' : ''}`}>
            <span className="search__left">
                <i className="pi pi-search" />
                <InputText value={props.inputVal} onChange={(e) => props.setInputVal(e.target.value)} placeholder="Znajdź coś dla siebie" className={"search__input"} />
            </span>

            <Dropdown value={props.category} onChange={(e) => props.setCategory(e.target.value)} options={categories} placeholder="Kategoria" className={"search__dropdown"} />

            <button className={"search__btn search__btn--active"} onClick={() => props.onSearch()}>
                <span>Szukaj</span>
                <i className="pi pi-search" />
            </button>
        </div>
    );
};

Search.propTypes = {
    mobile: PropTypes.bool,
    onSearch: PropTypes.func,
    category: PropTypes.string,
    inputVal: PropTypes.string,
    setInputVal: PropTypes.func,
    setCategory: PropTypes.func,
};

export default Search;
