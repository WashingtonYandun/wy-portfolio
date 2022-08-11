import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import "./Footer.css";

const Footer = () => {
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
            url: "https://github.com/WashingtonYandun",
        },
    ];
    return (
        <>
            <footer>
                <div className="footer__container">
                    <a href="#home" className="footer__title">
                        <h5>WMYM</h5>
                    </a>
                    <div className="footer__socials">
                        {socialNetworks.map((network) => {
                            return (
                                <a
                                    key={network.id}
                                    href={network.url}
                                    description={network.description}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer__social"
                                >
                                    {network.icon}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;