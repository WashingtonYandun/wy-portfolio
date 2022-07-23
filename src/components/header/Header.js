import React from "react";
import Cbtn from "./Cbtn";
import HeaderSocials from "./HeaderSocials";
import { FiArrowDown } from "react-icons/fi";

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
                    <div className="wmym">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className="scroll__down">
                        <FiArrowDown />
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
