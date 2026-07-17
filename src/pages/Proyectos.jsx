import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt, FaGooglePlay } from "react-icons/fa";

const featured = {
  title: "FinlyCR",
  img: require("../images/finlycr-web.png"),
  mobileImg: require("../images/finlycr-mobile.jpeg"),
  tags: ["React", "Node.js", "MySQL", "Tailwind CSS", "React Native"],
  links: [
    { type: "web", href: "https://www.finlycr.com/" },
    {
      type: "play",
      href: "https://play.google.com/store/apps/details?id=com.capitacr.finlycr",
    },
    { type: "github", href: "https://github.com/cristiancr20" },
  ],
};

const projects = [
  {
    key: "gym",
    img: require("../images/gym-vitality.png"),
    tags: ["React", "Tailwind CSS"],
    links: [
      { type: "web", href: "https://gym-vitality.vercel.app/" },
      { type: "github", href: "https://github.com/cristiancr20" },
    ],
  },
  {
    key: "barber",
    img: require("../images/sharp-cuts.png"),
    tags: ["Next.js", "Tailwind CSS"],
    links: [
      { type: "web", href: "https://sharp-cuts-barber.vercel.app/" },
      { type: "github", href: "https://github.com/cristiancr20" },
    ],
  },
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

function ProjectCard({ title, img, description, tags, links }) {
  return (
    <article className="group bg-surface border border-line rounded-xl overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-surface-2">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="font-display text-lg font-semibold text-content mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{description}</p>
        </div>
        <Tags tags={tags} />
        <div className="pt-3 mt-auto border-t border-line">
          <LinkRow links={links} />
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

      {/* Grid de proyectos secundarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={p.key} data-aos="fade-up" data-aos-delay={i * 80}>
            <ProjectCard
              title={t(`projects.${p.key}.title`)}
              description={t(`projects.${p.key}.description`)}
              img={p.img}
              tags={p.tags}
              links={p.links}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
