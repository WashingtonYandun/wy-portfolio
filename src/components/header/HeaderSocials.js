import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

const HeaderSocials = () => {
    const socialNetworks = [
        {
            id: 1,
            description: "GitHub",
            icon: <VscGithub />,
            url: "https://github.com/WashingtonYandun",
        },
        {
            id: 2,
            description: "LinkedIn",
            icon: <AiOutlineLinkedin />,
            url: "https://ec.linkedin.com/in/washington-yandun-3a95b2226",
        },
    ];

    return (
        <>
            <div className="header__socials">
                {socialNetworks.map((network) => {
                    return (
                        <a
                            key={network.id}
                            href={network.url}
                            description={network.description}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {network.icon}
                        </a>
                    );
                })}
            </div>
        </>
    );
};

export default HeaderSocials;
