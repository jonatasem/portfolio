import eCommerce from "../assets/img/projects/e-commerce.png";
import imgMovies from "../assets/img/projects/Movies.png";
import imgRestaurant from "../assets/img/projects/restaurant.png";

const ProjectsData = [
    {
        id: 0,
        nome: "Restaurant",
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
        nome: "Movies",
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
        img: eCommerce,
        description:
            "Desenvolvido com React Vite, utilizando redux para gerenciamento de estado e sass.",
        link: {
            live: "https://jonatasem.github.io/e-commerce/",
            github: "https://github.com/jonatasem/e-commerce",
        },
    }
];

export default ProjectsData;