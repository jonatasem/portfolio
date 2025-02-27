import { useParams } from "react-router-dom";
import ProjectsData from "../../data/api";
import "./Opened.css";

export default function Opened() {
  const { id } = useParams(); 
  const project = ProjectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p className="visible">Projeto não encontrado.</p>;
  }

  return (
    <section className="container-opened">

      <h2 className="visible">{project.nome}</h2>

      <div className="layout-opened">

        <article className="opened-left">
          <img className="visible" src={project.img} alt={project.nome} />
        </article>

        <article className="opened-right">
          <h2>Tecnologias Utilizadas</h2>
          <p>Linguagem: {project.linguagem}</p>
          <p>Framework: {project.framework}</p>
          <p>Sintaxe: {project.sintaxe}</p>
          <p>Funcionalidade: {project.funcionalidade}</p>
          
          <div className="btn-code visible">
            <a className="live" href={project.link.live} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
            <a className="github" href={project.link.github} target="_blank" rel="noopener noreferrer">
              <span>Ver Código</span>
            </a>
          </div>

        </article>
      </div>

      <a className="btn-opened visible" href="/#projects">Voltar</a>
    </section>
  );
}
