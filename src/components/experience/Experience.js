import { MdDoneAll } from "react-icons/md";
import "./Experience.css";

export const Experience = () => {
    const typeOfExperience = [
        {
            id: 1,
            title: "Inpsercom: Project Management trainee",
            list: {
                1: "ISO 9001:2015 documentation",
                2: "Excel reporting and analysis",
                3: "Solution recommendations",
            },
        },
        {
            id: 2,
            title: "Inpsercom: Backend Developer trainee",
            list: {
                1: "Apis Creation",
                2: "Apis Integration",
                3: "Solution recommendations",
            },
        },
        {
            id: 3,
            title: "UDLA: Software Developer trainee",
            list: {
                1: "Windows Service processor creation",
                2: "Apis Creation",
                3: "Apis Integration",
            },
        },
    ];

    return (
        <>
            <section id="experience">
                <h5>What is my Experience</h5>
                <h2>Jobs I had</h2>
                <div className="container experience__container">
                    {typeOfExperience.map((type) => {
                        return (
                            <article key={type.id} className="experience">
                                <div className="experience__head">
                                    <h3>{type.title}</h3>
                                </div>
                                <ul className="experience__list">
                                    {Object.keys(type.list).map((key) => {
                                        return (
                                            <li key={key}>
                                                <MdDoneAll className="experience__icon" />
                                                <p>{type.list[key]}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Experience;
