import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import "./Header.scss";

import RevealOnScroll from '../RevealOnScroll/RevealOnScroll'

export default function Header() {
  return (
    <RevealOnScroll>
<header className="container-header">
      <h1>J.M. portfólio</h1>
      <section>
        <ul className="social-media" aria-label="Redes sociais">
          <li>
            <a
              href="mailto:jonatas.em20@gmail.com"
              aria-label="Link para o Email"
            >
              <MdOutlineEmail />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/"
              aria-label="Link para o LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jonatasem"
              aria-label="Link para o GitHub"
            >
              <GrGithub />
            </a>
          </li>
        </ul>
      </section>
    </header>
    </RevealOnScroll>
  );
}
