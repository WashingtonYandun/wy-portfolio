import React, { useState, useEffect } from "react";
import { VscGithub } from "react-icons/vsc";
import "./Portfolio.css";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchGitHubProjects = async () => {
        try {
            const username = "WashingtonYandun";
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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
    };

    return (
        <section id="portfolio">
            <h5>Projects on GitHub</h5>
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
                        ></span>
                    ))}
                </div>

                <article className="portfolio__project">
                    <div className="project__container">
                        <div className="project__left project__part">
                            <div className="project__name flex-col">
                                <span className="project-desc">
                                    Project Name
                                </span>
                                <span className="project-info">
                                    {projects[currentIndex]?.name ||
                                        "Fallback Project Title"}
                                </span>
                            </div>

                            <div className="project__description flex-col">
                                <span className="project-desc">
                                    Description
                                </span>
                                <span className="project-info">
                                    {projects[currentIndex]?.description ||
                                        "No description yet"}
                                </span>
                            </div>

                            <div className="project__topics flex-col">
                                <span className="project-desc">Topics</span>
                                <span className="flex-row row-chain">
                                    {projects[currentIndex]?.topics.map(
                                        (topic, index) => (
                                            <span
                                                className="project-info project__topic"
                                                key={index}
                                            >
                                                {topic}
                                            </span>
                                        )
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="project__right project__part">
                            <div className="project__dates-container">
                                <div className="project__date flex-col">
                                    <span className="project-desc">
                                        Updated
                                    </span>
                                    <span className="project-info">
                                        {projects[currentIndex]?.updated_at
                                            ? formatDate(
                                                  projects[currentIndex]
                                                      ?.updated_at
                                              )
                                            : "No update"}
                                    </span>
                                </div>
                            </div>

                            <div className="project__lang flex-col">
                                <span className="project-desc">Languaje</span>
                                <span className="project-info project__topic">
                                    {projects[currentIndex]?.language ||
                                        "No language yet"}
                                </span>
                            </div>

                            <div className="project__link">
                                <a
                                    key={currentIndex}
                                    href={projects[currentIndex]?.html_url}
                                    description="link to project"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer__social"
                                >
                                    <span className="link-to">Go to</span>
                                    {<VscGithub />}
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="slider-controls">
                    <span
                        className="material-symbols-outlined slider__arrow slider__arrow-left"
                        onClick={goToPreviousProject}
                    >
                        arrow_back
                    </span>

                    <span
                        className="material-symbols-outlined slider__arrow slider__arrow-right"
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
