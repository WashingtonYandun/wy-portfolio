import React from "react";
import CV from "../../assets/washington_yandun__cv.pdf";

const Cbtn = () => {
    return (
        <div className="cbtn">
            <a href={CV} download className="btn btn-primary">
                Download CV
            </a>
            <a href="#contact" className="btn">
                Contact me
            </a>
        </div>
    );
};

export default Cbtn;
