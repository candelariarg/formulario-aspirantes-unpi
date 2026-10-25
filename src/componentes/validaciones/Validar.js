export const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const regexCorreo = regexEmail;

export const regexDni = /^\d{7,8}$/;

export const regexTelefono = /^\d{10,15}$/;

// valida que la fecha tenga formato dd/mm/yyyy o yyyy-mm-dd y exista en el calendario
export function esFechaValida(valor) {
  if (typeof valor !== "string" || !valor.trim()) return false;
  const limpio = valor.trim();

  const matchDMY = limpio.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (matchDMY) {
    const dia = parseInt(matchDMY[1], 10);
    const mes = parseInt(matchDMY[2], 10);
    const anio = parseInt(matchDMY[3], 10);
    const fecha = new Date(Date.UTC(anio, mes - 1, dia));
    return (
      fecha.getUTCFullYear() === anio &&
      fecha.getUTCMonth() === mes - 1 &&
      fecha.getUTCDate() === dia &&
      anio >= 1900 &&
      anio <= new Date().getFullYear()
    );
  }

  const matchYMD = limpio.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (matchYMD) {
    const anio = parseInt(matchYMD[1], 10);
    const mes = parseInt(matchYMD[2], 10);
    const dia = parseInt(matchYMD[3], 10);
    const fecha = new Date(Date.UTC(anio, mes - 1, dia));
    return (
      fecha.getUTCFullYear() === anio &&
      fecha.getUTCMonth() === mes - 1 &&
      fecha.getUTCDate() === dia &&
      anio >= 1900 &&
      anio <= new Date().getFullYear()
    );
  }

  return false;
}

export function campoCompletado(nombreDelCampo, valor) {
  switch (nombreDelCampo) {
    case "nombre":
    case "apellido":
      return typeof valor === "string" && valor.trim().length > 0;

    case "dni":
      return typeof valor === "string" && regexDni.test(valor.trim());

    case "telefono":
      return typeof valor === "string" && regexTelefono.test(valor.trim());

    case "correo":
      return typeof valor === "string" && regexCorreo.test(valor.trim());

    case "nivelTitulacion":
    case "formacion":
      return valor !== "" && valor !== null && valor !== undefined;

    case "residencia":
      return typeof valor === "string" && valor.trim().length > 0;

    case "especialidades":
      return Array.isArray(valor) && valor.length > 0;

    case "experienciaDocencia":
      return typeof valor === "boolean";

    case "fechaNacimiento":
      return esFechaValida(valor);

    case "cv":
      return valor !== null && valor !== undefined && valor !== "";

    default:
      return true;
  }
}

export function validarFormulario(user) {
  const errores = {};

  if (!campoCompletado("nombre", user.nombre)) {
    errores.nombre = "El nombre es obligatorio.";
  }
  if (!campoCompletado("apellido", user.apellido)) {
    errores.apellido = "El apellido es obligatorio.";
  }
  if (!campoCompletado("dni", user.dni)) {
    errores.dni = "El DNI debe contener 7 u 8 dígitos numéricos.";
  }
  if (!campoCompletado("telefono", user.telefono)) {
    errores.telefono = "El teléfono debe contener entre 10 y 15 dígitos numéricos.";
  }
  if (!campoCompletado("correo", user.correo)) {
    errores.correo = "El correo electrónico no tiene un formato válido.";
  }
  if (!campoCompletado("residencia", user.residencia)) {
    errores.residencia = "Debe seleccionar su lugar de residencia.";
  } else if ((user.residencia === "PBA" || user.residencia === "CABA") && (!user.municipio || !user.localidad)) {
    errores.residencia = user.residencia === "CABA"
      ? "Para C.A.B.A debe seleccionar comuna y barrio."
      : "Para Provincia de Buenos Aires debe seleccionar municipio y localidad.";
  }
  if (!campoCompletado("especialidades", user.especialidades)) {
    errores.especialidades = "Debe seleccionar al menos una especialidad.";
  }
  if (!campoCompletado("formacion", user.formacion)) {
    errores.formacion = "Debe seleccionar su nivel máximo de titulación.";
  }
  if (!campoCompletado("cv", user.cv)) {
    errores.cv = "Debe adjuntar su Curriculum Vitae en formato PDF.";
  }

  if (!campoCompletado("fechaNacimiento", user.fechaNacimiento)) {
    errores.fechaNacimiento = "La fecha de nacimiento es obligatoria y debe ser una fecha válida.";
  }

  return {
    valido: Object.keys(errores).length === 0,
    errores,
  };
}
