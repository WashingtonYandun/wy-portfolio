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
                            <img
                                src="https://raw.githubusercontent.com/WashingtonYandun/CelciusAndFahrenheit_AI.py/main/img/sample.png"
                                alt="Celcius Farenheit AI prediction"
                            />
                        </div>
                        <div>
                            <h3>Farenheit Celsius AI</h3>
                            <a
                                href="https://github.com/WashingtonYandun/CelciusAndFahrenheit_AI.py"
                                className="btn btn-primary"
                            >
                                See it
                            </a>
                        </div>
                    </article>

                    <article className="portfolio__project">
                        <div className="portfolio__img">
                            <img
                                src="https://raw.githubusercontent.com/WashingtonYandun/todo.react.js/main/sample.png"
                                alt="todo react"
                            />
                        </div>
                        <div>
                            <h3>Todo made in React.js</h3>
                            <a
                                href="https://github.com/WashingtonYandun/todo.react.js"
                                className="btn btn-primary"
                            >
                                See it
                            </a>
                        </div>
                    </article>

                    <article className="portfolio__project">
                        <div className="portfolio__img">
                            <img
                                src="https://raw.githubusercontent.com/WashingtonYandun/Snake.java/main/samples/playing.png"
                                alt="todo react"
                            />
                        </div>
                        <h3>Snake game made in Java</h3>
                        <a
                            href="https://github.com/WashingtonYandun/todo.react.js"
                            className="btn btn-primary"
                        >
                            See it
                        </a>
                    </article>

                    <article className="portfolio__project">
                        <div className="portfolio__img">
                            <img
                                src="https://raw.githubusercontent.com/WashingtonYandun/Art-Human-Expression-Communication_Portfolio/main/sample.png"
                                alt="todo react"
                            />
                        </div>
                        <div>
                            <h3>Art class Portfolio</h3>
                            <a
                                href="https://github.com/WashingtonYandun/todo.react.js"
                                className="btn btn-primary"
                            >
                                See it
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
