import { useParams, useNavigate } from "react-router-dom"; // Atente-se para a importação correta
import ProjectsData from "../../data/api";
import "./Opened.scss";

export default function Opened() {
  const { id } = useParams();
  const project = ProjectsData.find((project) => project.id === parseInt(id));
  const navigate = useNavigate(); // Alteração aqui

  const onClose = () => {
    navigate("/");
  };

  if (!project) {
    return <p className="visible">Projeto não encontrado.</p>;
  }

  return (
    <section className="projeto-open">
      <div className="open-center">
        <article className="open-left">
          <h3>Screenshots:</h3>
          <img src={project.screenshot} alt={`Screenshot de ${project.nome}`} />
        </article>
        <article className="open-right">
          <div className="projeto-content">
            <button className="close-button" onClick={onClose}>
              Fechar
            </button>
            <h2>{project.nome}</h2>
            <p>{project.descricao}</p>
            <h3>Tecnologias Utilizadas:</h3>
            <ul>
              {project.tecnologias.map((tecnologia, index) => (
                <li key={index}>{tecnologia}</li>
              ))}
            </ul>
            <h3>Funcionalidades Principais:</h3>
            <ul>
              {project.funcionalidades.map((funcionalidade, index) => (
                <li key={index}>{funcionalidade}</li>
              ))}
            </ul>
            <h3>Desafios e Soluções:</h3>
            <p>{project.desafios}</p>
            <h3>Feedback:</h3>
            <p>{project.feedback}</p>
            <div className="links">
              <div className="links-left">
                <h3>Ver Código-Fonte:</h3>
                <a
                  href={project.linkCodigo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Código
                </a>
              </div>
              <div className="links-right">
                <h3>Ver ao vivo:</h3>
                <a
                  href={project.linkAoVivo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ao Vivo
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
