import imgCommerce from "../assets/img/projects/e-commerce.png";
import imgMovies from "../assets/img/projects/Movies.png";
import imgRestaurant from "../assets/img/projects/restaurant.png";
import imgViagens from '../assets/img/projects/viagens.png';
import imgGraphic from '../assets/img/projects/graphic.png';

const ProjectsData = [
    {
        id: 0,
        nome: "Menu Restaurante",
        img: imgRestaurant,
        description:
        "Desenvolvido com React.tsx, utilizando redux e axios para requisição.",
        link: {
            live: "",
            github: "https://github.com/jonatasem/restaurant-menu/tree/versao-05",
        },
    },
    {
        id: 1,
        nome: "Filmes",
        img: imgMovies,
        description:
            "Desenvolvido com React Vite, utilizando SASS.",
        link: {
            live: "https://jonatasem.github.io/movies-lionsgate/",
            github: "https://github.com/jonatasem/movies-lionsgate",
        },
    },
    {
        id: 2,
        nome: "E-commerce",
        img: imgCommerce,
        description:
            "Desenvolvido com React Vite, utilizando redux para gerenciamento de estado e sass.",
        link: {
            live: "https://jonatasem.github.io/e-commerce/",
            github: "https://github.com/jonatasem/e-commerce",
        },
    },
    {
        id: 3,
        nome: "Viagens",
        img: imgViagens,
        description:
            "Desenvolvido com HTML, CSS e JavaScript.",
        link: {
            live: "https://jonatasem.github.io/viagens/",
            github: "https://github.com/jonatasem/viagens",
        },
    },
    {
        id: 4,
        nome: "Grafico de Avaliação",
        img: imgGraphic,
        description:
            "Desenvolvido com React.jsx e ApexCharts.js",
        link: {
            live: "https://jonatasem.github.io/graphic/",
            github: "https://github.com/jonatasem/graphic",
        },
    }
];

export default ProjectsData;