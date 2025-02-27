import "./Projects.css";
import ProjectsData from "../../data/api";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="container-projects visible" id="projects">
      <h2>Projetos</h2>
      <ul className="projects-list">
        {ProjectsData.length > 0 ? (
          ProjectsData.map((project) => (
            <li key={project.id} onClick={() => handleProjectClick(project.id)}>
              <span>
                <h3>{project.nome}</h3>
                <BsArrowUpRight className="icon-project"/>
              </span>
            </li>
          ))
        ) : (
          <p>Não há projetos disponíveis no momento.</p>
        )}
      </ul>
    </section>
  );
}