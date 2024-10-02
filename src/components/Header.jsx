import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import './BackToTopButton.scss';
import './Header.scss';

export default function Header() {
    const [stateMobile, setStateMobile] = useState(false);

    const showMobile = () => {
        setStateMobile(!stateMobile);
    };

    return (
        <header className="container-header">
            <h1>J.M. portfólio</h1>
            <section className={`layout-mobile ${stateMobile ? 'active-nav' : ''}`}>
                <nav className="nav-bar" aria-label="Navegação principal">
                    <ul onClick={showMobile}>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#technologies">Tecnologias</a></li>
                        <li><a href="#about-me">Sobre Mim</a></li>
                    </ul>
                </nav>
                <ul className="social-media" aria-label="Redes sociais">
                    <li>
                        <a href="mailto:jonatas.em20@gmail.com" aria-label="Link para o Email"><MdOutlineEmail /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jonatas-elieser-moreira-948632270/" aria-label="Link para o LinkedIn"><FaLinkedinIn/></a>
                    </li>
                    <li>
                        <a href="https://github.com/jonatasem" aria-label="Link para o GitHub"><GrGithub /></a>
                    </li>
                </ul>
            </section>
            <section className="mobile">
                <button onClick={showMobile}>
                    {stateMobile ? <MdOutlineClose /> : <IoIosMenu />}
                </button>
            </section>
        </header>
    );
}
