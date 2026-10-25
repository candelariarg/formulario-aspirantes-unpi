import React, { useState } from 'react';
import "./App.css";
import { BaseForm } from "./componentes/formulario/Base";
import { LoginUsuario } from "./componentes/PanelAdministrador/Login_usuario";
import { PanelPrincipal } from "./componentes/PanelAdministrador/Panel_principal";

// Ruteo mínimo, sin librería de rutas: el backend genera el enlace de invitación
// como `${FRONTEND_URL}/postulacion?token=...` (ver generarEnlaceInvitacion).
// Por eso, si la URL trae ?token= o la ruta es /postulacion, se abre el formulario
// en lugar del login de RRHH.
function vistaInicial() {
  const params = new URLSearchParams(window.location.search);
  const esRutaPostulacion = window.location.pathname.startsWith("/postulacion");
  return params.get("token") || esRutaPostulacion ? "formulario" : "login";
}

function App() {
  const [vistaActual, setVistaActual] = useState(vistaInicial);

  const manejarLoginExitoso = () => {
    setVistaActual("panel");
  };

  return (
    <div className="App">
      {/* Menú de navegación SOLO para desarrollo. Antes se renderizaba siempre:
          en producción quedaba visible y permitía abrir el panel sin credenciales. */}
      {import.meta.env.DEV && (
        <div style={{ position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)", zIndex: 9999, backgroundColor: "rgba(255,255,255,0.9)", padding: "10px", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}>
          <span className="me-3 fw-bold text-dark">Navegación de prueba:</span>
          <button
            className={`btn btn-sm ${vistaActual === "formulario" ? "btn-primary" : "btn-outline-primary"} me-2`}
            onClick={() => setVistaActual("formulario")}
          >
            Formulario
          </button>
          <button
            className={`btn btn-sm ${vistaActual === "login" ? "btn-primary" : "btn-outline-primary"} me-2`}
            onClick={() => setVistaActual("login")}
          >
            Login Admin
          </button>
          <button
            className={`btn btn-sm ${vistaActual === "panel" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setVistaActual("panel")}
          >
            Panel
          </button>
        </div>
      )}

      {vistaActual === "formulario" && <BaseForm />}
      {vistaActual === "login" && <LoginUsuario onLoginExitoso={manejarLoginExitoso} />}
      {vistaActual === "panel" && <PanelPrincipal />}
    </div>
  );
}

export default App;
