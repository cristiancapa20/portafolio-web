import React, { useState } from "react";

import ProyectosHtml from "./ProyectosHtml";
import ProyectosReact from "./ProyectosReact";
import ProyectosNext from "./ProyectosNext";

const Proyectos = () => {
  const [activeTab, setActiveTab] = useState("react");

  return (
    <div className="h-full bg-gray-900 text-white p-6 rounded-lg flex flex-col">
      <div className="text-center mb-6 flex-shrink-0">
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center border-b border-gray-700">
          <li className="me-2">
            <a
              href="#"
              onClick={() => setActiveTab("html")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "html"
                  ? "text-yellow-400 bg-gray-800"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
              }`}
            >
              HTML
            </a>
          </li>

          <li className="me-2">
            <a
              href="#"
              onClick={() => setActiveTab("react")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "react"
                  ? "text-yellow-400 bg-gray-800"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
              }`}
            >
              REACT
            </a>
          </li>

          <li className="me-2">
            <a
              href="#"
              onClick={() => setActiveTab("next")}
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === "next"
                  ? "text-yellow-400 bg-gray-800"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
              }`}
            >
              NEXT
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {activeTab === "react" && <ProyectosReact />}
        {activeTab === "html" && <ProyectosHtml />}
        {activeTab === "next" && <ProyectosNext />}
      </div>
    </div>
  );
};

export default Proyectos;
