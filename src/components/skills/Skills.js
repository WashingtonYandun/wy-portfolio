import { MdDoneAll } from "react-icons/md";
import "./Skills.css";

export const Skills = () => {
    return (
        <>
            <section id="skills">
                <h5>What about my skills</h5>
                <h2>My Skills</h2>

                <div className="container skills__container">
                    <div className="skills__tech">
                        <h3>Tech Skills</h3>
                        <div className="skills__content">
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>JavaScript</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>React.js</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>C++</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Python</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Java</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>C#</h4>
                            </article>
                        </div>
                    </div>

                    <div className="skills__no-tech">
                        <h3>Extra Skills</h3>
                        <div className="skills__content">
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Project Managment</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Git/Github</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>SQL/MongoDB</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>npm/pip</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Linux Essentials</h4>
                            </article>
                            <article className="skills__details">
                                <MdDoneAll className="skills__details-icon" />
                                <h4>Automating Tasks</h4>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
