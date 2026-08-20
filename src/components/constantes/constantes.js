//Aca van a ir las cosas del formulario que no cambian, por eso justamente son constantes.
//Puse los campos obligatorios, los niveles de titulacion, las opciones de experiencia.

//Puse los niveles de titulacion del formulario de Figma
export const nivelesTitulacion = [
  { value: "pregrado", texto: "Pregrado" },
  { value: "grado", texto: "Grado" },
  { value: "especializacion", texto: "Especializacion" },
  { value: "maestria", texto: "Maestria" },
  { value: "doctorado", texto: "Doctorado" },
];

export const opcionesExperiencia = [
  { value: "si", texto: "Si, cuento con experiencia en la Docencia Universitaria." },
  { value: "no", texto: "No, no cuento con experiencia en la Docencia Universitaria." },
];

//Esto es como arranca el formulario, todo vacio.
//Lo uso para el useState de arranque y tambien para "limpiar" el formulario despues de que se manda
export const datosVacios = {
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  correo: "",
  lugarDeResidencia: "",
  nivelTitulacion: "",
  otrasFormaciones: "",
  areaDisciplina: "",
  experienciaDocencia: "",
  linkedin: "",
  cv: null, //El archivo arranca en null porque todavia no se subio nada.
};

//Los campos obligatorios que estabvan en Figma
export const camposObligatorios = [
  "nombre",
  "apellido",
  "dni",
  "telefono",
  "correo",
  "nivelTitulacion",
  "experienciaDocencia",
  "cv",
];