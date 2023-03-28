import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

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
            name: "Whatsapp",
            value: "(+593) 099 925 6581",
            icon: <AiOutlineWhatsApp className="contact__method-icon" />,
            link: "https://api.whatsapp.com/send?phone=593999256581",
            description: "Send me a dm",
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
