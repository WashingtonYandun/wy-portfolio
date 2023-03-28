import { MdDoneAll } from "react-icons/md";
import "./Skills.css";

export const Skills = () => {
    const techSkills = [
        {
            id: 1,
            title: "Backend: C#",
        },
        {
            id: 2,
            title: "Frontend: React",
        },
        {
            id: 3,
            title: "AI: Python (Tenssoflow)",
        },
        {
            id: 4,
            title: "TypeScript",
        },
        {
            id: 5,
            title: "DB: SQL Server",
        },
        {
            id: 6,
            title: "Java",
        },
    ];

    const extraSkills = [
        {
            id: 10,
            title: "Project Management",
        },
        {
            id: 20,
            title: "Git",
        },
        {
            id: 30,
            title: "Excel",
        },
        {
            id: 40,
            title: "Visual Studio",
        },
        {
            id: 50,
            title: "Linux",
        },
        {
            id: 60,
            title: "TFS",
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
