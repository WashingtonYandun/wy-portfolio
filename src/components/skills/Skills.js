import { MdDoneAll } from "react-icons/md";
import "./Skills.css";

export const Skills = () => {
    const techSkills = [
        {
            id: 1,
            title: "Backend: .Net (C#), Python, Java Springboot, Node.js",
        },
        {
            id: 2,
            title: "Frontend: React, Html, Css, JavaScript, SASS, Blazor",
        },
        {
            id: 3,
            title: "Artificial Intelligence: Python, C++, Cuda",
        },
        {
            id: 4,
            title: "Database: SQL server, Mongo",
        },
        {
            id: 5,
            title: "Data Analysis: Python, Excel, Power Bi",
        },
        {
            id: 6,
            title: "Models and Simulation: Python, Jupyter",
        },
    ];

    const extraSkills = [
        {
            id: 10,
            title: "Software architecture patterns and architecture patterns",
        },
        {
            id: 20,
            title: "Git, Team Foundation Server, Github",
        },
        {
            id: 30,
            title: "Design Patterns and SOLID Principles",
        },
        {
            id: 40,
            title: "Project Management using Zoho",
        },
        {
            id: 50,
            title: "UML diagrams with PlantUML",
        },
        {
            id: 60,
            title: "Scrum, Testing with JMeter",
        },
    ];
    return (
        <>
            <section id="skills">
                <h5>Software Engineering skills</h5>
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
                                        <h5 className="skill__title">
                                            {skill.title}
                                        </h5>
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
                                        <h5 className="skill__title">
                                            {skill.title}
                                        </h5>
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
