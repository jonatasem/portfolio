import React, { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="container-header">
      <article className="header-logo">
        <h1 id="header">
          <span>Jonatas</span> Moreira
        </h1>
      </article>
      <article className="header-navbar">
        <nav>
          <ul>
            <li>
              <a
                href="#home"
                id={activeItem === "home" ? "active" : ""}
                onClick={() => handleItemClick("home")}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#about"
                id={activeItem === "about" ? "active" : ""}
                onClick={() => handleItemClick("about")}
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#projects"
                id={activeItem === "projects" ? "active" : ""}
                onClick={() => handleItemClick("projects")}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                id={activeItem === "contact" ? "active" : ""}
                onClick={() => handleItemClick("contact")}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}
