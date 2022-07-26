import { MdDoneAll } from "react-icons/md";
import "./Experience.css";

export const Experience = () => {
    return (
        <>
            <section id="experience">
                <h5>What is my Experience</h5>
                <h2>Jobs I had</h2>
                <div className="container experience__container">
                    <article className="experience">
                        <div className="experience__head">
                            <h3>Project Managment</h3>
                        </div>

                        <ul className="experience__list">
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Project Managment trainee</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                        </ul>
                    </article>

                    <article className="experience">
                        <div className="experience__head">
                            <h3>Artificial Intelligence</h3>
                        </div>

                        <ul className="experience__list">
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                        </ul>
                    </article>

                    <article className="experience">
                        <div className="experience__head">
                            <h3>Web Development</h3>
                        </div>

                        <ul className="experience__list">
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                            <li>
                                <MdDoneAll className="experience__icon" />
                                <p>Looking for more</p>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Experience;
