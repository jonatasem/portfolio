import './Projects.scss';

import imagePorfolio from '../assets/img/projects/portfolio-front.png';
import eCommerce from '../assets/img/projects/e-commerce.png';

const ProjectsDB = [
    {
        id: 0,
        nome: "Portfólio React Vite",
        img: imagePorfolio,
        description: "Desenvolvido com JavaScript, utilizando o pré processador SASS para um design mais atrativo, orgazinado e responsivo.",
        link: {
            live: "https://jonatasmoreira.com",
            github: "https://github.com/jonatasem/portfolio"
        }
    },
    {
        id: 1,
        nome: "E-commerce",
        img: eCommerce,
        description: "Desenvolvido com React Vite, utilizando redux para gerenciamento de estado e sass.",
        link: {
            live: "https://jonatasem.github.io/e-commerce/",
            github: "https://github.com/jonatasem/e-commerce"
        }
    }
];

export default function Projects() {
    return (     
        <>
            <h2 className='title-page'>Projetos</h2>
            <div className="container-projects" id="projects">
                {ProjectsDB.map(project => (
                    <section key={project.id} className="projects">
                        <img src={project.img} alt={project.nome} />
                        <h3>{project.nome}</h3>
                        <p>{project.description}</p>
                        <span className='container-btn'>
                            <a href={project.link.live}>
                                <button className='live'>Visualização ao vivo</button>
                            </a>
                            <a href={project.link.github}>
                                <button className='code'>Verifique no GitHub</button>
                            </a>
                        </span>
                    </section>
                ))}
            </div>
        </>
    );
}