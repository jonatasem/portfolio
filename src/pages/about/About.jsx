import "./About.scss";

export default function About() {
  return (
    <section className="container-about" id="about-me">
      <h2 className="title-page">Sobre Mim</h2>
      <p>
        Profissional em Transição de Carreira com expertise em desenvolvimento de software, focado em
        React.js e Next.js <strong style={{color:"black"}}>(JavaScript/TypeScript)</strong>. Com uma forte dedicação às boas práticas de Clean Code,
        crio soluções robustas, eficientes e escaláveis que atendem às necessidades do usuário. Motivado por
        desafios e comprometido com meu crescimento profissional.
      </p>
      <ul className="technologies-list">
        <li><strong>Linguagens de Programação</strong>: JavaScript, TypeScript e PHP.</li>
        <li><strong>Frameworks</strong>: React.js, Next.js e Angular.</li>
        <li><strong>Backend</strong>: Node.js, Express, Insominia, XAMP e Laravel.</li>
        <li><strong>Banco de Dados</strong>: MySQL, PostgreSQL e MongoDB.</li>
        <li><strong>Testes</strong>: Jest, Testing Library e Vitest.</li>
        <li><strong>Práticas de Desenvolvimento</strong>: Clean Code, CI/CD, Git Actions e Scrum.</li>
        <li><strong>Produção</strong>: GH-Pages, Versel e Netlify.</li>
        <li><strong>Colaboração</strong>: Pull Requests e Trabalho em Equipe.</li>
      </ul>
      <p>
        Sou focado na resolução de problemas e meu objetivo é atender e superar as expectativas da posição que ocupo. Apesar dos desafios, considero a área de tecnologia extremamente recompensadora. Sou apaixonado pelo que faço e busco constantemente o aprendizado e a evolução profissional.
      </p>
    </section>
  );
}
