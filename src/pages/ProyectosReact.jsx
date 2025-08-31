import React from 'react';
import Card from '../components/Card';

// Lista de proyectos
const proyectos = [
  {
    title: "Bloc de notas",
    img: require('../images/blocnotas.png'),
    enlaceSitio: "https://react-bloc-notas.vercel.app/",
    botonSitio: "Visitar Sitio"
  },
  {
    title: "Gym Vitality" ,
    img: require('../images/gym-vitality.png'),
    enlaceSitio: "https://gym-vitality.vercel.app/",
    botonSitio: "Visitar Sitio"
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
          />
        ))}
      </div>
    </div>
  );
}

export default ProyectosReact;
