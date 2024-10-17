import React from "react";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Technologies from "./pages/skills/Skills.jsx";
import About from "./pages/about/About.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <main className="container-main">
      <Header />
      <Home />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </main>
  );
}
export default App;
