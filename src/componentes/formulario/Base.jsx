import React from "react";
import { useState } from "react";
import { DatosPersonales } from "./DatosPersonales";
import { FormacionAcademica } from "./Formacion_maxima";
import { EnviarCV } from "./Enviar_cv";
import { Residencia } from "./Residencia_del_usuario";

export function BaseForm() {
    // aca vamos a crear todas las variables que vamos a usar en el formulario, sirven para almacenar los datos que el usuario va ingresando
    // por ejemplo el nombre, apellido, dni, telefono,etc
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        correo: '',
        residencia: '',
        formacion: '',
        linkedin: '',
        experiencia: '',
        cv: ''
    })
    // aca vamos a crear la funcion que se va a ejecutar cuando se envie el formulario, esta funcion va a recibir el evento 'e' como parametro, 
    // evita que la pagina se recargue al enviar el formulario
    const handleSumbitForm = e => {
        e.preventDefault();
        console.log("Datos enviados:")
        alert("formulario enviado");
    }
    // aca vamos a crear la funcion que se va a ejecutar cuando el usuario escriba en el formulario, esta funcion va a recibir el evento 'e' como parametro
    // guarda los datos de e.target que recibio en handleSumbitForm y los guarda en las variables name y value, los seteo en la variable user con el :value para 
    // asignarle el valor a la propiedad del objeto, uso el prevUser para no perder los datos que ya se ingresaron y ... para spread (spread significa 
    // que va a tomar todos los valores de prevUser y los va a pasar a user)
    const handleUsernameInput = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }
    // Aca es donde se renderiza los componentes del formulario, le asignamos el state 'user' y la funcion 'handleUsernameInput' a cada componente que necesite 
    // recibir los datos
    return (
        <>
            <h1>Formulario de postulacion Docente UNPI</h1>
            <form onSubmit={handleSumbitForm}>
                <div className="datos-personales">
                    <DatosPersonales user={user} onChange={handleUsernameInput} />
                </div>

                <div className="residencia">
                    <Residencia user={user} onChange={handleUsernameInput} />
                </div>

                <div className="formacion-academica">
                    <FormacionAcademica user={user} onChange={handleUsernameInput} />
                </div>

                <div className="enviar-cv">
                    <EnviarCV user={user} onChange={handleUsernameInput} />
                </div>

                <button onSubmit={handleSumbitForm} type="submit" className="btn btn-primary">Enviar</button>

            </form>




        </>
    );
}