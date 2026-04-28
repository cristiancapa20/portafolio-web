import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import foto from "../images/cristian-capa.jpeg";

function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col items-center w-72 min-h-screen bg-gray-900 text-white p-6 flex-shrink-0">
      <img src={foto} alt="Cristian Capa" className="w-32 h-40 rounded-2xl object-cover object-top mb-4" />
      <h1 className="text-xl font-bold mb-1">Cristian Capa</h1>
      <p className="text-sm text-gray-400 mb-4">Desarrollador Web</p>

      <div className="w-full mb-3 hover:bg-gray-800 p-2 rounded-lg flex items-center gap-3 cursor-default">
        <MdEmail size={22} className="text-yellow-400 flex-shrink-0" />
        <div className="flex flex-col overflow-hidden">
          <h2 className="font-bold text-white text-sm">Email</h2>
          <p className="text-xs text-gray-300 truncate">cristian.capa20@gmail.com</p>
        </div>
      </div>

      <div className="w-full mb-4 hover:bg-gray-800 p-2 rounded-lg flex items-center gap-3 cursor-default">
        <FaGraduationCap size={22} className="text-yellow-400 flex-shrink-0" />
        <div className="flex flex-col">
          <h2 className="font-bold text-white text-sm">Estudios</h2>
          <p className="text-xs text-gray-300">Ing. Ciencias de la Computación</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 w-full mb-5">
        <a href="https://www.linkedin.com/in/cristian-capa-834243205/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex justify-center transition-colors">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/cristiancr20" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex justify-center transition-colors">
          <FaGithub size={28} />
        </a>
        <a href="https://www.instagram.com/capita_cr/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex justify-center transition-colors">
          <FaInstagram size={28} />
        </a>
        <a href="https://www.tiktok.com/@capitacr.code" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex justify-center transition-colors">
          <FaTiktok size={28} />
        </a>
        <a href="https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex justify-center transition-colors">
          <FaYoutube size={28} />
        </a>
      </div>

      <a
        href="/CV_Cristian_Capa.pdf"
        download="Cristian_Capa_CV.pdf"
        className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 p-2 rounded-lg flex items-center justify-center transition-colors font-semibold text-sm"
      >
        <IoCloudDownloadOutline size={20} className="mr-2" />
        Descargar CV
      </a>
    </div>
  );
}

export default Sidebar;
