import "./Portfolio.css";

const Portfolio = () => {
    // using an array of objects to display the portfolio projects
    const projects = [
        {
            id: 1,
            title: "Farenheit Celsius AI",
            image: "https://raw.githubusercontent.com/WashingtonYandun/CelciusAndFahrenheit_AI.py/main/img/sample.png",
            repo: "https://github.com/WashingtonYandun/CelciusAndFahrenheit_AI.py",
        },
        {
            id: 2,
            title: "Todo made in React.js",
            image: "https://raw.githubusercontent.com/WashingtonYandun/todo.react.js/main/sample.png",
            repo: "https://github.com/WashingtonYandun/todo.react.js",
        },
        {
            id: 3,
            title: "Park Map: .NET (full stack app)",
            image: "https://raw.githubusercontent.com/WashingtonYandun/Snake.java/main/samples/playing.png",
            repo: "https://github.com/WashingtonYandun/ParkMap",
        },
        {
            id: 4,
            title: "Art class portfolio",
            image: "https://raw.githubusercontent.com/WashingtonYandun/Art-Human-Expression-Communication_Portfolio/main/sample.png",
            repo: "https://github.com/WashingtonYandun/CelciusAndFahrenheit_AI.py",
        },
    ];

    return (
        <>
            <section id="portfolio">
                <h5>Most Important works</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    {projects.map((project) => {
                        return (
                            <article
                                key={project.id}
                                className="portfolio__project"
                            >
                                <div className="portfolio__img">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div>
                                    <h3>{project.title}</h3>
                                    <a
                                        href={project.repo}
                                        className="btn btn-primary"
                                    >
                                        See it
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Portfolio;
