import "./Portfolio.css";

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <h5>Most Important works</h5>
                <h2>Portfolio</h2>
                <div className="container portfolio__container">
                    <article className="portfolio__project">
                        <div className="portfolio__img">
                            <img src="" alt="project" />
                        </div>
                        <h3>Neural Network</h3>
                        <a href="https://github.com/WashingtonYandun/todo.react.js">
                            Repo
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
