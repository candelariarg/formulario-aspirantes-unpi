// Helpers de presentación compartidos por el panel.

// Muestra un guion cuando el dato no vino.
export function mostrar(valor) {
  return valor === null || valor === undefined || valor === "" ? "—" : valor;
}

export function nombreCompleto(postulante) {
  if (postulante?.apellido_y_nombre) return postulante.apellido_y_nombre;
  return `${postulante?.apellido || ""}, ${postulante?.nombre || ""}`;
}

// Devuelve dd/mm/aaaa sin corrimientos de zona horaria.
export function formatearFecha(valor) {
  if (!valor) return "—";
  if (typeof valor === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(valor.trim())) {
    return valor.trim();
  }
  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return valor;
  const dia = String(fecha.getUTCDate()).padStart(2, "0");
  const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
  return `${dia}/${mes}/${fecha.getUTCFullYear()}`;
}

// Acomoda lo que se tipea en un input de fecha (dd/mm/aaaa).
export function formatearFechaInput(valor) {
  const digitos = (valor || "").replace(/\D/g, "").slice(0, 8);
  if (digitos.length <= 2) return digitos;
  if (digitos.length <= 4) return `${digitos.slice(0, 2)}/${digitos.slice(2)}`;
  return `${digitos.slice(0, 2)}/${digitos.slice(2, 4)}/${digitos.slice(4, 8)}`;
}
