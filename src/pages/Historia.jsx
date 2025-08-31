import React from "react";

function Historia() {
  const educationData = [
    {
      date: "2005 - 2008",
      title: "Escuela Primaria",
      description: "Unidad Educativa Fiscomisional Mater Dei",
      location: "Loja, Ecuador",
    },
    {
      date: "2008 - 2012",
      title: "Escuela Primaria (Cambio de escuela)",
      description: "Unidad Educativa Fiscomisional Nuestra Señora del Rosario",
      location: "Catamayo-Loja, Ecuador",
    },
    {
      date: "2012 - 2018",
      title: "Bachillerato",
      description: "Unidad Educativa Fiscomisional Nuestra Señora del Rosario",
      location: "Catamayo-Loja, Ecuador",
    },
    {
      date: "2018 - 2025",
      title: "Universidad",
      description:
        "Universidad Nacional de Loja",
      location: "Loja, Ecuador",
    },
  ];

  const danceData = [
    {
      date: "2015 - 2018",
      title: "Grupo de Danza Institucional",
      description:
        "Participé en un grupo de danza que representó al colegio en varios eventos.",
      location: "Loja, Ecuador",
    },
    {
      date: "2017 - 2020",
      title: "Grupo de Danza Internacional",
      description:
        "Participé en un grupo de danza que realizó giras por varios países.",
      location: "Colombia 2017, Perú 2018",
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

  function TimeLine({ data, title }) {
    return (
      <div className="mb-10">
        {title && <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">{title}</h2>}
        <ol className="relative border-l border-yellow-200 dark:border-yellow-300 p-2">
          {data.map((item, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border dark:border-gray-900 bg-yellow-300"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-400">
                Ubicación: <span className="font-normal">{item.location}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-900 text-white p-6 rounded-lg overflow-y-auto custom-scrollbar">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <TimeLine data={achievementsData} title="Logros"/>
        </div>

        <div>
          <TimeLine data={danceData} title="Grupo de Baile" />
        </div>
        
        <div data-aos="fade-up">  
          <TimeLine data={educationData}  title="Educación" />
        </div>


      </div>
    </div>
  );
}

export default Historia;
