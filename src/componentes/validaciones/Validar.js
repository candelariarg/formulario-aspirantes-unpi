//Aca van las validaciones para cada uno de los campos del formulario.
//Busque como se validaba en React esos datos y me aparecieron estos codigos generales, se utiliza Regex.
export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const regexCorreo = regexEmail;

export const regexDni = /^\d{7,8}$/;

export const regexTelefono = /^\d{10,15}$/;

//Esta funcion se fija campo por campo, si es que el usuario completo bien los datos.
//Por lo que vi, para que no quede un matete de "if... else..." por cada dato, se puede usar el "switch" y el "case".
export function campoCompletado(nombreDelCampo, valor) {
  switch (nombreDelCampo) { //El switch aca va a ir chequeando cada uno de los campos del formulario, y el case va a ser cada uno de los campos que se van a validar.
    //Switch significa "chequear", y case significa "caso", o sea, cada caso del formulario que se va a chequear. Osea cada campo.
    case "nombre":
    case "apellido":
      //Que no este vacio.
      return typeof valor === "string" && valor.trim().length > 0;

    case "dni":
      return typeof valor === "string" && regexDni.test(valor.trim());

    case "telefono":
      return typeof valor === "string" && regexTelefono.test(valor.trim());

    case "correo":
      return typeof valor === "string" && regexCorreo.test(valor.trim());

    case "nivelTitulacion":
      //Esta bien si el usuario ya eligio alguna opcion (no quedo vacio).
      return valor !== "" && valor !== null && valor !== undefined;

    case "experienciaDocencia":
      return valor !== "" && valor !== null && valor !== undefined;

    case "cv":
      //Esta bien si hay un archivo cargado (osea, no es null).
      return valor !== null && valor !== undefined;

    default:
      return true;
  }
}


