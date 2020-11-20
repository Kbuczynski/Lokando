import React, {useState} from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

const Search = () => {

    const [category, setCategory] = useState("NY");
    const [inputVal, setInputVal] = useState("");

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];

    return (
        <div className={"search"}>
            <span className="search__left">
                <i className="pi pi-search" />
                <InputText value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="Znajdź coś dla siebie" className={"search__input"} />
            </span>

            <Dropdown value={category} onChange={(e) => setCategory(e.target.value)} options={citySelectItems} placeholder="Select a City" className={"search__dropdown"} />

            <button className={"search__btn"}>
                <span>Szukaj</span>
                <i className="pi pi-search" />
            </button>
        </div>
    );
};

export default Search;
