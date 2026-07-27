import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaRobot,
  FaProjectDiagram,
  FaUserNurse,
  FaLock,
  FaShieldAlt,
  FaThList,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import finlyWeb from "../images/finlycr-web.png";
import finlyMobile from "../images/finlycr-mobile.jpeg";
import passwordSaveImg from "../images/password-save.png";
import catalogSkillsImg from "../images/catalog-skills.png";

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
  ],
};

// Proyectos profesionales (empresa: sin enlaces públicos) y personales (repo abierto)
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
  {
    key: "passwordsave",
    icon: FaShieldAlt,
    img: passwordSaveImg,
    company: false,
    tags: ["Next.js", "TypeScript", "Prisma", "Web Crypto", "Docker"],
    links: [
      { type: "github", href: "https://github.com/cristiancapa20/password-save" },
    ],
  },
  {
    key: "catalogskills",
    icon: FaThList,
    img: catalogSkillsImg,
    company: false,
    tags: ["Node.js", "CLI", "Zero-deps"],
    links: [
      { type: "github", href: "https://github.com/cristiancapa20/catalog-skills" },
    ],
  },
];

const linkMeta = {
  web: { icon: FaExternalLinkAlt, labelKey: "projects.verSitio" },
  play: { icon: FaGooglePlay, labelKey: "projects.googlePlay" },
  github: { icon: FaGithub, labelKey: "projects.github" },
};

const filters = [
  { id: "all", labelKey: "projects.filterAll", match: () => true },
  { id: "company", labelKey: "projects.filterCompany", match: (p) => p.company },
  {
    id: "personal",
    labelKey: "projects.filterPersonal",
    match: (p) => !p.company,
  },
];

function FilterTabs({ active, onChange }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-2 mb-6" role="tablist">
      {filters.map(({ id, labelKey, match }) => {
        const count = projects.filter(match).length;
        const isActive = id === active;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-3.5 py-2 rounded-lg border transition-colors ${
              isActive
                ? "text-accent bg-accent/10 border-accent/40"
                : "text-muted bg-surface border-line hover:text-content hover:border-accent/30"
            }`}
          >
            {t(labelKey)}
            <span className={isActive ? "text-accent/70" : "text-muted/60"}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

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

function ProjectCard({
  icon: Icon,
  img,
  title,
  tagline,
  description,
  tags,
  inProgress,
  company,
  links,
}) {
  const { t } = useTranslation();
  return (
    <article className="group bg-surface border border-line rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
      {/* Captura si el proyecto es público; si no, cabecera de icono */}
      <div className="relative aspect-[16/7] bg-gradient-to-br from-surface-2 to-[#101216] flex items-center justify-center overflow-hidden">
        {img ? (
          <>
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/30" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-30" />
            <Icon
              size={40}
              className="relative text-accent/80 group-hover:scale-110 transition-transform duration-500"
            />
          </>
        )}
        {inProgress && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-green-300 bg-green-400/10 border border-green-400/25 px-2 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t("projects.inProgress")}
          </span>
        )}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted bg-bg/60 border border-line px-2 py-1 rounded-md">
          {company ? (
            <>
              <FaLock size={9} /> {t("projects.companyBadge")}
            </>
          ) : (
            <>
              <FaGithub size={10} /> {t("projects.openSourceBadge")}
            </>
          )}
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
        <div className="mt-auto pt-1 flex flex-col gap-4">
          <Tags tags={tags} />
          {links?.length > 0 && <LinkRow links={links} />}
        </div>
      </div>
    </article>
  );
}

const Proyectos = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => projects.filter(filters.find((f) => f.id === filter).match),
    [filter],
  );

  // Las cartas se re-montan al filtrar y AOS las dejaría invisibles
  // (opacity 0) porque solo escanea el DOM al arrancar.
  useEffect(() => {
    AOS.refreshHard();
  }, [filter]);

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

      {/* Filtros + grid de proyectos */}
      <FilterTabs active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((p, i) => (
          <div key={p.key} data-aos="fade-up" data-aos-delay={i * 80}>
            <ProjectCard
              icon={p.icon}
              img={p.img}
              title={t(`projects.${p.key}.title`)}
              tagline={t(`projects.${p.key}.tagline`)}
              description={t(`projects.${p.key}.description`)}
              tags={p.tags}
              inProgress={p.inProgress}
              company={p.company}
              links={p.links}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
