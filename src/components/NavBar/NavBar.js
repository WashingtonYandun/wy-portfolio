import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import "./NavBar.css";

const NavBar = () => {
    // this component have to be refactored

    const [activeNav, setActiveNav] = useState("#");

    return (
        <>
            <nav>
                <a
                    href="#home"
                    onClick={() => setActiveNav("#home")}
                    className={activeNav === "#home" ? "active" : ""}
                >
                    <AiOutlineHome />
                </a>
                <a
                    href="#about"
                    onClick={() => setActiveNav("#about")}
                    className={activeNav === "#about" ? "active" : ""}
                >
                    <SiAboutdotme />
                </a>
                <a
                    href="#skills"
                    onClick={() => setActiveNav("#skills")}
                    className={activeNav === "#skills" ? "active" : ""}
                >
                    <SiAboutdotme />
                </a>
                <a
                    href="#portfolio"
                    onClick={() => setActiveNav("#portfolio")}
                    className={activeNav === "#portfolio" ? "active" : ""}
                >
                    <AiOutlineBranches />
                </a>
                <a
                    href="#experience"
                    onClick={() => setActiveNav("#experience")}
                    className={activeNav === "#experience" ? "active" : ""}
                >
                    <AiOutlineRise />
                </a>
                <a
                    href="#contact"
                    onClick={() => setActiveNav("#contact")}
                    className={activeNav === "#contact" ? "active" : ""}
                >
                    <AiOutlineContacts />
                </a>
            </nav>
        </>
    );
};

export default NavBar;
