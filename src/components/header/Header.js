import Cbtn from "./Cbtn";
import HeaderSocials from "./HeaderSocials";
import { FiArrowDown } from "react-icons/fi";

import "./Header.css";
import ME from "../../assets/ascii wmym.jpg";

export const Header = () => {
    return (
        <>
            <header id="home">
                <div className="container header__container">
                    <h5>Hello there</h5>
                    <h1 className="header__console">I'm Washington Yandun</h1>
                    <h5 className="text-light">Software Enginering Student</h5>
                    <Cbtn />
                    <HeaderSocials />
                    <a href="#contact" className="scroll__down">
                        <FiArrowDown />
                        <FiArrowDown />
                        <FiArrowDown />
                    </a>
                    <div className="wmym">
                        <img src={ME} alt="me" className="me" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
