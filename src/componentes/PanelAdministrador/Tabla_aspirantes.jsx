import React from "react";

import { IconosPanelAdmin } from "./Iconos_panel.jsx";

export function TablaAspirantes({
  aspirantes,
  busqueda,
  colorPrimario = "#14589f",
  onVerDetalles,
  onAgendarEntrevista
}) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden border w-100">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0 text-start">
          <thead>
            <tr>
              <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>
                Fecha
              </th>
              <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>
                Apellido y Nombre
              </th>
              <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>
                Especialidad
              </th>
              <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>
                Nivel Académico
              </th>
              <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>
                Estado
              </th>
              <th
                className="py-3 px-4 fw-medium text-white text-center"
                style={{ backgroundColor: colorPrimario, width: "180px" }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="border-top-0">
            {aspirantes.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-secondary py-4">
                  No se encontraron aspirantes para "{busqueda}"
                </td>
              </tr>
            ) : (
              aspirantes.map((a) => (
                <tr key={a.id}>
                  <td className="px-4 py-3 text-secondary">{a.fecha}</td>
                  <td className="px-4 py-3 fw-bold">{a.nombre}</td>
                  <td className="px-4 py-3 text-secondary">{a.especialidad}</td>
                  <td className="px-4 py-3 text-secondary">{a.nivel}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`badge ${a.estado === "Pendiente" ? "bg-warning text-dark" : "bg-success"
                        } border px-3 py-2 rounded-pill shadow-sm`}
                    >
                      {a.estado}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <IconosPanelAdmin
                      onVerDetalles={() => onVerDetalles(a)}
                      onAgendarEntrevista={() => onAgendarEntrevista(a)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
