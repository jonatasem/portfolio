import "./About.scss";

export default function About() {
  return (
    <section className="container-about" id="about-me">
      <h2 className="title-page">Sobre Mim</h2>
      <p>
        Meu nome é Jonatas e minha paixão pela tecnologia começou na infância, quando, aos 10 anos, eu desmontava brinquedos elétricos e controles remotos, explorando tudo que parecia tecnológico.
      </p>
      <p>
        Hoje, com 23 anos, possuo um conhecimento sólido em desenvolvimento front-end, destacando-me nas seguintes tecnologias:
      </p>
      <ul className="technologies-list">
        <li><strong>JavaScript (ES6+/TypeScript)</strong></li>
        <ul>
          <li>Arquitetura: Componentes</li>
          <li>Linguagem: JSX</li>
          <li>Gerenciamento de Estado: useState, useEffect, Redux</li>
          <li>Estilização: CSS, SCSS, Bootstrap, Styled-Components</li>
        </ul>
        <li><strong>React</strong>: Familiaridade com componentes e hooks.</li>
      </ul>
      <p>
        Além disso, tenho uma base em desenvolvimento back-end, utilizando <strong>Node.js</strong>, <strong>Express</strong> e <strong>MongoDB</strong>. Minha experiência também inclui o desenvolvimento em <strong>WordPress</strong>, onde apliquei meus conhecimentos em criação e personalização de sites.
      </p>
      <p>
        Sou focado na resolução de problemas e meu objetivo é atender e superar as expectativas da posição que ocupo. Apesar dos desafios, considero a área de tecnologia extremamente recompensadora. Sou apaixonado pelo que faço e busco constantemente o aprendizado e a evolução profissional.
      </p>
    </section>
  );
}
