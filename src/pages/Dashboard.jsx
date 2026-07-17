import React from "react";
import Navbar from "../components/Navbar";
import { Inicio } from "./Inicio";
import Proyectos from "./Proyectos";
import Historia from "./Historia";
import Contacto from "./Contacto";

function Dashboard() {
  return (
    <div className="min-h-screen bg-bg text-content font-sans antialiased">
      <Navbar />
      <main>
        <Inicio />
        <Proyectos />
        <Historia />
        <Contacto />
      </main>
    </div>
  );
}

export default Dashboard;
