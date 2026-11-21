export interface DataProjectProps {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Geotech';
  githubUrl: string;
  deployUrl: string;
  details: {
    overview: string;
    architecture: string[];
  };
}

export const DataProjects: DataProjectProps[] = [
  {
    id: "0",
    title: "A Forja – BarberSpace Platform",
    description: "Plataforma corporativa para o gerenciamento inteligente de barbearias e agendamentos. Gestão de horários, serviços dinâmicos e controle de permissões.",
    techs: ["Next.JS", "TypeScript", "TailwindCSS", "Node.JS", "MongoDB", "Docker", "API Evolution", "Oracle Cloud", "Messageria"],
    image: "/a-forja-barber.png",
    category: "Fullstack",
    githubUrl: "https://github.com/jonatasem/a_forja",
    deployUrl: "https://a-forja-jet.vercel.app",
    details: {
      overview: "A Forja é uma plataforma web para agendamentos online e gestão comercial de barbearias, otimizando o fluxo de atendimento entre clientes e profissionais.",
      architecture: [
        "Construído em Next.js App Router utilizando Server Components e rotas otimizadas.",
        "Gerenciamento avançado de formulários combinando React Hook Form e validações Zod.",
        "Interface moderna, fluida e responsiva com abordagem Mobile-First via Tailwind CSS."
      ]
    }
  },
  {
    id: "1",
    title: "AgroFlow – Fleet & Work Order CMMS",
    description:
      "Sistema web full-stack para gestão de ordens de serviço, atendimento por setor e manutenção de frotas e equipamentos agrícolas com controle de acesso por perfil.",
    techs: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Fastify",
      "Prisma ORM",
      "MongoDB",
      "JWT",
      "RBAC",
    ],
    image: "/agro-flow.png",
    category: "Fullstack",
    githubUrl: "https://github.com/jonatasem/agro-flow",
    deployUrl: "https://agro-flow-ivory.vercel.app",
    details: {
      overview:
        "AgroFlow é uma aplicação full-stack desenvolvida para centralizar a abertura de ordens de serviço por equipamento/frota, o acompanhamento de atendimentos por setor e o cálculo do tempo de manutenção operacional.",
      architecture: [
        "Frontend em Next.js (App Router) com TypeScript e Tailwind CSS em abordagem Mobile-First, utilizando cards responsivos no celular e tabela no desktop.",
        "Backend em Node.js e Fastify com arquitetura modular de controllers e services, autenticação JWT, validação e controle de acesso baseado em perfis (RBAC).",
        "Persistência com Prisma ORM e MongoDB, agrupando chamados na mesma O.S. aberta e gerenciando estados de setor (iniciar, pausar, retomar e finalizar).",
      ],
    },
  }
];