import React, { useState } from "react";

export function LoginUsuario() {
  // Aca creo la variable 'credenciales' usando useState. 
  // Va a ser un objeto para guardar lo que el admin escriba en el correo y la contraseña.
  const [credenciales, setCredenciales] = useState({
    correo: "",
    password: "",
  });

  // Creo la funcion que se ejecuta cada vez que el usuario interactua con un campo (evento OnChange).
  // Recibe el evento "e", y extraigo el name (para saber si es correo o password) y el value (lo que escribió).
  const handleInputCambio = (e) => {
    const { name, value } = e.target;
    
    // Actualizo el estado conservando lo que ya habia (con prevCredenciales) y pisando el campo modificado.
    setCredenciales((prevCredenciales) => ({
      ...prevCredenciales,
      [name]: value,
    }));
  };

  // Esta funcion se ejecuta cuando el admin aprieta el boton de "Ingresar" o da Enter.
  const handleSumbitLogin = (e) => {
    e.preventDefault(); // Evito que la pagina se recargue al mandar el formulario
    
    // Como el backend lo hace otro equipo, por ahora solo muestro en consola los datos 
    // para asegurar que mi frontend los esta guardando bien.
    console.log("Datos listos para mandar al backend:", credenciales);
    alert("Intentando iniciar sesión...");
  };

  return (
    <>
      <div className="container p-2">
        {/* Uso la misma estructura de tarjeta que en el formulario, 
            pero le pongo un max-width mas chico porque un login no necesita tanto espacio */}
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h5 className="text-center mb-3">Acceso Panel de Control</h5>
            
            {/* Reutilizo la clase logo que ya tengo en App.css */}
            <img className="logo d-block mx-auto mb-4" src="./logo-unpi.png" alt="logo-unpi"/>
            
            <form onSubmit={handleSumbitLogin}>
              
              {/* Campo para el Correo electronico */}
              <div className="mb-3 text-start">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  name="correo" // Este name tiene que coincidir exacto con la propiedad del useState
                  value={credenciales.correo}
                  onChange={handleInputCambio}
                  required
                />
              </div>

              {/* Campo para la Contraseña */}
              <div className="mb-4 text-start">
                <label className="form-label">Contraseña</label>
                <input
                  type="password" // Le pongo tipo password para que se oculten los caracteres
                  className="form-control"
                  name="password" // Coincide con la propiedad del useState
                  value={credenciales.password}
                  onChange={handleInputCambio}
                  required
                />
              </div>

              {/* Boton para enviar */}
              <button type="submit" className="btn btn-primary w-100">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}