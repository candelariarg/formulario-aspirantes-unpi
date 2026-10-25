import { IconosPanelAdmin } from "./Iconos_panel.jsx";
import { claseEstado, normalizarEstado } from "./estados.js";
import { mostrar, nombreCompleto } from "./utiles.js";

const COLUMNAS = [
  "DNI",
  "Apellido y Nombre",
  "Especialidad",
  "Experiencia Docente",
  "Nivel de Titulación",
  "Estado",
  "Acciones",
];

// La experiencia docente viene como texto del backend; se muestra como badge
// salvo que no haya dato, para no repetir la condición en cada fila.
function BadgeExperiencia({ valor }) {
  if (!valor) return <span className="text-secondary">—</span>;

  if (valor.toLowerCase() === "nunca fue docente") {
    return (
      <span className="badge bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle px-3 py-2 rounded-pill">
        Sin experiencia
      </span>
    );
  }

  return (
    <span className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle px-3 py-2 rounded-pill">
      {valor}
    </span>
  );
}

export function TablaAspirantes({
  aspirantes,
  colorPrimario = "#14589f",
  onVerDetalles,
  onMarcarRevisado,
  onAgendarEntrevista,
  onEnviarResolucion,
}) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden border w-100">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 text-start">
          <thead>
            <tr>
              {COLUMNAS.map((columna) => (
                <th
                  key={columna}
                  className="py-3 px-4 fw-medium text-white"
                  style={{ backgroundColor: colorPrimario }}
                >
                  {columna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="border-top-0">
            {aspirantes.map((postulante) => {
              const estado = normalizarEstado(postulante.estado);
              return (
                <tr key={postulante.id}>
                  <td className="px-4 py-3 text-secondary">{mostrar(postulante.dni)}</td>
                  <td className="px-4 py-3 fw-medium">{nombreCompleto(postulante)}</td>
                  <td className="px-4 py-3 text-secondary">{mostrar(postulante.especialidad)}</td>
                  <td className="px-4 py-3">
                    <BadgeExperiencia valor={postulante.exp_docente} />
                  </td>
                  <td className="px-4 py-3 text-secondary">{mostrar(postulante.nivel_titulacion)}</td>
                  <td className="px-4 py-3">
                    <span className={`badge ${claseEstado(estado)} border px-3 py-2 rounded-pill shadow-sm`}>
                      {estado}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <IconosPanelAdmin
                      esPendiente={estado === "Pendiente"}
                      onVerDetalles={() => onVerDetalles?.(postulante)}
                      onMarcarRevisado={() => onMarcarRevisado?.(postulante)}
                      onAgendarEntrevista={() => onAgendarEntrevista?.(postulante)}
                      onEnviarResolucion={() => onEnviarResolucion?.(postulante)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
