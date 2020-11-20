import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "../../../../../../node_modules/react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "../../../../../../node_modules/react-awesome-slider/src/styles";
import AnimationStyles from "../../../../../../node_modules/react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const FormSlider = () => {
    return (
        <div className="sliderForm">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                cssModule={AwesomeSliderStyles}
                className="sliderForm__slider"
                bullets={true}
                organicArrows={false}
                animation="foldOutAnimation"
            >
                <div
                    data-src="assets/images/slider-register/slide-one.png"
                    className="slider__item"
                >
                    Bezpieczeństwo połączone z wygodą
                </div>
                <div
                    data-src="assets/images/slider-register/slide-two.png"
                    className="slider__item"
                >
                    Wsparcie dla lokalnych biznesów
                </div>
                <div
                    data-src="assets/images/slider-register/slide-three.png"
                    className="slider__item"
                >
                    Możliwość dostawy bezkontaktowej
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default FormSlider;
