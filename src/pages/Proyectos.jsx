import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featured = {
  title: "FinlyCR",
  img: require("../images/finlycr.png"),
  enlaceSitio: "https://www.finlycr.com/",
  githubLink: "https://github.com/cristiancr20",
  description:
    "Aplicación web para gestión de finanzas personales: registra egresos e ingresos, gestiona cuentas bancarias y lleva seguimiento de préstamos y suscripciones. Disponible también como app móvil (PWA).",
  tags: ["React", "Node.js", "MySQL", "Tailwind CSS", "PWA"],
};

const projects = [
  {
    title: "Gym Vitality",
    img: require("../images/gym-vitality.png"),
    enlaceSitio: "https://gym-vitality.vercel.app/",
    githubLink: "https://github.com/cristiancr20",
    description: "Landing page para gimnasio con secciones de servicios, planes y contacto.",
    tags: ["React", "Tailwind CSS"],
    inProgress: false,
  },
  {
    title: "Barber Shop",
    img: require("../images/sharp-cuts.png"),
    enlaceSitio: "https://sharp-cuts-barber.vercel.app/",
    githubLink: "https://github.com/cristiancr20",
    description: "Sitio web para barbería con galería de trabajos, servicios y sección de contacto.",
    tags: ["Next.js", "Tailwind CSS"],
    inProgress: false,
  },
  {
    title: "FinlyCR Mobile",
    img: require("../images/finlycr.png"),
    enlaceSitio: null,
    githubLink: "https://github.com/cristiancr20",
    description: "App móvil de FinlyCR: gestión de finanzas personales en tu bolsillo. Disponible próximamente.",
    tags: ["React Native", "Expo"],
    inProgress: true,
  },
];

function FeaturedCard({ title, img, enlaceSitio, githubLink, description, tags }) {
  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
    >
      <a
        href={enlaceSitio}
        target="_blank"
        rel="noopener noreferrer"
        className="md:w-1/2 flex-shrink-0"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-56 md:h-full object-cover object-top"
        />
      </a>
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2 py-1 bg-yellow-400 text-gray-900 rounded-full">
              Proyecto destacado
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={enlaceSitio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
          >
            <FaExternalLinkAlt size={12} /> Ver sitio
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
            >
              <FaGithub size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, img, enlaceSitio, githubLink, description, tags, inProgress }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img src={img} alt={title} className="w-full h-44 object-cover" />
        {inProgress && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            En progreso
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-gray-700 text-yellow-400 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2 border-t border-gray-700">
          {enlaceSitio && (
            <a
              href={enlaceSitio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaExternalLinkAlt size={11} /> Ver sitio
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const Proyectos = () => {
  return (
    <div className="h-full bg-gray-900 text-white p-6 rounded-lg overflow-y-auto">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <FeaturedCard {...featured} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
