import React from "react";
import Typewriter from "typewriter-effect";

const Inicio = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white p-6 rounded-lg overflow-y-auto">
      <div className="text-center max-w-2xl">
        <div className="text-4xl font-extrabold mb-6 text-gray-400">
          <Typewriter
            options={{
              strings: [
                "Desarrollador Web",
                "Programador",
                "Amante de la Tecnología",
                "Creador de Soluciones",
                "Entusiasta del Diseño",
                "Desarrollador en Crecimiento"
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              cursor: "_",
            }}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-yellow-300">¡Bienvenido a mi sitio!</h1>
        <p className="text-xl mb-4">
          Soy Cristian Capa, un apasionado desarrollador web. Aquí puedes encontrar algunos de mis proyectos y servicios.
        </p>
      </div>
    </div>
  );
};

export { Inicio };
