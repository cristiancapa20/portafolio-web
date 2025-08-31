import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta a tu Navbar sea correcta
import Sidebar from '../components/Sidebar'; // Asegúrate de que la ruta a tu Sidebar sea correcta

import { Inicio } from './Inicio';
import Categorias from './Proyectos';
import Historia from './Historia';

function Dashboard() {
    const [activeSection, setActiveSection] = useState('Inicio');

    const renderContent = () => {
        switch (activeSection) {
            case 'Inicio':
                return <Inicio />;
            case 'Proyectos':
                return <Categorias />;
            case 'Historia':
                return <Historia />;
            default:
                return <p>Selecciona una sección.</p>;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-800">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div className="flex-1 flex flex-col h-screen">
                {/* Navbar */}
                <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

                {/* Content */}
                <div className="flex-1 p-6 bg-gray-800 overflow-hidden">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
