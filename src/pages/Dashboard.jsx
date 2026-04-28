import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { Inicio } from './Inicio';
import Categorias from './Proyectos';
import Historia from './Historia';
import Contacto from './Contacto';

function Dashboard() {
    const [activeSection, setActiveSection] = useState('Inicio');

    useEffect(() => {
        AOS.refresh();
    }, [activeSection]);

    const renderContent = () => {
        switch (activeSection) {
            case 'Inicio':
                return <Inicio />;
            case 'Proyectos':
                return <Categorias />;
            case 'SobreMi':
                return <Historia />;
            case 'Contacto':
                return <Contacto />;
            default:
                return <p>Selecciona una sección.</p>;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-800">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen">
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
                <div className="flex-1 p-6 bg-gray-800 overflow-hidden">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
