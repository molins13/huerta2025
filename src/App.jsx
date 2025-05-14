import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calendario from "./components/CalendarioTareas";
import Asociaciones from "./components/Asociaciones";
import PlanLluvias from "./components/PlanLluvias";
import PlanPreventivo from "./components/PlanPreventivo";
import Rotacion from "./components/Rotacion";
import TodasPlantas from "./components/TodasPlantas";
import Bibliografia from "./components/Bibliografia";

export default function App() {
  return (
    <Router>
      <div>
        <h1>Huerta2025</h1>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/calendario">Calendario de Tareas</Link></li>
            <li><Link to="/asociaciones">Asociaciones</Link></li>
            <li><Link to="/planlluvias">Plan Post-Lluvia</Link></li>
            <li><Link to="/planpreventivo">Plan Preventivo</Link></li>
            <li><Link to="/rotacion">Rotación de cultivos</Link></li>
            <li><Link to="/todas-plantas">Todas las plantas</Link></li>
            <li><Link to="/bibliografia">Bibliografía</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Bienvenido a la Huerta2025</h2>} />
          <Route path="/calendario" element={<Calendario />} />          
          <Route path="/asociaciones" element={<Asociaciones />} />
          <Route path="/planlluvias" element={<PlanLluvias />} /> 
          <Route path="/planpreventivo" element={<PlanPreventivo />} /> 
          <Route path="/rotacion" element={<Rotacion />} />
          <Route path="/todas-plantas" element={<TodasPlantas />} />
          <Route path="/bibliografia" element={<Bibliografia />} />
        </Routes>
      </div>
    </Router>
  );
}
