import React from "react";
import { useTranslation } from "react-i18next";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certs = [
  { key: "mcp", href: "https://verify.skilljar.com/c/2awnwccmygn3" },
  { key: "skills", href: "https://verify.skilljar.com/c/j9dqcok9p5vp" },
  { key: "claudecode", href: "https://verify.skilljar.com/c/6r9e3wjuknjg" },
  { key: "api", href: "https://verify.skilljar.com/c/op4dvc38uyiq" },
];

const Certificaciones = () => {
  const { t } = useTranslation();
  return (
    <section
      id="certificaciones"
      className="max-w-content mx-auto px-6 pb-24 md:pb-32"
    >
      <div className="flex items-center gap-4 mb-14" data-aos="fade-up">
        <span className="font-mono text-accent text-sm">03.</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-content">
          {t("certs.title")}
        </h2>
        <span className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((c, i) => (
          <a
            key={c.key}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={i * 70}
            className="group bg-surface border border-line rounded-xl p-5 flex flex-col gap-4 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <FaCertificate
                size={22}
                className="text-accent/80 group-hover:scale-110 transition-transform"
              />
              <span className="font-mono text-[11px] text-muted/70">
                {t(`certs.${c.key}.date`)}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-base font-semibold text-content leading-snug mb-1">
                {t(`certs.${c.key}.title`)}
              </h3>
              <p className="text-xs text-muted">{t("certs.issuer")}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-muted group-hover:text-accent transition-colors">
              {t("certs.verify")} <FaExternalLinkAlt size={10} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certificaciones;
