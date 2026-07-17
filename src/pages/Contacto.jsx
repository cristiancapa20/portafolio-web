import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCheck,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaRegCopy,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EMAIL = "cristian.capa20@gmail.com";

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/cristian-capa-834243205/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/cristiancr20", label: "GitHub" },
  { icon: FaXTwitter, href: "https://x.com/ca95010", label: "X" },
  { icon: FaInstagram, href: "https://www.instagram.com/capita_cr/", label: "Instagram" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@capitacr.code", label: "TikTok" },
  { icon: FaYoutube, href: "https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q", label: "YouTube" },
];

function Contacto() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <footer id="contacto" className="border-t border-line mt-10">
      <section className="max-w-content mx-auto px-6 py-24 md:py-32 text-center">
        <p className="font-mono text-accent text-sm mb-4" data-aos="fade-up">
          03. {t("contact.eyebrow")}
        </p>
        <h2
          className="font-display text-4xl md:text-5xl font-bold text-content mb-5"
          data-aos="fade-up"
        >
          {t("contact.title")}
        </h2>
        <p
          className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10"
          data-aos="fade-up"
        >
          {t("contact.description")}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          data-aos="fade-up"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 bg-accent text-bg font-semibold px-6 py-3 rounded-lg hover:bg-accent-soft transition-colors"
          >
            <FaEnvelope size={16} /> {t("contact.sendEmail")}
          </a>
          <button
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 border font-medium px-6 py-3 rounded-lg transition-colors ${
              copied
                ? "border-green-500/50 text-green-400"
                : "border-line text-content hover:border-accent/50 hover:text-accent"
            }`}
          >
            {copied ? <FaCheck size={14} /> : <FaRegCopy size={14} />}
            {copied ? t("contact.copied") : EMAIL}
          </button>
        </div>

        <div className="flex items-center justify-center gap-6" data-aos="fade-up">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </section>

      <div className="border-t border-line">
        <div className="max-w-content mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Cristian Capa
          </p>
          <p className="font-mono text-xs text-muted/70">
            {t("contact.footer")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contacto;
