import "./About.scss";

import ImgSkill from "../../assets/img/skill.png";

export default function About() {
  return (
    <section className="container-about" id="about">
      <div className="about-header">
        <p>SOBRE MIM</p>
      </div>
      <div className="about-center">
        <article className="about-left">
          <img src={ImgSkill} alt="Imagem de habilidades" />
        </article>
        <article className="about-right">
          <p>
            Sou um desenvolvedor de software com 3 anos de experiência na
            indústria. Tenho um forte conhecimento em tecnologias como React,
            Redux, Node.js e bancos de dados como MongoDB e MySQL. Minha paixão
            por tecnologia e resolução de problemas me levou a criar soluções
            que atendem às necessidades dos usuários e das empresas.
          </p>
          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>
                <strong>Leitura:</strong> Sou apaixonado por livros de ficção e
                não-ficção, sempre buscando novas perspectivas e histórias que
                me inspirem.
              </li>
              <li>
                <strong>Violão:</strong> Toco violão nas horas vagas, explorando
                diferentes estilos musicais.
              </li>
              <li>
                <strong>Aventuras ao Ar Livre:</strong> Gosto de explorar a
                natureza, seja fazendo trilhas, acampando ou apenas relaxando em
                um parque local.
              </li>
              <li>
                <strong>Aprendizado Contínuo:</strong> Estou sempre em busca de
                novos conhecimentos, seja por meio de cursos online, tutoriais
                ou projetos pessoais que me desafiem.
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="about-footer">
        <p>
          Acredito que a colaboração e a comunicação são essenciais para o
          sucesso dos projetos. Estou sempre em busca de aprendizado contínuo e
          oportunidades para expandir meu conhecimento e habilidades.
        </p>
      </div>
    </section>
  );
}
