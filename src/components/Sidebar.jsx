import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaBirthdayCake,
  FaGraduationCap,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import foto from "../images/yo.jpg";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen bg-gray-900 text-white p-6 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:static lg:translate-x-0 lg:w-72 lg:flex lg:flex-col lg:items-center`}
      >
        <img src={foto} alt="Tu Foto" className="w-32 rounded-full mb-4" />
        <h1 className="text-xl font-bold mb-2">Cristian Capa</h1>
        <p className="text-sm text-gray-400 mb-2">Desarrollador Web</p>

        {/* Sección de Email */}
        <div className="w-full mb-4 hover:bg-gray-800 p-2 rounded-lg flex items-center gap-4 cursor-default">
          <MdEmail size={24} className="text-yellow-400 flex-shrink-0" />
          <div className="flex flex-col">
            <h2 className="font-bold text-white">Email</h2>
            <p className="text-sm text-gray-300">cristian.capa20@gmail.com</p>
          </div>
        </div>

        {/* Sección de Cumpleaños */}
        <div className="w-full mb-4 hover:bg-gray-800 p-2 rounded-lg flex items-center gap-4 cursor-default">
          <FaBirthdayCake size={24} className="text-yellow-400 flex-shrink-0" />
          <div className="flex flex-col">
            <h2 className="font-bold text-white">Cumpleaños</h2>
            <p className="text-sm text-gray-300">13 de septiembre, 2000</p>
          </div>
        </div>

        {/* Sección de Estudios */}
        <div className="w-full mb-4 hover:bg-gray-800 p-2 rounded-lg flex items-center gap-4 cursor-default">
          <FaGraduationCap size={24} className="text-yellow-400 flex-shrink-0" />
          <div className="flex flex-col">
            <h2 className="font-bold text-white">Estudios</h2>
            <p className="text-sm text-gray-300">
              Ingeniero en Ciencias de la Computación
            </p>
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="grid grid-cols-3 gap-4 w-full mb-5">
          <a
            href="https://www.linkedin.com/in/cristian-capa-834243205/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex justify-center"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/cristiancr20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex justify-center"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.instagram.com/capita_cr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex justify-center"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.tiktok.com/@capitacr.code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex justify-center"
          >
            <FaTiktok size={32} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 flex justify-center"
          >
            <FaYoutube size={32} />
          </a>
        </div>

        <a
          href="/CV_Cristian_Capa.pdf" // Asegúrate de cambiar esto a la ruta correcta de tu CV
          download="Cristian_Capa_CV.pdf"
          className="w-full mb-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 p-2 rounded-lg flex items-center justify-center"
        >
          <IoCloudDownloadOutline size={24} className="text-gray-900 mr-3" />
          Descargar CV
        </a>
      </div>

      {/* Overlay para cerrar el sidebar en pantallas pequeñas */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
