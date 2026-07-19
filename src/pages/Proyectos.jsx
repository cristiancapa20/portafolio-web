import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaRobot,
  FaProjectDiagram,
  FaUserNurse,
  FaLock,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import finlyWeb from "../images/finlycr-web.png";
import finlyMobile from "../images/finlycr-mobile.jpeg";

const featured = {
  title: "FinlyCR",
  img: finlyWeb,
  mobileImg: finlyMobile,
  tags: ["Next.js", "TypeScript", "React Native", "Expo", "Prisma", "Turso"],
  links: [
    { type: "web", href: "https://www.finlycr.com/" },
    {
      type: "play",
      href: "https://play.google.com/store/apps/details?id=com.capitacr.finlycr",
    },
    { type: "github", href: "https://github.com/cristiancr20" },
  ],
};

// Proyectos profesionales (trabajo de empresa: sin enlaces públicos)
const projects = [
  {
    key: "community",
    icon: SiFlutter,
    company: true,
    inProgress: true,
    tags: ["Flutter", "BLoC", "GraphQL", "Elixir/Ash", "LLM"],
  },
  {
    key: "symphony",
    icon: FaRobot,
    company: true,
    tags: ["Elixir", "Phoenix LiveView", "OTP", "Vue.js"],
  },
  {
    key: "aiagents",
    icon: FaProjectDiagram,
    company: true,
    tags: ["MCP", "Linear", "Cursor Agents", "GitHub"],
  },
  {
    key: "nurseloop",
    icon: FaUserNurse,
    company: true,
    tags: ["Payload CMS", "TypeScript", "Multi-tenant"],
  },
];

// Proyectos de práctica (enlaces directos, de-enfatizados)
const otros = [
  { key: "gym", href: "https://gym-vitality.vercel.app/" },
  { key: "barber", href: "https://sharp-cuts-barber.vercel.app/" },
];

const linkMeta = {
  web: { icon: FaExternalLinkAlt, labelKey: "projects.verSitio" },
  play: { icon: FaGooglePlay, labelKey: "projects.googlePlay" },
  github: { icon: FaGithub, labelKey: "projects.github" },
};

function LinkRow({ links }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map(({ type, href }) => {
        const { icon: Icon, labelKey } = linkMeta[type];
        return (
          <a
            key={type}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <Icon size={type === "github" ? 15 : 13} />
            {t(labelKey)}
          </a>
        );
      })}
    </div>
  );
}

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs text-muted bg-white/5 border border-line px-2.5 py-1 rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ icon: Icon, title, tagline, description, tags, inProgress }) {
  const { t } = useTranslation();
  return (
    <article className="group bg-surface border border-line rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
      {/* Cabecera de icono (proyectos sin captura pública) */}
      <div className="relative aspect-[16/7] bg-gradient-to-br from-surface-2 to-[#101216] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <Icon
          size={40}
          className="relative text-accent/80 group-hover:scale-110 transition-transform duration-500"
        />
        {inProgress && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-green-300 bg-green-400/10 border border-green-400/25 px-2 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t("projects.inProgress")}
          </span>
        )}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted bg-bg/60 border border-line px-2 py-1 rounded-md">
          <FaLock size={9} /> {t("projects.companyBadge")}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-display text-lg font-semibold text-content mb-1">
            {title}
          </h3>
          <p className="text-xs text-accent/90 mb-2">{tagline}</p>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto pt-1">
          <Tags tags={tags} />
        </div>
      </div>
    </article>
  );
}

const Proyectos = () => {
  const { t } = useTranslation();
  return (
    <section id="proyectos" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <div className="flex items-center gap-4 mb-14" data-aos="fade-up">
        <span className="font-mono text-accent text-sm">01.</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-content">
          {t("projects.title")}
        </h2>
        <span className="flex-1 h-px bg-line" />
      </div>

      {/* Destacado */}
      <article
        className="group bg-surface border border-line rounded-2xl overflow-hidden flex flex-col lg:flex-row mb-8 hover:border-accent/30 transition-colors"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#6d4bd8] to-[#452bbd] flex items-center justify-center p-8 min-h-[300px]">
          {/* Screenshot web */}
          <img
            src={featured.img}
            alt={`${featured.title} web`}
            className="w-full max-w-md rounded-lg border border-black/20 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
          {/* Screenshot móvil superpuesto */}
          <img
            src={featured.mobileImg}
            alt={`${featured.title} móvil`}
            className="absolute bottom-6 right-6 w-20 sm:w-24 rounded-xl border-4 border-black/40 shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-8 flex flex-col justify-center gap-5">
          <span className="font-mono text-xs text-accent uppercase tracking-widest">
            {t("projects.featured")}
          </span>
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-content mb-1">
              {featured.title}
            </h3>
            <p className="text-muted text-sm">{t("projects.finly.tagline")}</p>
          </div>
          <p className="text-muted leading-relaxed">
            {t("projects.finly.description")}
          </p>
          <Tags tags={featured.tags} />
          <div className="pt-2">
            <LinkRow links={featured.links} />
          </div>
        </div>
      </article>

      {/* Grid de proyectos profesionales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={p.key} data-aos="fade-up" data-aos-delay={i * 80}>
            <ProjectCard
              icon={p.icon}
              title={t(`projects.${p.key}.title`)}
              tagline={t(`projects.${p.key}.tagline`)}
              description={t(`projects.${p.key}.description`)}
              tags={p.tags}
              inProgress={p.inProgress}
            />
          </div>
        ))}
      </div>

      {/* Otros proyectos (práctica) */}
      <div className="mt-12" data-aos="fade-up">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
          {t("projects.otrosLabel")}
        </p>
        <div className="flex flex-wrap gap-3">
          {otros.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted bg-surface border border-line px-4 py-2 rounded-lg hover:text-accent hover:border-accent/30 transition-colors"
            >
              {t(`projects.${key}.title`)}
              <FaExternalLinkAlt size={11} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
