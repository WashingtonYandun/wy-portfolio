import { MdOutlineWorkOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { SiFuturelearn } from "react-icons/si";

import ME2 from "../../assets/ascii_wmym2.jpeg";
import "./About.css";

const About = () => {
    const littleCards = [
        {
            id: 1,
            title: "Work experience",
            icon: <MdOutlineWorkOutline className="about__cards-icon" />,
            desciption: "1+ Year",
        },
        {
            id: 2,
            title: "Courses",
            icon: <SiFuturelearn className="about__cards-icon" />,
            desciption: "10+ completed",
        },
        {
            id: 3,
            title: "Projects on Github",
            icon: <BsCodeSlash className="about__cards-icon" />,
            desciption: "40+ repos",
        },
    ];

    return (
        <>
            <section id="about">
                <h5>Some</h5>
                <h2>About me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <img src={ME2} alt="me" />
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            {littleCards.map((card) => {
                                return (
                                    <article
                                        key={card.id}
                                        className="about__card"
                                    >
                                        {card.icon}
                                        <h5>{card.title}</h5>
                                        <small>{card.desciption}</small>
                                    </article>
                                );
                            })}
                        </div>
                        <div className="about__description">
                            <p>
                                I am a Software Engineering student, who loves
                                his degree. The technologies in which most I
                                highlight are .Net, Python, JavaScript, React and
                                Java, I am a responsible and committed person
                                in his work, besides that I am in constant
                                learning since I love to learn as much as I can.
                            </p>

                            <a href="#contact" className="btn btn-primary">
                                Talk to me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
