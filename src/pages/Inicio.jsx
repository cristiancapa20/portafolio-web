import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import foto from "../images/cristian-capa.jpeg";

const socials = [
  { icon: FaGithub, href: "https://github.com/cristiancr20", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/cristian-capa-834243205/",
    label: "LinkedIn",
  },
  { icon: MdEmail, href: "mailto:cristian.capa20@gmail.com", label: "Email" },
];

const Inicio = () => {
  const { t } = useTranslation();
  return (
    <section
      id="inicio"
      className="relative grid-bg min-h-[calc(100vh-72px)] flex items-center"
    >
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative max-w-content mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          {/* Texto */}
          <div className="animate-fade-up">
            <p className="font-mono text-accent text-sm mb-5 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-accent" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-display font-bold text-content leading-[1.05] tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-6">
              Cristian Capa
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-8">
              <Trans
                i18nKey="hero.intro"
                components={{ hl: <span className="text-content" /> }}
              />
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-lg hover:bg-accent-soft transition-colors"
              >
                {t("hero.verProyectos")} <FaArrowRight size={14} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 border border-line text-content font-medium px-6 py-3 rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
              >
                {t("hero.contacto")}
              </a>
            </div>

            <div className="flex items-center gap-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-accent transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="hidden md:flex justify-center animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-accent/10 blur-2xl" />
              <img
                src={foto}
                alt="Cristian Capa"
                className="relative w-64 h-80 object-cover object-top rounded-2xl border border-line grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Inicio };
