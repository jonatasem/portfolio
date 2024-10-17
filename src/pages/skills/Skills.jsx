import angular from "../../assets/svg/angular.svg";
import figma from "../../assets/svg/figma.svg";
import git from "../../assets/svg/git.svg";
import mongodb from "../../assets/svg/mongodb.svg";
import javascript from "../../assets/svg/javascript.svg";
import mysql from "../../assets/svg/mysql.svg";
import next from "../../assets/svg/next.svg";
import php from "../../assets/svg/php.svg";
import react from "../../assets/svg/react.svg";
import typescript from "../../assets/svg/typescript.svg";
import nodejs from "../../assets/svg/nodejs.svg";
import express from "../../assets/svg/express.svg";
import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import laravel from "../../assets/svg/laravel.svg";
import wordpress from "../../assets/svg/wordpress.svg";

import "./Skills.scss";

export default function Skills() {
  const techStack = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Next", icon: next },
    { name: "TypeScript", icon: typescript },
    { name: "Angular", icon: angular },
    { name: "PHP", icon: php },
    { name: "Lavavel", icon: laravel },
    { name: "MySQL", icon: mysql },
    { name: "NodeJS", icon: nodejs },
    { name: "Express", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Git", icon: git },
    { name: "Figma", icon: figma },
    { name: "WordPress", icon: wordpress },
  ];

  return (
    <>
      <div className="container-skills" id="skills">
        <h2 className="title-page">Tecnologias</h2>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index} className="technology-item">
              <img
                src={tech.icon}
                alt={`${tech.name} icon`}
                className="technology-icon"
              />
              <span className="technology-name">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
