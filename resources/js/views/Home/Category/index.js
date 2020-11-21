import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const [categories, setCategories] = useState({});

    useEffect(() => {
        window.API.get("/categories").then(resp => {
            setCategories(resp);
        });
    }, []);

    return (
        <div className="category">
            <Title text="Kategorie" marginY="2.5" />
            <div className="category__box">
                {Object.keys(categories).length > 0 &&
                    categories.data.data.map(({ id, name, slug, url }) => {
                        return (
                            <CategoryItem
                                key={id}
                                name={name}
                                image={url}
                                slug={slug}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Category;
