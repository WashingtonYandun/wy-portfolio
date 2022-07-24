import { MdOutlineWorkOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { SiFuturelearn } from "react-icons/si";

import ME2 from "../../assets/ascii wmym2.jpeg";
import "./About.css";

const About = () => {
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
                            <article className="about__card">
                                <MdOutlineWorkOutline className="about__cards-icon" />
                                <h5>Experience</h5>
                                <small>2+ Months</small>
                            </article>
                            <article className="about__card">
                                <SiFuturelearn className="about__cards-icon" />
                                <h5>Courses</h5>
                                <small>5+ Done</small>
                            </article>
                            <article className="about__card">
                                <BsCodeSlash className="about__cards-icon" />
                                <h5>Projects</h5>
                                <small>40+ Repos</small>
                            </article>
                        </div>
                        <p>
                            I am a Software Engineering student, who loves his
                            degree. The technologies in which most I highlight
                            are Java, C#, JavaScript, React and Python, I am a
                            responsible and committed person in his work,
                            besides that I am in constant learning since I love
                            to learn and work.
                        </p>

                        <a href="#contact" className="btn btn-primary">
                            Talk to me
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
