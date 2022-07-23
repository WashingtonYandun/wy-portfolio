import React from "react";
import CV from "../../assets/WASHINGTON_YANDUN_CV.pdf";

const Cbtn = () => {
    return (
        <div className="cbtn">
            <a href={CV} download className="btn btn-primary">
                Download Resume
            </a>
            <a href="#contact" className="btn">
                Contact me
            </a>
        </div>
    );
};

export default Cbtn;
