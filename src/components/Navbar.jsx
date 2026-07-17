import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ids = ["inicio", "proyectos", "sobremi", "contacto"];

function LangToggle({ className = "" }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2);
  const other = current === "es" ? "en" : "es";
  return (
    <button
      onClick={() => i18n.changeLanguage(other)}
      aria-label={`Cambiar idioma a ${other.toUpperCase()}`}
      className={`font-mono text-xs font-medium border border-line rounded-md px-2 py-1 text-muted hover:text-accent hover:border-accent/50 transition-colors ${className}`}
    >
      <span className={current === "es" ? "text-accent" : ""}>ES</span>
      <span className="text-muted/40 mx-1">/</span>
      <span className={current === "en" ? "text-accent" : ""}>EN</span>
    </button>
  );
}

function Navbar() {
  const { t } = useTranslation();
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: resalta la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 h-[72px]">
        <a
          href="#inicio"
          className="font-display font-bold text-lg tracking-tight text-content"
        >
          Cristian<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {ids.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active === id ? "text-accent" : "text-muted hover:text-content"
              }`}
            >
              <span className="font-mono text-accent/60 mr-1 text-xs">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {t(`nav.${id}`)}
            </a>
          ))}
          <a
            href="/CV_Cristian_Capa.pdf"
            download="Cristian_Capa_CV.pdf"
            className="ml-3 inline-flex items-center gap-2 border border-accent/40 text-accent hover:bg-accent/10 text-sm font-medium px-4 py-2 rounded-md transition-colors"
          >
            <IoCloudDownloadOutline size={16} /> {t("nav.cv")}
          </a>
          <LangToggle className="ml-2" />
        </div>

        {/* Botón móvil */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="text-content"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-bg/95 backdrop-blur-md border-b border-line ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {ids.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-base font-medium ${
                active === id ? "text-accent" : "text-content"
              }`}
            >
              <span className="font-mono text-accent/60 mr-2 text-sm">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {t(`nav.${id}`)}
            </a>
          ))}
          <a
            href="/CV_Cristian_Capa.pdf"
            download="Cristian_Capa_CV.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-bg font-semibold px-4 py-3 rounded-md"
          >
            <IoCloudDownloadOutline size={18} /> {t("nav.descargarCV")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
