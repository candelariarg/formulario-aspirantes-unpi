import React, { useState } from "react";

export function LoginUsuario({ onLoginExitoso }) {
  const [credenciales, setCredenciales] = useState({
    correo: "",
    password: "",
  });

  const handleInputCambio = (e) => {
    const { name, value } = e.target;
    setCredenciales((prevCredenciales) => ({
      ...prevCredenciales,
      [name]: value,
    }));
  };

  const handleSumbitLogin = (e) => {
    e.preventDefault();
    onLoginExitoso();
  };

  return (
    <div className="container p-2">
      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="text-center mb-3">Acceso Panel de Control</h5>
          <img className="logo d-block mx-auto mb-4" src="./logo-unpi.png" alt="logo-unpi"/>
          <form onSubmit={handleSumbitLogin}>
            <div className="mb-3 text-start">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="correo"
                value={credenciales.correo}
                onChange={handleInputCambio}
                required
              />
            </div>
            <div className="mb-4 text-start">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credenciales.password}
                onChange={handleInputCambio}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}