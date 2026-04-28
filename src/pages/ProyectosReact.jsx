import React from 'react';
import Card from '../components/Card';

const proyectos = [
  {
    title: "Control de Finanzas",
    img: require('../images/finlycr.png'),
    enlaceSitio: "https://www.finlycr.com/",
    githubLink: "https://github.com/cristiancr20", // TODO: agregar link del repo
    description: "Aplicación web para gestión de finanzas personales: registro de ingresos, gastos, categorías y reportes visuales.",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Bloc de notas",
    img: require('../images/blocnotas.png'),
    enlaceSitio: "https://react-bloc-notas.vercel.app/",
    githubLink: "https://github.com/cristiancr20",
    description: "App de notas con creación, edición y eliminación en tiempo real usando estado local.",
    tags: ["React", "LocalStorage"],
  },
  {
    title: "Gym Vitality",
    img: require('../images/gym-vitality.png'),
    enlaceSitio: "https://gym-vitality.vercel.app/",
    githubLink: "https://github.com/cristiancr20",
    description: "Landing page para gimnasio con secciones de servicios, planes y contacto.",
    tags: ["React", "Tailwind CSS"],
  },
];

function ProyectosReact() {
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

export default ProyectosReact;
