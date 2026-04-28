import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaCheck } from "react-icons/fa";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "cristian.capa20@gmail.com",
    href: "mailto:cristian.capa20@gmail.com",
    color: "text-yellow-400",
    bg: "hover:bg-yellow-400/10",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "cristian-capa",
    href: "https://www.linkedin.com/in/cristian-capa-834243205/",
    color: "text-blue-400",
    bg: "hover:bg-blue-400/10",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "cristiancr20",
    href: "https://github.com/cristiancr20",
    color: "text-white",
    bg: "hover:bg-white/10",
  },
];

function Contacto() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cristian.capa20@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="h-full bg-gray-900 text-white p-6 rounded-lg overflow-y-auto flex items-center justify-center">
      <div className="max-w-lg w-full text-center" data-aos="fade-up">

        <h2 className="text-3xl font-bold text-yellow-300 mb-3">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-10 text-base leading-relaxed">
          Estoy disponible para nuevas oportunidades — ya sea freelance,
          trabajo en equipo o simplemente charlar sobre tecnología.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          {contactLinks.map(({ icon: Icon, label, value, href, color, bg }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-4 bg-gray-800 rounded-xl p-4 transition-colors ${bg} group`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={`${color} flex-shrink-0`}>
                <Icon size={26} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                <p className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                  {value}
                </p>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-yellow-400 transition-colors text-lg">→</span>
            </a>
          ))}
        </div>

        <button
          onClick={handleCopyEmail}
          className={`inline-flex items-center gap-2 font-bold px-8 py-3 rounded-xl transition-all duration-300 text-base ${
            copied
              ? "bg-green-500 text-white scale-95"
              : "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
          }`}
        >
          {copied ? (
            <>
              <FaCheck size={16} />
              ¡Email copiado!
            </>
          ) : (
            "Copiar email"
          )}
        </button>

      </div>
    </div>
  );
}

export default Contacto;
