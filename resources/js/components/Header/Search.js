import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

const Search = (props) => {

    const citySelectItems = [
        {label: 'Gastronomia', value: 'gastronomia'},
        {label: 'Zakupy', value: 'zakupy'},
        {label: 'Zdrowie i uroda', value: 'zdrowie'},
        {label: 'Wyposażenie', value: 'wyposazenie'},
        {label: 'Edukacja', value: 'edukacja'},
        {label: 'Transport', value: 'transport'},
        {label: 'Elektronika', value: 'elektronika'},
        {label: 'Zwierzęta', value: 'zwierzeta'},
        {label: 'Sport i Hobby', value: 'sport'}
    ];

    return (
        <div className={`search ${props.mobile ? 'search--mobile' : ''}`}>
            <span className="search__left">
                <i className="pi pi-search" />
                <InputText value={props.inputVal} onChange={(e) => props.setInputVal(e.target.value)} placeholder="Znajdź coś dla siebie" className={"search__input"} />
            </span>

            <Dropdown value={props.category} onChange={(e) => props.setCategory(e.target.value)} options={citySelectItems} placeholder="Kategoria" className={"search__dropdown"} />

            <button className={"search__btn search__btn--active"} onClick={() => props.onSearch()}>
                <span>Szukaj</span>
                <i className="pi pi-search" />
            </button>
        </div>
    );
};

Search.proptypes = {
    mobile: PropTypes.bool,
    onSearch: PropTypes.func,
    category: PropTypes.string,
    inputVal: PropTypes.string,
    setInputVal: PropTypes.func,
    setCategory: PropTypes.func,
};

export default Search;
