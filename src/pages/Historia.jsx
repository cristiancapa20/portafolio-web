import React from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { FaMobileAlt, FaGraduationCap, FaTrophy } from "react-icons/fa";

const skills = [
  { icon: SiJavascript, name: "JavaScript", hover: "hover:text-yellow-400" },
  { icon: SiReact, name: "React", hover: "hover:text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", hover: "hover:text-content" },
  { icon: SiNodedotjs, name: "Node.js", hover: "hover:text-green-400" },
  { icon: SiTailwindcss, name: "Tailwind", hover: "hover:text-cyan-400" },
  { icon: SiMysql, name: "MySQL", hover: "hover:text-blue-300" },
  { icon: SiGit, name: "Git", hover: "hover:text-orange-400" },
  { icon: FaMobileAlt, name: "React Native", hover: "hover:text-purple-400" },
];

const experienceKeys = ["lambdo", "kirios", "nodo"];

function Tile({ className = "", children }) {
  return (
    <div
      className={`bg-surface border border-line rounded-2xl p-6 hover:border-accent/25 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

const Historia = () => {
  const { t } = useTranslation();
  return (
    <section id="sobremi" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <div className="flex items-center gap-4 mb-14" data-aos="fade-up">
        <span className="font-mono text-accent text-sm">02.</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-content">
          {t("about.title")}
        </h2>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid md:grid-cols-6 gap-4" data-aos="fade-up">
        {/* Bio */}
        <Tile className="md:col-span-4">
          <h3 className="font-display text-xl font-semibold text-content mb-4">
            {t("about.bioTitle")}
          </h3>
          <div className="space-y-3 text-muted leading-relaxed">
            <p>{t("about.bio1")}</p>
            <p>{t("about.bio2")}</p>
          </div>
        </Tile>

        {/* Ahora */}
        <Tile className="md:col-span-2 flex flex-col justify-center">
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
            {t("about.nowLabel")}
          </p>
          <p className="text-content leading-relaxed">
            <Trans
              i18nKey="about.now"
              components={{ acc: <span className="text-accent font-medium" /> }}
            />
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t("about.inProduction")}
          </span>
        </Tile>

        {/* Skills */}
        <Tile className="md:col-span-6">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
            {t("about.techLabel")}
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {skills.map(({ icon: Icon, name, hover }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 group"
                title={name}
              >
                <Icon
                  size={30}
                  className={`text-muted transition-colors ${hover}`}
                />
                <span className="text-[11px] text-muted text-center">{name}</span>
              </div>
            ))}
          </div>
        </Tile>

        {/* Experiencia */}
        <Tile className="md:col-span-3">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
            {t("about.experienceLabel")}
          </p>
          <ol className="relative border-l border-line ml-1">
            {experienceKeys.map((key) => (
              <li key={key} className="mb-6 last:mb-0 ml-5">
                <span className="absolute w-2.5 h-2.5 bg-accent rounded-full -left-[6px] mt-1.5" />
                <p className="font-mono text-xs text-muted mb-1">
                  {t(`about.experience.${key}.date`)}
                </p>
                <h4 className="text-content font-semibold">
                  {t(`about.experience.${key}.title`)}
                </h4>
                <p className="text-sm text-muted">
                  {t(`about.experience.${key}.org`)}
                </p>
                <p className="text-xs text-muted/70 mt-0.5">
                  {t(`about.experience.${key}.location`)}
                </p>
              </li>
            ))}
          </ol>
        </Tile>

        {/* Educación + Logro */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <Tile>
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-accent" size={20} />
              <p className="font-mono text-xs text-muted uppercase tracking-widest">
                {t("about.educationLabel")}
              </p>
            </div>
            <h4 className="text-content font-semibold">
              {t("about.education.title")}
            </h4>
            <p className="text-sm text-muted">{t("about.education.org")}</p>
            <p className="font-mono text-xs text-muted/70 mt-1">
              {t("about.education.meta")}
            </p>
          </Tile>
          <Tile className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <FaTrophy className="text-accent" size={18} />
              <p className="font-mono text-xs text-muted uppercase tracking-widest">
                {t("about.achievementLabel")}
              </p>
            </div>
            <h4 className="text-content font-semibold">
              {t("about.achievement.title")}
            </h4>
            <p className="text-sm text-muted">{t("about.achievement.desc")}</p>
          </Tile>
        </div>
      </div>
    </section>
  );
};

export default Historia;
