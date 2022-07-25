import React from "react";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

const App = () => {
    return (
        <>
            <Header />
            <NavBar />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
