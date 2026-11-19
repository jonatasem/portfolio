'use client';

import { motion } from "framer-motion";
import { LuCpu, LuExternalLink, LuGithub } from "react-icons/lu";
import Image from "next/image";
import { type DataProjectProps } from "@/data/projects";

interface ProjectCardProps {
  project: DataProjectProps;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.deployUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-[88%] sm:w-full mx-auto group relative bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm cursor-pointer active:scale-[0.99]"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="w-full h-36 sm:h-44 overflow-hidden bg-slate-950 relative border-b border-slate-800/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
            {project.githubUrl && (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                }}
                title="Ver Código no GitHub"
                className="p-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-colors"
              >
                <LuGithub size={14} />
              </span>
            )}

            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-extrabold flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 group-hover:bg-emerald-400 transition-colors">
              <LuExternalLink size={12} /> Ver ao vivo
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-2">
          <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
        <div className="flex items-center flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
          {project.techs.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 bg-slate-950/90 text-emerald-400/90 rounded-md border border-slate-800 font-semibold"
            >
              #{tech}
            </span>
          ))}
          {project.techs.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-slate-400 rounded-md border border-slate-800 font-semibold">
              +{project.techs.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
};