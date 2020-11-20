// import React, { useEffect, useState } from "react";

// const FormSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const handleSlide = (indexBeforeSlide, indexCurrentSlide) => {
//         const slides = [...document.querySelectorAll(".sliderForm__item")];
//         const bullets = [...document.querySelectorAll(".control__bullet")];

//         slides[indexBeforeSlide].classList.remove("sliderForm__item--show");
//         bullets[indexBeforeSlide].classList.remove("control__bullet--show");

//         slides[indexCurrentSlide].classList.add("sliderForm__item--show");
//         bullets[indexCurrentSlide].classList.add("control__bullet--show");
//     };

//     useEffect(() => {
//         const handleAutoSlider = () => {
//             const slides = [...document.querySelectorAll(".sliderForm__item")];
//             const indexBeforeSlide = slides.indexOf(
//                 document.querySelector(
//                     ".sliderForm__item.sliderForm__item--show"
//                 )
//             );
//             let indexToShow = currentSlide;

//             if (indexBeforeSlide === slides.length - 1) indexToShow = 0;
//             else indexToShow++;

//             handleSlide(indexBeforeSlide, indexToShow);
//             setCurrentSlide(indexToShow);
//         };

//         const autoSlider = setTimeout(handleAutoSlider, 2000);

//         return () => {
//             clearTimeout(autoSlider);
//         };
//     }, [currentSlide]);

//     const handleControl = e => {
//         const target = e.target;
//         const bullets = [...document.querySelectorAll(".control__bullet")];

//         if (target.classList.contains("control__bullet")) {
//             if (target.classList.contains("control__bullet--show")) return;
//             else setCurrentSlide(bullets.indexOf(target));
//         }
//     };

//     return (
//         <div className="sliderForm">
//             <div className="sliderForm__item sliderForm__item--show">
//                 <p className="item__text">Bezpieczeństwo połączone z wygodą</p>
//                 <div className="item__image">
//                     <div className="image__svg"></div>
//                 </div>
//             </div>

//             <div className="sliderForm__item">
//                 <p className="item__text">Wsparcie dla lokalnych biznesów</p>
//                 <div className="item__image">
//                     <div className="image__svg"></div>
//                 </div>
//             </div>

//             <div className="sliderForm__item">
//                 <p className="item__text">Możliwość dostawy bezkontaktowej</p>
//                 <div className="item__image">
//                     <div className="image__svg"></div>
//                 </div>
//             </div>

//             <div className="sliderForm__control" onClick={handleControl}>
//                 <div className="control__bullet control__bullet--show"></div>
//                 <div className="control__bullet"></div>
//                 <div className="control__bullet"></div>
//             </div>
//         </div>
//     );
// };

// export default FormSlider;

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "../../../../../../node_modules/react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "../../../../../../node_modules/react-awesome-slider/src/styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const FormSlider = () => {
    return (
        <div className="sliderForm">
            <AutoplaySlider
                play={false}
                cancelOnInteraction={false}
                interval={5000}
                cssModule={AwesomeSliderStyles}
                className="sliderForm__slider"
                bullets={true}
                organicArrows={false}
            >
                <div
                    data-src="assets/images/slide-one.png"
                    className="slider__item"
                >
                    Bezpieczeństwo połączone z wygodą
                </div>
                <div
                    data-src="assets/images/slide-two.png"
                    className="slider__item"
                >
                    Wsparcie dla lokalnych biznesów
                </div>
                <div
                    data-src="assets/images/slide-three.png"
                    className="slider__item"
                >
                    Możliwość dostawy bezkontaktowej
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default FormSlider;
