import React, { useState, useEffect } from "react";
import "./BackToTop.css";

import { BsArrowUpCircleFill } from "react-icons/bs";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <BsArrowUpCircleFill className="icon-back-to-top" />
    </button>
  );
}
