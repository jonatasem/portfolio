import "./Projects.scss";
import ProjectsData from "../../data/api";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="container-projects visible" id="projects">
      <div className="projects-header visible">
        <p className="visible">NOSSOS TRABALHOS</p>
        <h2 className="visible">Crie ótimos produtos</h2>
      </div>
      <ul className="projects-main visible">
        {ProjectsData.length > 0 ? (
          ProjectsData.map((project) => (
            <li className="visible" key={project.id} onClick={() => handleProjectClick(project.id)}>
              <img src={project.screenshot} alt={project.nome} />
            </li>
          ))
        ) : (
          <p>Não há projetos disponíveis no momento.</p>
        )}
      </ul>
    </section>
  );
}
