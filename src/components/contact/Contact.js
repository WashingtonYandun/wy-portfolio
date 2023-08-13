import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

import "./Contact.css";

const Contact = () => {
    const contactMethod = [
        {
            id: 1,
            name: "Email",
            value: "washington.yandun@udla.edu.ec",
            icon: <AiOutlineMail className="contact__method-icon" />,
            link: "mailto:washington.yandun@udla.edu.ec",
            description: "Email me",
        },
        {
            id: 2,
            name: "Linkedin",
            value: "Washington Yandun",
            icon: <AiOutlineLinkedin className="contact__method-icon" />,
            link: "https://www.linkedin.com/in/washington-yandun-3a95b2226/",
            description: "Connect with me",
        },
        {
            id: 3,
            name: "GitHub",
            value: "washingtonYandun",
            icon: <VscGithub className="contact__method-icon" />,
            link: "https://github.com/WashingtonYandun",
            description: "Let's code",
        },
    ];

    return (
        <>
            <section id="contact">
                <h5>Just Message</h5>
                <h2>Contact Me</h2>
                <div className="container contact__container">
                    <div className="contact__methods">
                        {contactMethod.map((method) => {
                            return (
                                <article
                                    key={method.id}
                                    className="contact__method"
                                >
                                    {method.icon}
                                    <h4>{method.name}</h4>
                                    <h5>{method.value}</h5>
                                    <a
                                        href={method.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {method.description}
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
