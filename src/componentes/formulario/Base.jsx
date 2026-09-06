import React from "react";
import { useState } from "react";
import { DatosPersonales } from "./DatosPersonales";
import { FormacionAcademica } from "./Formacion_maxima";
import { EnviarCV } from "./Enviar_cv";


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
        otrasFormaciones: '',
        linkedin: '',
        experienciaDocencia: false,
        cv: ''
    })
    // aca vamos a crear la funcion que se va a ejecutar cuando se envie el formulario, esta funcion va a recibir el evento 'e' como parametro, 
    // evita que la pagina se recargue al enviar el formulario
    const handleSumbitForm = e => {
        e.preventDefault();
        console.log("Datos enviados:")
        alert("formulario enviado");
    }
    
    // Creo la funcion que se ejecuta cada vez que el usuario interactua con un campo (evento OnChange), 
    // donde recibe el evento "e" como parametro, extraigo de e.target las propiedades name, value, type y checked
    // uso valorFinal para ver si el campo es de tipo checkbox, si es asi toma el valor de checked, si no toma el valor de value
    // luego verifico si el campo es de tipo dni o telefono, si es asi filtramos para que solo acepte numeros
    // seteamos el estado de user usando prevUser para no perder los datos ya cargados y "..." para copiarlos
    // manteniendo la propiedad [name] : valorFinal

    const handleUsernameInput = (e) => {
        const { name, value, type, checked } = e.target;

        const valorFinal = type === "checkbox" ? checked : value;
        
        if (name === "dni" || name === "telefono") {
            const soloNumeros = value.replace(/\D/g, "");
            setUser(prevUser => ({ ...prevUser, [name]: soloNumeros }));
            return;
        }
        setUser(prevUser => ({ ...prevUser, [name]: valorFinal }))
    }
    // Aca es donde se renderiza los componentes del formulario, le asignamos el state 'user' y la funcion 'handleUsernameInput' a cada componente que necesite 
    // recibir los datos
    return (
        <>
            <div className="container p-2">
                <div className="card mx-auto ">
                    <div className="card-body">
                        <h5 className="text-center mb-3">Formulario de postulación Docente UNPilar</h5>
                        <img className="logo" src="./logo-unpi.png" alt="logo-unpi"/>
                        <form onSubmit={handleSumbitForm}>
                            <div className="datos-personales mb-2">
                                <DatosPersonales user={user} onChange={handleUsernameInput} />
                            </div>

                            <div className="formacion-academica mb-2">
                                <FormacionAcademica user={user} onChange={handleUsernameInput} />
                            </div>

                            <div className="enviar-cv mb-2">
                                <EnviarCV user={user} onChange={handleUsernameInput} />
                            </div>

                            <button onSubmit={handleSumbitForm} type="submit" className="btn btn-primary" style={{width:"40%"}}>Enviar</button>

                        </form>
                    </div>

                </div>



            </div>
        </>
    );
}