import React from 'react';
import Card from '../components/Card';

const proyectos = [
  {
    title: "Semillas de Amor",
    img: require('../images/semillitas.png'),
    enlaceSitio: "https://web-site-emisora-radio.netlify.app/",
    description: "Sitio web para emisora de radio con programación y noticias.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "C&F",
    img: require('../images/websiteCF.png'),
    enlaceSitio: "https://web-site-proyect.netlify.app/",
    description: "Sitio web corporativo con secciones de servicios y contacto.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Cine Plus",
    img: require('../images/cinePlus.jpg'),
    enlaceSitio: "https://cineplus-capita.netlify.app",
    description: "Plataforma de cine con cartelera, trailers y sistema de reservas.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Squid Game",
    img: require('../images/juegocalamar.jpg'),
    enlaceSitio: "https://squidgame-capita.netlify.app/",
    description: "Landing page temática de la serie con animaciones y efectos visuales.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tatto Salon",
    img: require('../images/tatto-salon.jpg'),
    enlaceSitio: "https://tatto-salon.netlify.app",
    description: "Sitio web para salón de tatuajes con galería y formulario de citas.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Starbucks",
    img: require('../images/starbucks.png'),
    enlaceSitio: "https://starbucks-web-design.netlify.app/",
    description: "Clon del diseño web de Starbucks con menú y secciones de productos.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Tesla",
    img: require('../images/tesla.PNG'),
    enlaceSitio: "https://websitetesla.netlify.app/",
    description: "Clon del sitio oficial de Tesla con scroll animado y secciones de modelos.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Audifonos",
    img: require('../images/audifonos.PNG'),
    enlaceSitio: "https://headphonewebstore.netlify.app/",
    description: "Tienda online de auriculares con carrusel de productos y diseño moderno.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Login Design",
    img: require('../images/login.png'),
    enlaceSitio: "https://design-login-proyect.netlify.app/",
    description: "Diseño de página de inicio de sesión con animaciones CSS.",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Contact Us",
    img: require('../images/contact.png'),
    enlaceSitio: "https://web-contactus.netlify.app/",
    description: "Página de contacto con formulario validado y diseño responsivo.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function ProyectosHtml() {
  return (
    <div className="w-full h-full bg-gray-900 text-white p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            title={proyecto.title}
            img={proyecto.img}
            enlaceSitio={proyecto.enlaceSitio}
            description={proyecto.description}
            tags={proyecto.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default ProyectosHtml;
