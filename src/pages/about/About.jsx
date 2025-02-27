import "./About.css";

export default function About() {
  return (
    <section className="container-about visible" id="about">
      <h2 className="visible title-about">Sobre Mim</h2>
      <p className="resume">
        Desenvolvedor front-end com sólida formação em aplicações web responsivas. Experiência prática em HTML, CSS, JavaScript, TypeScript, React.js e Next.js. Habilidade em criar e otimizar interfaces de usuário, garantindo a integração eficiente entre front-end e back-end por meio de APIs. Comprometido com as melhores práticas de desenvolvimento, incluindo design responsivo e performance.
      </p>
      <div className="about-center">
        <article>
          <h2>Habilidades Interpessoais</h2>
          <ul className="skills">
            <li>
              <strong>Comunicação: </strong>Capacidade de manter comunicação clara e eficaz com clientes e equipes, garantindo a entrega de soluções que atendam às necessidades.
            </li>
            <li>
              <strong>Colaboração: </strong>Habilidade em trabalhar em equipe, promovendo um ambiente de trabalho cooperativo e eficiente.
            </li>
            <li>
              <strong>Resolução de Problemas: </strong>Proatividade na identificação e resolução de desafios técnicos e operacionais.   
            </li>
            <li>
              <strong>Adaptabilidade: </strong>Flexibilidade para se adaptar a novas tecnologias e ambientes de trabalho dinâmicos.
            </li>
            <li>
              <strong>Gerenciamento de Tempo: </strong>Habilidade em priorizar tarefas e gerenciar prazos de entrega em projetos.              
            </li>
          </ul>
        </article>
        <article>
          <h2>Habilidades Técnicas</h2>
          <ul className="skills">
            <li>
              <strong>Desenvolvimento Front-End: </strong>React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, SASS, Styled Components, Tailwind, WordPress, VTEX. Sólida compreensão de hooks, custom hooks e gerenciamento de estado com Redux e Context API.
            </li>
            <li>
              <strong>Design Responsivo e Performance: </strong>
              Aplicação de princípios de design como SOLID e Clean Code para otimização de interfaces.
            </li>
            <li>
              <strong>Integração: </strong>Consumo de APIs RESTful e GraphQL utilizando Axios, Fetch e Ajax.
            </li>
            <li>
              <strong>Versionamento e CI/CD: </strong>
              Familiaridade com Git e GitFlow, além de ferramentas de integração contínua.
            </li>
            <li>
              <strong>Metodologias Ágeis: </strong>Conhecimento em Scrum e Kanban, contribuindo para equipes multidisciplinares na entrega de soluções rápidas e escaláveis.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}