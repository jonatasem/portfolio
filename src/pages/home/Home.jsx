import "./Home.scss";

import imageAutor from "../../assets/img/autor.png";


//components
import Header from "../../components/header/Header";

export default function Home() {
  return (
      <section className="container-home">
        <Header />
        <article className="autor">
          <img src={imageAutor} alt="Imagem do Autor" />
          <p>Jonatas Moreira</p>
        </article>
        <h1>Construindo Produtos, marcas e experiências digitais.</h1>
        <a className="btn-home" href="#about-me">Sobre Mim</a>
      </section>

  );
}