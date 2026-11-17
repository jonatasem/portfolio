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
  }
];