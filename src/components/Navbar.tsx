'use client';

import { useState, useEffect } from "react";
import { Terminal, FolderGit2, ChevronDown, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import imgLogoDesk from "../../public/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-emerald-500/10 shadow-lg shadow-emerald-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all">
            <Terminal size={20} />
          </div>
          <span className="font-extrabold text-white text-lg tracking-tight">
            Jonatas<span className="text-emerald-400">.dev</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <Link href="#projects" className="hover:text-emerald-400 transition-colors">
            Projetos
          </Link>

          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <Image
                src={imgLogoDesk}
                alt="imagem do logotipo desktop"
                className="w-10 h-10 object-cover rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-all"
              />
              <ChevronDown
                size={14}
                className={`text-emerald-400 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </div>

            <div
              className={`absolute right-0 mt-3 w-56 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-emerald-500/20 shadow-xl shadow-emerald-950/40 p-2 flex flex-col gap-1 transition-all duration-300 origin-top-right ${
                isDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <a
                href="mailto:jonatas.em25@gmail.com"
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
              >
                <Mail size={16} className="text-emerald-400" />
                <span>Email</span>
              </a>

              <a
                href="/jonatas-moreira-desenvolvedor-full-stack.pdf"
                download="Curriculo_Jonatas_Moreira.pdf"
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
              >
                <FolderGit2 size={16} className="text-emerald-400" />
                <span>Baixar CV</span>
              </a>

              <div className="h-px bg-slate-800/80 my-1" />
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Alternar menu de navegação"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col items-center gap-1 group cursor-pointer"
        >
          <Image
            src={imgLogoDesk}
            alt="imagem do logotipo mobile"
            className="w-10 h-10 object-cover rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-all"
          />
          <ChevronDown
            size={14}
            className={`text-emerald-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "group-hover:translate-y-0.5"
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 p-6 flex flex-col gap-4 text-sm font-medium animate-in slide-in-from-top-4">
          <Link href="#projects" onClick={() => setIsOpen(false)} className="py-2 text-slate-300">
            Projetos
          </Link>

          <a
            href="mailto:jonatas.em25@gmail.com"
            onClick={() => setIsOpen(false)}
            className="py-2 text-slate-300 flex items-center gap-1.5"
          >
            <Mail size={16} className="text-emerald-400" />
            <span>Email</span>
          </a>

          <a
            href="/jonatas-moreira-desenvolvedor-full-stack.pdf"
            download="Curriculo_Jonatas_Moreira.pdf"
            onClick={() => setIsOpen(false)}
            className="py-2 text-slate-300 flex items-center gap-1.5"
          >
            <FolderGit2 size={16} className="text-emerald-400" /> Baixar CV
          </a>
        </div>
      )}
    </nav>
  );
};