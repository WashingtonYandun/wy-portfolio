import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const HeaderSocials = () => {
    return (
        <>
            <div className="header__socials">
                <a
                    href="https://github.com/WashingtonYandun"
                    target="_blank"
                    rel="noreferrer"
                >
                    <VscGithub />
                </a>

                <a
                    href="https://github.com/WashingtonYandun"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiOutlineLinkedin />
                </a>
            </div>
        </>
    );
};

export default HeaderSocials;
