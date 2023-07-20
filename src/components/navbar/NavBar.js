import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineBranches } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineLaptop } from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <nav>
                <a href="#home">
                    <AiOutlineHome />
                </a>
                <a href="#about">
                    <SiAboutdotme />
                </a>
                <a href="#skills">
                    <AiOutlineLaptop />
                </a>
                <a href="#portfolio">
                    <AiOutlineBranches />
                </a>
                <a href="#experience">
                    <AiOutlineRise />
                </a>
                <a href="#contact">
                    <AiOutlineContacts />
                </a>
            </nav>
        </>
    );
};

export default NavBar;
