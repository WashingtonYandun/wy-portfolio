import React from "react";
import Cbtn from "./Cbtn";
import HeaderSocials from "./HeaderSocials";

import "./Header.css";

import ME from "../../assets/ascii wmym.jpg";

export const Header = () => {
    return (
        <>
            <header>
                <div className="container header__container">
                    <h5>Hello there</h5>
                    <h1>I'm Washington Yandun</h1>
                    <h5 className="text-light">Junior Developer</h5>
                    <Cbtn />
                    <HeaderSocials />
                </div>

                <div className="wmym">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scrolldown">
                    Scroll
                </a>
            </header>
        </>
    );
};

export default Header;
