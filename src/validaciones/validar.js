//Aca van las validaciones para cada uno de los campos del formulario.
//Busque como se validaba en React esos datos y me aparecieron estos codigos generales, se utiliza Regex.
export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const regexDni = /^\d{7,8}$/;

export const regexTelefono = /^\d{10, 15}$/;

//Esta funcion se fija campo por campo, si es que el usuario completo bien los datos.
//Por lo que vi, para que no quede un matete de "if... else..." por cada dato, se puede usar el "switch" y el "case".
export function campoCompletado(nombreDelCampo, valor) {
  switch (nombreDelCampo) { //El switch aca va a ir chequeando cada uno de los campos del formulario, y el case va a ser cada uno de los campos que se van a validar.
    //Switch significa "chequear", y case significa "caso", o sea, cada caso del formulario que se va a chequear. Osea cada campo.
    //Si hubiera usado un "if... else..." por cada campo, hubiera quedado asi:
    // if (nombreDelCampo === "nombre") {
    //   return valor.trim().length > 0;
    // } else if (nombreDelCampo === "apellido") {
    //   return valor.trim().length > 0;
    // } else if (nombreDelCampo === "dni") {
    //   return regexDni.test(valor);
    // } else if (nombreDelCampo === "telefono") {
    //   return regexTelefono.test(valor);
    // } else if (nombreDelCampo === "correo") {
    //   return regexCorreo.test(valor);
    // } else if (nombreDelCampo === "nivelTitulacion") {
    //   return valor !== "";
    // } else if (nombreDelCampo === "experienciaDocencia") {
    //   return valor !== "";
    // } else if (nombreDelCampo === "cv") {
    //   return valor !== null;
    // } else {
    //   return true;
    // }
    case "nombre":
    case "apellido":
      //Que no este vacio.
      return valor.length > 0;

    case "dni":
      return regexDni.test(valor);

    case "telefono":
      return regexTelefono.test(valor);

    case "correo":
      return regexCorreo.test(valor);

    case "nivelTitulacion":
      //Esta bien si el usuario ya eligio alguna opcion (no quedo vacio).
      return valor !== "";

    case "experienciaDocencia":
      return valor !== "";

    case "cv":
      //Esta bien si hay un archivo cargado (osea, no es null).
      return valor !== null;

    default:
      return true;
  }
}


