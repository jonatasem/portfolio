import React from "react";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Technologies from "./pages/skills/Skills.jsx";
import About from "./pages/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";
import Experience from "./pages/experience/Experiencia.jsx";
import Line from "./components/line/Line.jsx";

function App() {
  return (
    <main className="container-main">
      <Home />
      <Line />
      <Projects />
      <Line />
      <Technologies />
      <Line />
      <Experience />
      <Line />
      <About />
      <Line />
      <Footer />
    </main>
  );
}
export default App;
