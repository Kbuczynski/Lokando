import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "../../../../../node_modules/react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "../../../../../node_modules/react-awesome-slider/src/styled/fall-animation/fall-animation.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeSlider = () => {
    return (
        <div className="homeSlider">
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                cssModule={AwesomeSliderStyles}
                className="homeSlider__slider"
                bullets={false}
                organicArrows={true}
                animation="fallAnimation"
            >
                <div
                    data-src="assets/images/slider-home/test.jpg"
                    className="slider__item"
                ></div>
                <div
                    data-src="assets/images/slider-home/test.jpg"
                    className="slider__item"
                ></div>
                <div
                    data-src="assets/images/slider-home/test.jpg"
                    className="slider__item"
                ></div>
            </AutoplaySlider>
        </div>
    );
};

export default HomeSlider;
