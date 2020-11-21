import React from 'react';
import Title from "../../components/Title";
import PropTypes from 'prop-types';

import {Dropdown} from 'primereact/dropdown';
import {Slider} from 'primereact/slider';
import {InputText} from 'primereact/inputtext';

const MAX_SLIDER_VALUE = 20000;

const Filters = (props) => {

    const categories = [
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

    const status = [
        {label: 'Pokaż wszystko', value: 'wszystkie'},
        {label: 'Dostępne', value: 'dostepne'},
        {label: 'Promocja', value: 'promocja'},
        {label: 'Dostawa wkrótce', value: 'dostawa_wkrotce'},
    ];

    const sort = [
        {label: 'Domyślnie', value: 'domyslnie'},
        {label: 'Najtańsze', value: 'najtansze'},
        {label: 'Najdroższe', value: 'najdrozsze'},
        {label: 'Najlepiej oceniane', value: 'naj_ocena'},
    ];

    const setPriceRange = (val, index) => {
        if (val > MAX_SLIDER_VALUE) return;

        if (index === 0) {
            props.setPriceRange([val, props.priceRange[1]]);
        } else {
            props.setPriceRange([props.priceRange[0], val]);
        }
    };

    return (
        <div className={"filters"}>
            <div className={"container"}>
                <Title text={"Filtry"} position={"left"}/>

                <div className={"filters__inputs"}>
                    <div className={"filters__price"}>
                        <div className={"filters__slider"}>
                            <span>Cena: </span>
                            <Slider value={props.priceRange} onChange={(e) => props.setPriceRange(e.value)} range
                                    min={1}
                                    max={MAX_SLIDER_VALUE} step={1}/>
                        </div>
                        <div className={"filters__sliderInputs"}>
                            <InputText value={props.priceRange[0]}
                                       onChange={(e) => setPriceRange(e.target.value, 0)}/>
                            <span>-</span>
                            <InputText value={props.priceRange[1]}
                                       onChange={(e) => setPriceRange(e.target.value, 1)}/>
                        </div>
                    </div>
                    <div className={"filters__dropdowns"}>
                        <Dropdown value={props.category} options={categories}
                                  onChange={(e) => props.setCategory(e.value)}
                                  placeholder="Kategoria" className={"filters__input"}/>
                        <Dropdown value={props.status} options={status} onChange={(e) => props.setStatus(e.value)}
                                  placeholder="Status" className={"filters__input"}/>
                    </div>
                </div>

                <div className={"filters__sorters"}>
                    <div className={"filters__sort"}>
                        <span>Sortuj: </span>
                        <Dropdown value={props.sort} options={sort} onChange={(e) => props.setSort(e.value)}
                                  className={"filters__sortDropdown"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Filters.propTypes = {
    category: PropTypes.string,
    priceRange: PropTypes.array,
    status: PropTypes.string,
    sort: PropTypes.string,
    setCategory: PropTypes.func,
    setPriceRange: PropTypes.func,
    setStatus: PropTypes.func,
    setSort: PropTypes.func,
};

export default Filters;
