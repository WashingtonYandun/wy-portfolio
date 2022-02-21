import React from "react";

import { About, Footer, Header, Skills, Works } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
