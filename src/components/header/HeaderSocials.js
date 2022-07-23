import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <>
            <div className="header__socials">
                <a
                    href="https://github.com/WashingtonYandun"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>

                <a
                    href="https://github.com/WashingtonYandun"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </>
    );
};

export default HeaderSocials;
