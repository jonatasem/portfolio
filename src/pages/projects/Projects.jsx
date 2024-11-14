import "./Projects.scss";

import ProjectsData from "../../api/ProjectsData";

export default function Projects() {
  return (
    <>
        <div className="container-projects" id="projects">
          <h2 className="title-page">Projetos</h2>
          <section>
            {ProjectsData.map((project) => (
              <article key={project.id} className="projects">
                <h3>{project.nome}</h3>
                <img src={project.img} alt={project.nome} />
                <span className="container-btn">
                  <a href={project.link.live}>
                    <button className="live">Visualização ao vivo</button>
                  </a>
                  <a href={project.link.github}>
                    <button className="code">Verifique no GitHub</button>
                  </a>
                </span>
              </article>
            ))}
          </section>
        </div>
    </>
  );
}
