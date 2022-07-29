import { MdDoneAll } from "react-icons/md";
import "./Experience.css";

export const Experience = () => {
    const typeOfExperience = [
        {
            id: 1,
            title: "Project Management",
            list: {
                1: "Project Management",
                2: "Project Management",
                3: "Project Management",
            },
        },
        {
            id: 2,
            title: "Artificial Intelligence",
            list: {
                1: "Looking for more",
                2: "Looking for more",
                3: "Looking for more",
            },
        },
        {
            id: 3,
            title: "Web Development",
            list: {
                1: "Looking for more",
                2: "Looking for more",
                3: "Looking for more",
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
