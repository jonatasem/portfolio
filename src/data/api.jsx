import imgGraphic from "../assets/img/projects/graphic.png";
import imgColognese from "../assets/img/projects/colognese.png";
import imgCommerce from "../assets/img/projects/e-commerce.png";

const ProjectsData = [
  {
    id: 0,
    nome: "Colognese Brigaderia",
    img: imgColognese,
    details: "A Confeitaria Elegante é mais do que apenas uma aplicação web, é uma verdadeira celebração da arte da confeitaria. Com o crescente interesse por doces artesanais, decidimos criar uma plataforma que não só apresenta uma variedade de delícias, mas também proporciona uma experiência envolvente para os amantes de doces.",
    linguagem: "JavaScript",
    framework: "React",
    deploy: "Versel",
    git: "Git",
    sintaxe: "JSX",
    funcionalidade: "Ao acessar o site, o usuário é apresentado a uma lista de doces artesanais. Ao clicar em um item específico, ele poderá visualizar detalhes como imagem, nome e uma descrição completa do cardápio, incluindo todos os sabores disponíveis.",
    link: {
      live: "https://colognese-brigaderia.vercel.app/",
      github: "https://github.com/jonatasem/colognese-brigaderia",
    },
  },
  {
    id: 1,
    nome: "E-commerce",
    img: imgCommerce,
    details: "Este projeto foi concebido para simular uma loja de e-commerce digital utilizando Redux para gerenciamento de estado, e SASS para estilização.",
    linguagem: "JavaScript",
    framework: "React",
    deploy: "GitHub",
    git: "Git",
    sintaxe: "JSX",
    funcionalidade: "Ao acessar o site, o usuário poderá adicionar itens ao carrinho e receber notificações sobre o sucesso ou falha das ações realizadas. O sistema também oferece um carrinho onde o usuário pode visualizar o valor total da compra.",
    link: {
      live: "https://jonatasem.github.io/e-commerce/",
      github: "https://github.com/jonatasem/e-commerce",
    },
  },
  {
    id: 2,
    nome: "Grafico de Avaliação",
    img: imgGraphic,
    details: "Utilizando tecnologias como React, React ApexCharts, Font Awesome e SASS, o Graphic combina funcionalidade e estética. Com essa abordagem tecnológica, a aplicação não só atende às necessidades de busca e visualização de avaliações, mas também oferece uma experiência interativa que torna a pesquisa de informações sobre profissionais mais prática e envolvente.",
    linguagem: "JavaScript",
    framework: "React",
    deploy: "GitHub",
    git: "Git",
    sintaxe: "JSX",
    funcionalidade: "O projeto Graphic é uma aplicação web que permite aos usuários explorar e filtrar avaliações de profissionais em diferentes unidades. Com uma interface intuitiva, a plataforma foi desenvolvida em React, oferecendo uma experiência de navegação fácil e eficiente. Os usuários podem aplicar filtros para encontrar avaliações específicas, como unidade, profissional e nota, tornando a busca mais personalizada. Além disso, a aplicação apresenta gráficos interativos que ilustram a distribuição das notas, permitindo uma visualização clara e concisa dos dados.",
    link: {
      live: "https://jonatasem.github.io/graphic/",
      github: "https://github.com/jonatasem/graphic",
    },
  },
];

export default ProjectsData;