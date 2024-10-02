import React from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Projects  from "./pages/Projects.jsx";
import Technologies from './pages/Technologies.jsx'
import BackToTopButton from "./components/BackToTopButton.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

function App(){
  return (
    <main className="container-main">
      <Header />
      <Home />
      <Projects />
      <Technologies />
      <About />
      {/*Scroll to top*/}
      <BackToTopButton />
      <Footer />
    </main>
  )
}
export default App;