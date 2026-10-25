// Estados del flujo de selección. Deben coincidir con los que valida el backend
// en PATCH /api/postulantes/:id/estado.
export const ESTADOS = [
  "Pendiente",
  "Revisado",
  "A Entrevistar",
  "Entrevistado",
  "Rechazado",
  "Contratado",
];

const CLASES = {
  Pendiente: "bg-warning text-dark",
  Revisado: "bg-primary text-white",
  "A Entrevistar": "bg-info text-dark",
  Entrevistado: "bg-secondary text-white",
  Contratado: "bg-success text-white",
  Rechazado: "bg-danger text-white",
};

// El backend ya convierte el estado histórico "Entrevista" en "Entrevistado".
// Esto cubre datos viejos o vacíos sin repetir la regla en cada componente.
export function normalizarEstado(valor) {
  if (valor === "Entrevista") return "Entrevistado";
  return valor || "Pendiente";
}

export function claseEstado(valor) {
  return CLASES[valor] || CLASES.Pendiente;
}
