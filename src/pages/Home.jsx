import './Home.scss';

import curriculo from '../assets/pdf/jonatasElieserMoreiraFrontEndJr.pdf';

import imageAutor from '../assets/img/autor.jpeg';

export default function Home() {
    return (
        <div className="container-home">
            <section className="home-left">
                <h1>Olá, eu sou Jonatas,</h1>
                <h2>Desenvolvedor</h2>
                <h2>Front End</h2>
                <p>
                    Apaixonado por técnologia e desenvolvimento web,<br />
                    com foco na criação de interfaces intuitivas 
                    e responsivas. <br /> Atualmente, 
                    cursando o 3º semestre de Engenharia da Computação.
                </p>
                <a href={curriculo}>Download CV</a>
            </section>
            <section className="home-right">
                <span className='layout-home'></span>
                <img src={imageAutor} alt="Imagem do autor Jonatas" />
                <span className='layout-circle'></span>
            </section>
        </div>
    );
}