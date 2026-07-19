import React from "react";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'


import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* RUTAS DE USER NORMAL*/}
        <Route path="/" element={<Dashboard />} />
        

      </Routes>
    </Router>
  );
}

export default App;
