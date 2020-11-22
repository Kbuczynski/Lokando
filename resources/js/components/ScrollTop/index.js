import React, { useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const BREAKPOINT = 400;

const ScrollTop = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () =>
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    window.addEventListener("scroll", () => {
        setOffsetY(window.scrollY);
    });

    return (
        <>
            {offsetY > BREAKPOINT && (
                <div className="scroll" onClick={handleScroll}>
                    <span className="scroll__arrow"></span>
                </div>
            )}
        </>
    );
};

export default ScrollTop;
