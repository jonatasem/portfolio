import "./styles/App.css";
import { useEffect } from "react";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

// components
import MenuMobile from "./components/menuMobile/MenuMobile";
import Footer from "./components/footer/Footer";
import ScrollReveal from "scrollreveal";
import BackToTop from "./components/back-to-top/BackToTop";

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal();

    // Função para revelar elementos visíveis
    const revealVisibleElements = () => {
      const elements = document.querySelectorAll(".visible");
      elements.forEach((element) => {
        if (
          element.getBoundingClientRect().top < window.innerHeight &&
          element.classList.contains("visible")
        ) {
          sr.reveal(element, {
            origin: "bottom",
            distance: "20px",
            duration: 600,
            delay: 200,
            opacity: 0,
            scale: 0.9,
          });
          element.classList.remove("visible"); // Remove a classe após a revelação
        }
      });
    };

    // Adiciona o listener de scroll
    window.addEventListener("scroll", revealVisibleElements);

    // Chama a função uma vez para revelar elementos já visíveis no carregamento
    revealVisibleElements();

    // Limpeza do listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", revealVisibleElements);
    };
  }, []);

  return (
    <>
      <section className="container-app">
        <MenuMobile />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </section>
    </>
  );
}
