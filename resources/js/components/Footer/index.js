import React from "react";
import { Link } from "react-router-dom";
import FooterCategoryItem from "./FooterCategoryItem";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

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

const Footer = () => {
    const handleScroll = () =>
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    return (
        <div className="wrapper--blue">
            <div className="container">
                <footer className="footer">
                    <div className="footer__category">
                        <h4>Kategorie</h4>
                        <div className="category__box">
                            {categories.map(({ name }) => (
                                <FooterCategoryItem name={name} key={name} />
                            ))}
                        </div>
                    </div>

                    <nav className="footer__menu">
                        <Link to={`/utworz-konto?view=login`}>Logowanie</Link>
                        <Link to={`/utworz-konto?view=register`}>
                            Rejestracja
                        </Link>
                        <Link to={`/polityka-prywatnosci`}>
                            Polityka prywatności
                        </Link>
                        <Link to={`/rodo`}>RODO</Link>
                    </nav>

                    <Link
                        to="/"
                        className="footer__logo"
                        title="Strona główna"
                        onClick={handleScroll}
                    >
                        <img
                            src="assets/images/logo/lokando-logo-white.svg"
                            alt="Lokando STARGARD"
                        />
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
