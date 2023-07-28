import Cbtn from "./Cbtn";
import HeaderSocials from "./HeaderSocials";
import { FiArrowDown } from "react-icons/fi";

import "./Header.css";
import ME from "../../assets/ascii_wmym.jpg";

export const Header = () => {
    return (
        <>
            <header id="home">
                <div className="container header__container">
                    <div className="header__content">
                        <h5>Hello there! &#10024;</h5>
                        <h1 className="header__console">
                            I'm Washington Yandun
                        </h1>
                        <h5 className="text-light">
                            Software Engineering Student
                        </h5>
                        <Cbtn />
                        <div className="wmym">
                            <img src={ME} alt="me" className="me" />
                        </div>
                    </div>

                    <div className="movers">
                        <HeaderSocials />
                        <a href="#contact" className="scroll__down">
                            <FiArrowDown />
                            <FiArrowDown />
                            <FiArrowDown />
                            <FiArrowDown />
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
