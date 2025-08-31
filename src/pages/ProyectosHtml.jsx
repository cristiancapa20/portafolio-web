import React from 'react';
import Card from '../components/Card';

// Lista de proyectos
const proyectos = [
  {
    title: "Semillas de Amor",
    img: require('../images/semillitas.png'),
    enlaceSitio: "https://web-site-emisora-radio.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "C&F",
    img: require('../images/websiteCF.png'),
    enlaceSitio: "https://web-site-proyect.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Cine Plus",
    img: require('../images/cinePlus.jpg'),
    enlaceSitio: "https://cineplus-capita.netlify.app",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Squid Game",
    img: require('../images/juegocalamar.jpg'),
    enlaceSitio: "https://squidgame-capita.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Tatto Salon",
    img: require('../images/tatto-salon.jpg'),
    enlaceSitio: "https://tatto-salon.netlify.app",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Starbucks",
    img: require('../images/starbucks.png'),
    enlaceSitio: "https://starbucks-web-design.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Tesla",
    img: require('../images/tesla.PNG'),
    enlaceSitio: "https://websitetesla.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Audifonos",
    img: require('../images/audifonos.PNG'),
    enlaceSitio: "https://headphonewebstore.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Login",
    img: require('../images/login.png'),
    enlaceSitio: "https://design-login-proyect.netlify.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Contact Us",
    img: require('../images/contact.png'),
    enlaceSitio: "https://web-contactus.netlify.app/",
    botonSitio: "Visitar Sitio"
  }
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
            botonSitio={proyecto.botonSitio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProyectosHtml;
