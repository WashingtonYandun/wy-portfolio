import "./Skills.css";

export const Skills = () => {
    return (
        <>
            <section id="skills">
                <h5>What about my skills</h5>
                <h2>My Skills</h2>

                <div className="container skills__container">
                    <div className="skills__tech">
                        <h3>Technical Skills</h3>
                        <div className="skills__content"></div>
                    </div>
                    <div className="skills__no-tech">
                        <h3>No Technical Skills</h3>
                        <div className="skills__content"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
