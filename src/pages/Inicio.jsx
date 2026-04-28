import React from "react";
import Typewriter from "typewriter-effect";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

const skills = [
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, name: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-300" },
  { icon: SiGit, name: "Git", color: "text-orange-400" },
  { icon: FaMobileAlt, name: "React Native", color: "text-purple-400" },
];

const Inicio = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-gray-900 text-white p-6 rounded-lg overflow-y-auto">

      {/* Hero */}
      <div className="text-center max-w-2xl mb-8 mt-4 lg:mt-10" data-aos="fade-down">
        <div className="text-xl font-bold mb-3 text-gray-400 min-h-[2rem]">
          <Typewriter
            options={{
              strings: [
                "Desarrollador Web Full Stack",
                "Desarrollador React & Next.js",
                "Desarrollador Mobile",
                "Creador de Soluciones Digitales",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              cursor: "_",
            }}
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-yellow-300">
          ¡Hola, soy Cristian!
        </h1>
        <p className="text-gray-300 text-base leading-relaxed">
          Desarrollador web con experiencia en empresa, apasionado por construir
          aplicaciones web y mobile que resuelven problemas reales. Actualmente
          desarrollo una app de control de finanzas personales y su versión mobile.
        </p>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 w-full max-w-lg"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="text-center bg-gray-800 rounded-lg p-3 sm:p-4">
          <p className="text-2xl sm:text-3xl font-bold text-yellow-400">1+</p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Experiencia</p>
        </div>
        <div className="text-center bg-gray-800 rounded-lg p-3 sm:p-4">
          <p className="text-2xl sm:text-3xl font-bold text-yellow-400">10+</p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Proyectos</p>
        </div>
        <div className="text-center bg-gray-800 rounded-lg p-3 sm:p-4">
          <p className="text-2xl sm:text-3xl font-bold text-yellow-400">2</p>
          <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Apps activas</p>
        </div>
      </div>

      {/* Skills */}
      <div className="w-full max-w-2xl" data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-lg font-bold text-center text-yellow-300 mb-5">
          Tecnologías
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {skills.map(({ icon: Icon, name, color }, index) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors"
              data-aos="zoom-in"
              data-aos-delay={350 + index * 50}
            >
              <Icon size={28} className={color} />
              <span className="text-xs text-gray-300 text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export { Inicio };
