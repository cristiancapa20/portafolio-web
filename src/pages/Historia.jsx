import React from "react";

function Historia() {
  const experienceData = [
    {
      date: "may. 2025 - actualidad",
      title: "Desarrollador de Software",
      description: "Lambdo · Jornada completa",
      location: "Remoto",
    },
    {
      date: "may. 2024 - jul. 2024 · 3 meses",
      title: "Pasante",
      description: "Kiriosnet · Jornada parcial — Desarrollo web y front end.",
      location: "Loja, Ecuador · Presencial",
    },
    {
      date: "oct. 2022 - feb. 2023 · 5 meses",
      title: "Pasante",
      description: "NODO Cía. Ltda. · Contrato de prácticas — HTML5 y desarrollo front end.",
      location: "Ecuador",
    },
  ];

  const educationData = [
    {
      date: "2018 - 2025",
      title: "Ingeniería en Ciencias de la Computación",
      description: "Universidad Nacional de Loja",
      location: "Loja, Ecuador",
    },
  ];

  const achievementsData = [
    {
      date: "2023",
      title: "CTF Internacional TIC MetaRed 2023",
      description: "Ganador de la quinta etapa a nivel de universidades",
      location: "Loja, Ecuador",
    },
  ];

  function TimeLine({ data, title, delay = 0 }) {
    return (
      <div className="mb-8" data-aos="fade-up" data-aos-delay={delay}>
        {title && (
          <h2 className="text-lg font-bold mb-4 text-yellow-300 border-b border-gray-700 pb-2">
            {title}
          </h2>
        )}
        <ol className="relative border-l border-yellow-300">
          {data.map((item, index) => (
            <li key={index} className="mb-8 ml-5">
              <div className="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
              <time className="mb-1 text-sm text-gray-400">{item.date}</time>
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">{item.location}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900 text-white p-6 rounded-lg overflow-y-auto">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <TimeLine data={experienceData} title="Experiencia Laboral" delay={0} />
          <TimeLine data={achievementsData} title="Logros" delay={150} />
        </div>
        <div>
          <TimeLine data={educationData} title="Educación" delay={100} />
        </div>
      </div>
    </div>
  );
}

export default Historia;
