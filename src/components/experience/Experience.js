import "./Experience.css";

export const Experience = () => {
    const typeOfExperience = [
        {
            id: 1,
            title: "Inpsercom: Project Management trainee",
            list: {
                1: "ISO 9001:2015 documentation",
                2: "Excel reporting and data analysis about software projects",
                3: "Project Managment, graphics creation and analysis, process Automation",
            },
        },
        {
            id: 2,
            title: "Inpsercom: Backend Developer trainee",
            list: {
                1: "Apis Creation in .Net 4.7.2",
                2: "Apis Integration (WhatsApp, Artificial intelligence)",
                3: "Solution recommendations about software problems.",
            },
        },
        {
            id: 3,
            title: "UDLA: Software Developer trainee",
            list: {
                1: "Windows Service processor creation.",
                2: "Apis creation and integration (Udemy Business) .Net 4.6.x and 4.7.x",
                3: "GUI creation for university virtual platforms.",
            },
        },
    ];

    return (
        <>
            <section id="experience">
                <h5>What is my Experience</h5>
                <h2>Work experiences I have had</h2>
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
