import React from "react";
import Title from "../../../components/Title";
import CategoryItem from "./CategoryItem";

const categories = [
    {
        name: "Gastronomia",
        image: "assets/images/category/gastronomia.jpg"
    },
    {
        name: "Zakupy",
        image: "assets/images/category/zakupy.jpg"
    },
    {
        name: "Zdrowe i urody",
        image: "assets/images/category/zdrowie-i-uroda.jpg"
    },
    {
        name: "Wyposażenie",
        image: "assets/images/category/wyposazenie.jpg"
    },
    {
        name: "Edukacja",
        image: "assets/images/category/edukacja.jpg"
    },
    {
        name: "Transport",
        image: "assets/images/category/transport.jpg"
    },
    {
        name: "Elektronika",
        image: "assets/images/category/elektronika.jpg"
    },
    {
        name: "Zwierzęta",
        image: "assets/images/category/zwierzeta.jpg"
    },
    {
        name: "Sport i hobby",
        image: "assets/images/category/sport-i-hobby.jpg"
    },
    {
        name: "Inne usługi",
        image: "assets/images/category/inne-uslugi.jpg"
    }
];

const Category = () => {
    return (
        <div className="category">
            <Title text="Kategorie" marginY="2.5" />
            <div className="category__box">
                {categories.map(({ name, image }, index) => (
                    <CategoryItem key={index} name={name} image={image} />
                ))}
            </div>
        </div>
    );
};

export default Category;
