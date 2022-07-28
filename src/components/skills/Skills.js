import { MdDoneAll } from "react-icons/md";
import "./Skills.css";

export const Skills = () => {
    const techSkills = [
        {
            id: 1,
            title: "JavaScript",
        },
        {
            id: 2,
            title: "React",
        },
        {
            id: 3,
            title: "C++",
        },
        {
            id: 4,
            title: "Python",
        },
        {
            id: 5,
            title: "C#",
        },
        {
            id: 6,
            title: "Java",
        },
    ];

    const extraSkills = [
        {
            id: 1,
            title: "Project Management",
        },
        {
            id: 2,
            title: "Git",
        },
        {
            id: 3,
            title: "SQL",
        },
        {
            id: 4,
            title: "npm",
        },
        {
            id: 5,
            title: "Linux",
        },
        {
            id: 6,
            title: "IA",
        },
    ];
    return (
        <>
            <section id="skills">
                <h5>What about my skills</h5>
                <h2>My Skills</h2>

                <div className="container skills__container">
                    <div className="skills__tech">
                        <h3>Tech Skills</h3>
                        <div className="skills__content">
                            {techSkills.map((skill) => {
                                return (
                                    <article
                                        key={skill.id}
                                        className="skills__details"
                                    >
                                        <MdDoneAll className="skills__details-icon" />
                                        <h4>{skill.title}</h4>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <div className="skills__tech">
                        <h3>Extra Skills</h3>
                        <div className="skills__content">
                            {extraSkills.map((skill) => {
                                return (
                                    <article
                                        key={skill.id}
                                        className="skills__details"
                                    >
                                        <MdDoneAll className="skills__details-icon" />
                                        <h4>{skill.title}</h4>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
