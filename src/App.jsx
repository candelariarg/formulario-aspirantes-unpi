import React, { useState } from 'react';
import "./App.css";
import { BaseForm } from "./componentes/formulario/Base"
import { LoginUsuario } from "./componentes/PanelAdministrador/Login_usuario"

function App() {
  // Estado para alternar vistas. Inicia en 'formulario' por defecto.
  const [vistaActual, setVistaActual] = useState("formulario"); 

  return (
    <div className="App">
      
      {/* --- MENÚ TEMPORAL DE DESARROLLO PARA EL EQUIPO --- */}
      {/* Estos botones nos permiten probar las vistas sin tener que instalar React Router todavía */}
      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 9999, backgroundColor: "rgba(255,255,255,0.8)", padding: "10px", borderRadius: "8px" }}>
        <span className="me-3 fw-bold text-dark">Navegación de prueba:</span>
        <button 
          className={`btn btn-sm ${vistaActual === "formulario" ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => setVistaActual("formulario")}
        >
          Formulario
        </button>
        <button 
          className={`btn btn-sm ${vistaActual === "login" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setVistaActual("login")}
        >
          Login Admin
        </button>
      </div>
      {/* -------------------------------------------------- */}

      {/* Renderizado de la vista seleccionada */}
      {vistaActual === "formulario" ? <BaseForm /> : <LoginUsuario />}
      
    </div>
  );
}

export default App;