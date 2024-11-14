import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando ícones de abrir e fechar
import "./Header.scss";

import curriculo from '../../assets/pdf/cv.pdf';

function SocialLink({ href, platform }) {
  return (
    <a href={href} title={`Visitar meu perfil no ${platform}`} aria-label={`Visitar meu perfil no ${platform}`}>
      {platform}
    </a>
  );
}

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  
  const toggleMenu = () => {
    setOpenMobile(!openMobile);
  };

  const copyEmail = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Criar um elemento de input temporário para copiar o texto
    const input = document.createElement('input');
    input.setAttribute('value', 'jonatas.em20@gmail.com');
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy'); // Usa o comando execCommand para copiar
    document.body.removeChild(input); // Remove o elemento de input temporário
  };

  return (
    <header className="container-header">
      <div className="mobile" onClick={toggleMenu} aria-label="Menu">
        {openMobile ? (
          <FaTimes className="icon" /> // Ícone de fechar
        ) : (
          <FaBars className="icon" /> // Ícone de abrir
        )}
      </div>
      {openMobile && (
        <div className="floating-card">
          <section className="container-cv">
            <span>
              <p>
                jonatas.em20@gmail.com
                <a href="#" onClick={copyEmail} aria-label="Copiar e-mail"> Copy</a>
              </p>
            </span>
            <a className="btn-cv" download="front-end-jonatasmoreira.pdf" href={curriculo}>CV</a>
          </section>
        </div>
      )}
      <section className="rede-sociais">
        <SocialLink href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/" platform="LinkedIn" />
        <span> / </span>
        <SocialLink href="mailto:jonatas.em20@gmail.com" platform="Email" />
        <span> / </span>
        <SocialLink href="https://github.com/jonatasem" platform="GitHub" />
      </section>
    </header>
  );
}

