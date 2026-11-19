'use client';

import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import {
  LuArrowUpRight,
  LuMail,
  LuShieldCheck,
} from "react-icons/lu";
import { motion } from "framer-motion";
import { DataProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-400 font-sans relative overflow-x-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-150 h-75 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-200 right-0 w-75 sm:w-125 h-125 bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />
      <Navbar />

      <section id="home" className="pt-28 sm:pt-36 pb-12 px-4 sm:px-6 max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] sm:text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponível para Projetos
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.15]">
              Construindo aplicações{" "}
              <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                escaláveis, testadas e de alta performance.
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl">
              Graduando em Engenharia da Computação focado na criação de software resiliente. Desenvolvo no ecossistema JavaScript/TypeScript com arquitetura limpa (Controller-Service), validação defensiva com Zod e testes unitários com Jest. No frontend, crio interfaces modernas e responsivas Mobile-First com React, Next.js (App Router) e Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto justify-center px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 flex items-center gap-2 text-sm"
              >
                Explorar Projetos <LuArrowUpRight size={18} />
              </a>
              <a
                href="mailto:jonatas.em25@gmail.com"
                className="w-full sm:w-auto text-center px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-800 hover:border-slate-700 transition-all active:scale-95 text-sm"
              >
                Entrar em Contato
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-900 max-w-xl">
              <div className="p-3.5 sm:p-0 rounded-2xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-none flex sm:block items-center justify-between">
                <span className="text-base sm:text-xl font-black text-white block">Node.js & Next.js</span>
                <span className="text-[11px] text-slate-400 sm:text-slate-500 font-mono">Ecossistema Principal</span>
              </div>
              <div className="p-3.5 sm:p-0 rounded-2xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-none flex sm:block items-center justify-between">
                <span className="text-base sm:text-xl font-black text-emerald-400 block">Zod & Jest</span>
                <span className="text-[11px] text-slate-400 sm:text-slate-500 font-mono">Qualidade & Testes</span>
              </div>
              <div className="p-3.5 sm:p-0 rounded-2xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-none flex sm:block items-center justify-between">
                <span className="text-base sm:text-xl font-black text-white block">Clean Code</span>
                <span className="text-[11px] text-slate-400 sm:text-slate-500 font-mono">Arquitetura Modulada</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-linear-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-4 sm:p-6 rounded-3xl space-y-4 shadow-2xl relative"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                dev.status: true
              </span>
            </div>

            <div className="bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-800/80 text-slate-300 space-y-2 leading-relaxed font-mono overflow-x-auto">
              <p className="text-[11px] sm:text-xs">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">tecnologias</span> = [
                &quot;TypeScript&quot;, &quot;Next.js&quot;, &quot;TailwindCSS&quot;, &quot;Node.js&quot;, &quot;Prisma&quot;, &quot;MongoDB&quot;, &quot;Docker&quot;, &quot;OracleCloud&quot;
                ];
              </p>
              <p className="text-[11px] sm:text-xs">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">principios</span> = [
                &quot;Mobile-First&quot;, &quot;APIs RESTful&quot;, &quot;Arquitetura Limpa&quot;, &quot;Testes Unitários&quot;
                ];
              </p>
              <p className="text-[11px] sm:text-xs">
                <span className="text-emerald-400">return</span>{" "}
                &quot;Software confiável pronto para produção.&quot;;
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20 flex items-start sm:items-center gap-3">
              <LuShieldCheck className="text-emerald-400 shrink-0 mt-0.5 sm:mt-0" size={22} />
              <p className="text-xs text-slate-300 leading-relaxed">
                Foco em código limpo, cobertura de testes e validação rigorosa de dados.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Portfólio
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-3">
              Projetos em Destaque
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DataProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border border-emerald-500/30 px-5 py-10 sm:p-16 rounded-3xl shadow-2xl space-y-5 sm:space-y-6">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

          <span className="inline-block text-[11px] sm:text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Contato
          </span>

          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Pronto para construir ou escalar o seu produto?
          </h2>

          <p className="text-slate-400 mx-auto text-sm sm:text-base leading-relaxed max-w-xl">
            Estou disponível para contratações, projetos freelancers e parcerias de desenvolvimento.
          </p>

          <div className="pt-2">
            <a
              href="mailto:jonatas.em25@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 text-sm"
            >
              <LuMail size={18} />
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center border-t border-slate-900 text-slate-500 text-xs font-mono">
        © 2026 Jonatas Elieser Moreira. Todos os direitos reservados.
      </footer>
    </div>
  );
}