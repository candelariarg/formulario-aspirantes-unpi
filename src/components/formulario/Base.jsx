import React from "react";
import { useState } from "react";
import { DatosPersonales } from "./DatosPersonales";
import { FormacionAcademica } from "./formacion_maxima";
import { EnviarCV } from "./enviar_cv";

export function BaseForm() {


  //  const datos = e => {
        //Evita que el formulario se recargue e envie automaticamente
    //    e.preventDefault();
    //    alert("formulario enviado")
    //}
    return (
        <>
            <div className="datos-personales">
                <DatosPersonales />
            </div>

            <div className="formacion-academica">
                <FormacionAcademica />
            </div>

            <div className="enviar-cv">
                <EnviarCV />
            </div>

        



        </>
    );
}