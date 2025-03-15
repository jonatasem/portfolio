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
      <div className="projects-header">
        <p>NOSSOS TRABALHOS</p>
        <h2>Crie ótimos produtos</h2>
      </div>
      <ul className="projects-main">
        {ProjectsData.length > 0 ? (
          ProjectsData.map((project) => (
            <li key={project.id} onClick={() => handleProjectClick(project.id)}>
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
