import React from 'react';
import Card from '../components/Card';

const proyectos = [
  {
    title: "Barber Shop",
    img: require('../images/sharp-cuts.png'),
    enlaceSitio: "https://sharp-cuts-barber.vercel.app/",
    githubLink: "https://github.com/cristiancr20",
    description: "Sitio web para barbería con galería de trabajos, servicios y sección de contacto.",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

function ProyectosNext() {
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
            githubLink={proyecto.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default ProyectosNext;
