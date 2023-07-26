import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchGitHubProjects = async () => {
        try {
            const username = "WashingtonYandun"; // Reemplaza con tu nombre de usuario de GitHub
            const response = await fetch(
                `https://api.github.com/users/${username}/repos`
            );
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            } else {
                console.error("Error fetching GitHub projects:", response);
            }
        } catch (error) {
            console.error("Error fetching GitHub projects:", error);
        }
    };

    useEffect(() => {
        fetchGitHubProjects();
    }, []);

    const goToNextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const goToPreviousProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToProject = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="portfolio">
            <h5>Most Important projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <div className="slider">
                    {projects.map((project, index) => (
                        <span
                            key={project.id}
                            className={`slider-dot ${
                                index === currentIndex ? "active" : ""
                            }`}
                            onClick={() => goToProject(index)}
                        />
                    ))}
                </div>

                <article className="portfolio__project">
                    <div className="project__container">
                        <div className="project__left">
                            <div className="project__name">
                                <span>Project Name</span>
                                {projects[currentIndex]?.name ||
                                    "Fallback Project Title"}
                            </div>

                            <div className="project__description">
                                <span>Description</span>
                                {projects[currentIndex]?.description ||
                                    "No description yet"}
                            </div>

                            <div className="project__lang">
                                <span>Languaje</span>
                                {projects[currentIndex]?.language ||
                                    "No language yet"}
                            </div>
                        </div>

                        <div className="project__right">
                            <div className="project__dates">
                                <span>Dates</span>
                                <div className="project__dates-container">
                                    <div className="project__date">
                                        {projects[currentIndex]?.pushed_at ||
                                            "No pushed"}
                                    </div>

                                    <div className="project__date">
                                        {projects[currentIndex]?.updated_at ||
                                            "No update"}
                                    </div>
                                </div>
                            </div>

                            <div className="project__topics">
                                {projects[currentIndex]?.topics.map((topic) => {
                                    return (
                                        <span
                                            class="project__topic"
                                            key={new Date().getTime()}
                                        >
                                            {topic}
                                        </span>
                                    );
                                }) || "No topics yet"}
                            </div>

                            <div className="project__link">
                                <a
                                    href={projects[currentIndex]?.html_url}
                                    className="btn btn-primary"
                                >
                                    Watch it
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="slider-controls">
                    <span
                        className="material-symbols-outlined slider__arrow"
                        onClick={goToPreviousProject}
                    >
                        arrow_back
                    </span>

                    <span
                        className="material-symbols-outlined slider__arrow"
                        onClick={goToNextProject}
                    >
                        arrow_forward
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
