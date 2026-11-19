# Portfólio — Jonatas Elieser Moreira

Aplicação web desenvolvida para apresentar meus projetos, stack técnica e formas de contato profissional. Construída com foco em responsividade (Mobile-First), tipagem estrita e carregamento rápido.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Biblioteca UI:** React 19
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS v4
- **Animações e Ícones:** Framer Motion, Lucide React e React Icons

## Funcionalidades

- **Apresentação:** Resumo profissional e principais tecnologias utilizadas no dia a dia.
- **Vitrine de Projetos:** Cards dinâmicos alimentados via tipagem centralizada (`src/data/projects.ts`), com acesso direto ao deploy e ao repositório no GitHub.
- **Navegação Responsiva:** Menu adaptado para mobile e dropdown no desktop com download direto do currículo em PDF.
- **Contato:** Acesso rápido por e-mail.

## Estrutura do Projeto

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
└── data/
    └── projects.ts
public/
├── a-forja-barber.png
├── jonatas-moreira-desenvolvedor-full-stack.pdf
└── logo.png
```

## Como rodar localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/jonatasem/portfolio.git
cd portfolio
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Contato

- **E-mail:** jonatas.em25@gmail.com
- **GitHub:** [github.com/jonatasem](https://github.com/jonatasem)