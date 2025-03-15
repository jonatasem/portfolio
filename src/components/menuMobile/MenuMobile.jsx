import { useState } from "react";
import "./MenuMobile.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuMobile() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // Estado para o item ativo

  const toggleMenu = () => {
    setMenuMobile((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuMobile(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    closeMenu();
  };

  return (
    <section className="container-mobile">
      <div className="container-layout">
        <button
          onClick={toggleMenu}
          className="menu-toggle"
          aria-label={menuMobile ? "Fechar menu" : "Abrir menu"}
        >
          {menuMobile ? <FaTimes /> : <FaBars />}
        </button>
        {menuMobile && (
          <nav id="active" className="mobile-navbar">
            <ul>
              <li onClick={() => handleItemClick("home")}>
                <a href="#home" id={activeItem === "home" ? "active" : ""}>
                  Início
                </a>
              </li>
              <li onClick={() => handleItemClick("about")}>
                <a href="#about" id={activeItem === "about" ? "active" : ""}>
                  Sobre Mim
                </a>
              </li>
              <li onClick={() => handleItemClick("projects")}>
                <a
                  href="#projects"
                  id={activeItem === "projects" ? "active" : ""}
                >
                  Projetos
                </a>
              </li>
              <li onClick={() => handleItemClick("contact")}>
                <a
                  href="#contact"
                  id={activeItem === "contact" ? "active" : ""}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
