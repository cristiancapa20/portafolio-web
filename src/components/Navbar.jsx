import React, { useState } from 'react';
import { FaBars, FaTimes, FaBuffer, FaGithub, FaInstagram, FaTiktok, FaYoutube, FaLinkedin, FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import { BiHomeAlt2, BiCategory } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoCloudDownloadOutline } from "react-icons/io5";
import foto from "../images/yo.jpg";

function Navbar({ activeSection, setActiveSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);  // Cerrar menú al hacer clic en un elemento
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-gray-800 text-white sticky top-0 w-full z-50">
            <div className="flex items-center justify-between max-w-screen-lg mx-auto p-4">
                {/* Título */}
                <div className='text-2xl font-bold text-yellow-400'>
                    {activeSection}
                </div>

                {/* Icono de Menú para móviles */}
                <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>

                {/* Menú de navegación - Solo visible en desktop */}
                <ul className='hidden lg:flex lg:items-center lg:space-x-6'>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Inicio')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <BiHomeAlt2 className='mr-2 text-yellow-400' size={20} /> Inicio
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Proyectos')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <BiCategory className='mr-2 text-yellow-400' size={20} /> Proyectos
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button onClick={() => handleClick('Historia')} className='flex items-center px-4 py-2 text-lg hover:bg-gray-700 w-full transition-colors rounded-lg'>
                            <FaBuffer className='mr-2 text-yellow-400' size={20} /> Historia
                        </button>
                    </li>
                </ul>
            </div>

            {/* Menú móvil expandido con información personal */}
            <div className={`lg:hidden fixed top-16 left-0 w-full h-screen bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out overflow-y-auto ${
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
            }`}>
                <div className="p-6 pb-20">
                    {/* Perfil del usuario */}
                    <div className="flex items-center mb-6 p-4 bg-gray-800 rounded-lg">
                        <img src={foto} alt="Tu Foto" className="w-12 h-16 rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-white">Cristian Capa</h2>
                            <p className="text-sm text-gray-400">Desarrollador Web</p>
                        </div>
                    </div>

                    {/* Navegación */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-yellow-400 mb-4">NAVEGACIÓN</h3>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => handleClick('Inicio')} 
                                    className={`flex items-center px-4 py-3 text-lg hover:bg-gray-800 w-full transition-colors rounded-lg ${
                                        activeSection === 'Inicio' ? 'bg-gray-800 text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    <BiHomeAlt2 className="mr-3 text-yellow-400" size={20} /> 
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleClick('Proyectos')} 
                                    className={`flex items-center px-4 py-3 text-lg hover:bg-gray-800 w-full transition-colors rounded-lg ${
                                        activeSection === 'Proyectos' ? 'bg-gray-800 text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    <BiCategory className="mr-3 text-yellow-400" size={20} /> 
                                    Proyectos
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => handleClick('Historia')} 
                                    className={`flex items-center px-4 py-3 text-lg hover:bg-gray-800 w-full transition-colors rounded-lg ${
                                        activeSection === 'Historia' ? 'bg-gray-800 text-yellow-400' : 'text-white'
                                    }`}
                                >
                                    <FaBuffer className="mr-3 text-yellow-400" size={20} /> 
                                    Historia
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-yellow-400 mb-4">INFORMACIÓN</h3>
                        
                        {/* Email */}
                        <div className="w-full mb-3 hover:bg-gray-800 p-3 rounded-lg flex items-center gap-4 cursor-default">
                            <MdEmail size={20} className="text-yellow-400 flex-shrink-0" />
                            <div className="flex flex-col">
                                <h4 className="font-bold text-white text-sm">Email</h4>
                                <p className="text-xs text-gray-300">cristian.capa20@gmail.com</p>
                            </div>
                        </div>

                        {/* Cumpleaños */}
                        <div className="w-full mb-3 hover:bg-gray-800 p-3 rounded-lg flex items-center gap-4 cursor-default">
                            <FaBirthdayCake size={20} className="text-yellow-400 flex-shrink-0" />
                            <div className="flex flex-col">
                                <h4 className="font-bold text-white text-sm">Cumpleaños</h4>
                                <p className="text-xs text-gray-300">13 de septiembre, 2000</p>
                            </div>
                        </div>

                        {/* Estudios */}
                        <div className="w-full mb-3 hover:bg-gray-800 p-3 rounded-lg flex items-center gap-4 cursor-default">
                            <FaGraduationCap size={20} className="text-yellow-400 flex-shrink-0" />
                            <div className="flex flex-col">
                                <h4 className="font-bold text-white text-sm">Estudios</h4>
                                <p className="text-xs text-gray-300">
                                    Ingeniero en Ciencias de la Computación
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-yellow-400 mb-4">REDES SOCIALES</h3>
                        <div className="grid grid-cols-5 gap-4">
                            <a
                                href="https://www.linkedin.com/in/cristian-capa-834243205/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 flex justify-center transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/cristiancr20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 flex justify-center transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/capita_cr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 flex justify-center transition-colors"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@capitacr.code"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 flex justify-center transition-colors"
                            >
                                <FaTiktok size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCA5siuRO1Ulb8OM35fXe-0Q"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-400 flex justify-center transition-colors"
                            >
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Descargar CV */}
                    <a
                        href="/CV_Cristian_Capa.pdf"
                        download="Cristian_Capa_CV.pdf"
                        className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 p-3 rounded-lg flex items-center justify-center transition-colors font-semibold"
                    >
                        <IoCloudDownloadOutline size={20} className="text-gray-900 mr-2" />
                        Descargar CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
