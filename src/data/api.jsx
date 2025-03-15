import imgGraphic from "../assets/img/projects/graphic.png";
import imgColognese from "../assets/img/projects/colognese.png";
import imgCommerce from "../assets/img/projects/e-commerce.png";
import imgApiMovie from "../assets/img/projects/api-movies.png";
import imgFrontMovies from "../assets/img/projects/front-movies.png";
import imgDoisIrmaos from "../assets/img/projects/dois-irmaos.png";

const ProjectsData = [
  {
    id: 0,
    nome: "HeadPhones E-Commerce",
    descricao:
      "E-commerce dedicado à venda de headphones, permitindo que os usuários explorem uma variedade de produtos com descrições detalhadas e realizem compras de forma intuitiva. O site oferece uma experiência de compra responsiva e amigável.",
    tecnologias: [
      "React",
      "Vite",
      "SASS",
      "React Router Dom",
      "Redux",
      "Redux Toolkit",
      "GitHub Pages",
      "Node.js",
      "MongoDB",
    ],
    funcionalidades: [
      "Catálogo de Produtos: Visualização de headphones com imagens, descrições e preços.",
      "Carrinho de Compras: Adicione, remova e edite itens no carrinho.",
    ],
    desafios:
      "Implementar a persistência de dados do carrinho entre sessões de usuário, garantindo que as informações não sejam perdidas ao recarregar a página.",
    feedback:
      "Os usuários relataram que a navegação intuitiva resultou em uma experiência de compra mais rápida e satisfatória.",
    linkCodigo: "https://github.com/jonatasem/headphones",
    linkAoVivo: "https://jonatasem.github.io/headphones",
    screenshot: imgCommerce,
  },
  {
    id: 1,
    nome: "Colognese Brigaderia",
    descricao:
      "Aplicação para exibir doces artesanais, permitindo a exploração de diferentes produtos com detalhes e um cardápio completo.",
    tecnologias: ["React", "Vite", "CSS", "GitHub Pages"],
    funcionalidades: [
      "Página Inicial: Visão geral da confeitaria com lista de doces disponíveis.",
      "Página de Detalhes do Produto: Informações detalhadas sobre um doce específico.",
      "Cardápio: Cardápio interativo com todos os doces e suas descrições.",
      "Navegação: Links diretos para redes sociais e outras seções.",
    ],
    desafios:
      "Gerenciar a navegação entre diferentes páginas usando React Router, garantindo que a experiência do usuário seja fluida e intuitiva.",
    feedback:
      "O design atraente e o cardápio interativo aumentaram o engajamento dos clientes e as vendas em 20%.",
    linkCodigo: "https://github.com/jonatasem/colognese",
    linkAoVivo: "https://jonatasem.github.io/colognese",
    screenshot: imgColognese,
  },
  {
    id: 2,
    nome: "Página de Avaliações",
    descricao:
      "Aplicação React para gerenciar e exibir avaliações de profissionais, permitindo filtragem e visualização de dados em gráficos.",
    tecnologias: [
      "React",
      "Vite",
      "ApexCharts",
      "Font Awesome",
      "React Icons",
      "GitHub Pages",
    ],
    funcionalidades: [
      "Filtragem: Filtrar avaliações por unidade, profissional e nota.",
      "Paginação: Avaliações exibidas em páginas para melhor navegação.",
      "Gráficos: Gráfico de barras exibindo a contagem de avaliações por nota.",
      "Estilização Responsiva: Layout adaptável a diferentes tamanhos de tela.",
    ],
    desafios:
      "Implementar a lógica de filtragem e paginação de forma eficiente, garantindo que o desempenho da aplicação não seja comprometido com grandes volumes de dados.",
    feedback:
      "A capacidade de filtrar avaliações ajudou os usuários a encontrar rapidamente informações relevantes, melhorando sua satisfação geral.",
    linkCodigo: "https://github.com/jonatasem/graphic",
    linkAoVivo: "https://jonatasem.github.io/graphic",
    screenshot: imgGraphic,
  },
  {
    id: 3,
    nome: "Filmes Gratuitos",
    descricao:
      "API simples para gerenciar uma lista de filmes, permitindo visualizar e curtir filmes.",
    tecnologias: ["React", "Vite", "Redux"],
    funcionalidades: [
      "Listagem: Exibir todos os filmes disponíveis.",
      "Curtir Filmes: Marcando filmes como favoritos.",
      "Detalhes do Filme: Exibir descrição e vídeo do filme.",
      "Lista de Favoritos: Acessar filmes curtidos.",
    ],
    desafios:
      "Desenvolver uma API robusta que suporte operações de CRUD, garantindo a segurança e a integridade dos dados dos usuários.",
    feedback:
      "A funcionalidade de curtir filmes permitiu que os usuários criassem uma lista personalizada, aumentando a interação com a plataforma.",
    linkCodigo: "https://github.com/jonatasem/api-movies",
    linkAoVivo: "https://front-movies-zeta.vercel.app/",
    screenshot: imgFrontMovies,
  },
  {
    id: 4,
    nome: "Api Movies",
    descricao:
      "API para gerenciar uma lista de filmes, permitindo obter, adicionar e curtir filmes.",
    tecnologias: ["Node.js", "Express", "CORS", "Render"],
    funcionalidades: ["Rota Get: Acesso à lista de filmes."],
    desafios:
      "Garantir a escalabilidade da API, implementando autenticação e autorização para proteger as rotas sensíveis.",
    feedback:
      "Os desenvolvedores destacaram a facilidade de uso da API, com feedback positivo sobre a documentação clara e exemplos práticos.",
    linkCodigo: "https://github.com/jonatasem/api-movies",
    linkAoVivo: "https://api-movies-tt99.onrender.com/api/movies",
    screenshot: imgApiMovie,
  },
  {
    id: 5,
    nome: "Estética Automotiva Dois Irmãos",
    descricao:
      "Sistema de gerenciamento desenvolvido em React.js utilizando Firebase como backend, facilitando a administração de um lava rápido.",
    tecnologias: [
      "React.js",
      "Vite",
      "Firebase",
      "SASS",
      "Dotenv",
      "JSPDF",
      "JSPDF-AUTOTABLE",
      "React Router Dom",
    ],
    funcionalidades: [
      "Gerenciamento de serviços e clientes em um sistema intuitivo.",
    ],
    desafios:
      "Implementar a autenticação de usuários e o gerenciamento de dados no Firebase, garantindo a segurança das informações.",
    feedback:
      "A integração com o Firebase facilitou a gestão de dados, resultando em uma melhora significativa na eficiência do atendimento ao cliente.",
    linkCodigo: "https://github.com/jonatasem/dois-irmaos-estetica",
    linkAoVivo: "https://dois-irmaos-estetica.vercel.app",
    screenshot: imgDoisIrmaos,
  },
];

export default ProjectsData;
