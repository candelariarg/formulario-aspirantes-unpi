import { useEffect, useState } from "react";
import { Dato } from "./Dato.jsx";
import { ESTADOS, normalizarEstado } from "./estados.js";
import { useCvBlob } from "./hooks/useCvBlob.js";
import { formatearFecha, mostrar, nombreCompleto } from "./utiles.js";

// Largo máximo de las observaciones de la entrevista.
const MAX_COMENTARIO = 400;

// El backend todavía no tiene un campo para el comentario de la entrevista, así
// que se guarda en este navegador (localStorage), indexado por id de postulante.
// Cuando la API lo soporte, alcanza con reemplazar estas tres funciones por fetch.
const CLAVE_COMENTARIOS = "unpilar:comentarios-entrevista";

function leerComentarios() {
  try {
    const guardados = JSON.parse(window.localStorage.getItem(CLAVE_COMENTARIOS) || "{}");
    return guardados && typeof guardados === "object" ? guardados : {};
  } catch {
    return {};
  }
}

function leerComentario(id) {
  if (!id) return "";
  return leerComentarios()[id] || "";
}

function escribirComentario(id, texto) {
  const todos = leerComentarios();
  if (texto) todos[id] = texto;
  else delete todos[id];
  window.localStorage.setItem(CLAVE_COMENTARIOS, JSON.stringify(todos));
}

// Ficha del postulante con vista previa del CV. La descarga usa el mismo blob que
// ya se pidió para la vista previa, así no se hace dos veces la petición.
export function ModalDetalles({
  modalDetalles,
  setModalDetalles,
  postulante,
  onCambiarEstado,
  colorPrimario = "#14589f",
}) {
  const [actualizando, setActualizando] = useState(false);
  const [verComentario, setVerComentario] = useState(false);
  const [comentario, setComentario] = useState("");
  const [errorComentario, setErrorComentario] = useState("");
  const { url: pdfUrl, cargando: cargandoPdf, error: errorPdf } = useCvBlob(postulante, modalDetalles);

  // Al abrir la ficha de otro postulante el editor arranca cerrado y con el
  // comentario que ya está guardado (o vacío si todavía no hay).
  useEffect(() => {
    setVerComentario(false);
    setComentario(leerComentario(postulante?.id));
    setErrorComentario("");
  }, [postulante?.id, modalDetalles]);

  const estado = normalizarEstado(postulante?.estado);
  const etiquetas = postulante?.etiquetas || [];
  const ubicacion = [postulante?.localidad, postulante?.municipio].filter(Boolean).join(" - ");

  const cambiarEstado = async (nuevoEstado) => {
    if (!postulante?.id || !onCambiarEstado) return;
    setActualizando(true);
    try {
      await onCambiarEstado(postulante.id, nuevoEstado);
    } finally {
      setActualizando(false);
    }
  };

  const guardarComentarioEntrevista = () => {
    if (!postulante?.id) return;

    const texto = comentario.trim();
    if (texto.length > MAX_COMENTARIO) {
      setErrorComentario(`El comentario no puede superar los ${MAX_COMENTARIO} caracteres.`);
      return;
    }

    try {
      escribirComentario(postulante.id, texto);
      setComentario(texto);
      setErrorComentario("");
      setVerComentario(false);
    } catch {
      setErrorComentario(
        "No se pudo guardar el comentario en este navegador (almacenamiento bloqueado o lleno).",
      );
    }
  };

  // Descarta lo escrito y vuelve a lo que está guardado.
  const cancelarComentario = () => {
    setComentario(leerComentario(postulante?.id));
    setErrorComentario("");
    setVerComentario(false);
  };

  const descargar = () => {
    if (!pdfUrl) return;
    const apellido = (postulante?.apellido || "").replace(/\s+/g, "_");
    const nombre = (postulante?.nombre || "").replace(/\s+/g, "_");
    const enlace = document.createElement("a");
    enlace.href = pdfUrl;
    enlace.download = `CV_${apellido}_${nombre}.pdf`;
    enlace.click();
  };

  return (
    <>
      {modalDetalles && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-light">
                <h5 className="modal-title fw-bold" style={{ color: colorPrimario }}>
                  Detalles del Postulante
                </h5>
                <button type="button" className="btn-close" onClick={() => setModalDetalles(false)}></button>
              </div>

              <div className="modal-body text-start p-4">
                {postulante ? (
                  <div className="row g-3">
                    <Dato className="col-md-4" etiqueta="Apellido y Nombre" valor={nombreCompleto(postulante)} />
                    <Dato className="col-md-2" etiqueta="DNI" valor={postulante.dni} />
                    <Dato className="col-md-3" etiqueta="Fecha de Nacimiento" valor={formatearFecha(postulante.fecha_nacimiento)} />
                    <Dato className="col-md-3" etiqueta="Fecha de Postulación" valor={formatearFecha(postulante.fecha)} />
                    <Dato etiqueta="Correo Electrónico" valor={postulante.mail} />
                    <Dato etiqueta="Teléfono" valor={postulante.telefono} />
                    <Dato etiqueta="Localidad / Municipio" valor={ubicacion} />
                    <Dato etiqueta="Nivel de Titulación" valor={postulante.nivel_titulacion} />
                    <Dato etiqueta="Experiencia Docente" valor={postulante.exp_docente} />

                    <div className="col-md-6">
                      <small className="text-secondary d-block mb-1">Estado del Postulante</small>
                      <select
                        className="form-select form-select-sm border-secondary-subtle"
                        style={{ maxWidth: "240px" }}
                        value={estado}
                        disabled={actualizando}
                        onChange={(e) => cambiarEstado(e.target.value)}
                      >
                        {ESTADOS.map((opcion) => (
                          <option key={opcion} value={opcion}>
                            {opcion}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <small className="text-secondary d-block">Especialidades / Etiquetas</small>
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {etiquetas.length > 0 ? (
                          etiquetas.map((etiqueta) => (
                            <span key={etiqueta} className="badge bg-light text-dark border px-2 py-1">
                              {etiqueta}
                            </span>
                          ))
                        ) : (
                          <span>{mostrar(postulante.especialidad)}</span>
                        )}
                      </div>
                    </div>

                    {/* Observaciones de la entrevista: plegadas por defecto, se abren con "Ver más" */}
                    <div className="col-12 mt-3 pt-3 border-top">
                      <div className="d-flex justify-content-between align-items-center gap-2">
                        <small className="text-secondary d-block fw-bold">Comentarios del postulante</small>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => setVerComentario((abierto) => !abierto)}
                          aria-expanded={verComentario}
                        >
                          {verComentario ? "Ver menos" : "Ver más"}
                        </button>
                      </div>

                      {verComentario ? (
                        <div className="mt-2">
                          <textarea
                            className="form-control border-secondary-subtle"
                            rows={5}
                            maxLength={MAX_COMENTARIO}
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value.slice(0, MAX_COMENTARIO))}
                            aria-label="Comentario sobre el postulante"
                            placeholder="Impresiones del postulante, disponibilidad, expectativas, etc. (máx. 400 caracteres)"
                          />
                          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-2">
                            <small
                              className={
                                MAX_COMENTARIO - comentario.length <= 40 ? "text-danger" : "text-secondary"
                              }
                            >
                              {comentario.length}/{MAX_COMENTARIO} caracteres
                            </small>
                            <div className="d-flex gap-2">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                                onClick={cancelarComentario}
                              >
                                Cancelar
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm text-white"
                                style={{ backgroundColor: colorPrimario }}
                                onClick={guardarComentarioEntrevista}
                                title="El comentario se guarda en este navegador"
                              >
                                Guardar comentario
                              </button>
                            </div>
                          </div>
                          {errorComentario && (
                            <div className="alert alert-warning py-2 px-3 mt-2 mb-0 small">{errorComentario}</div>
                          )}
                        </div>
                      ) : comentario.trim() ? (
                        <p className="mb-0 mt-2" style={{ whiteSpace: "pre-wrap" }}>
                          {comentario}
                        </p>
                      ) : (
                        <p className="mb-0 mt-2 text-secondary fst-italic">
                          Todavía no hay comentarios sobre la entrevista.
                        </p>
                      )}
                    </div>

                    <div className="col-12 mt-3 pt-3 border-top">
                      <small className="text-secondary d-block mb-2 fw-bold">Vista previa del Curriculum Vitae</small>
                      {!postulante.curriculum ? (
                        <div className="alert alert-secondary mb-0 py-2">Este postulante no posee un CV adjunto.</div>
                      ) : cargandoPdf ? (
                        <div className="text-center py-4 text-secondary">
                          <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                          Cargando documento PDF...
                        </div>
                      ) : errorPdf ? (
                        <div className="alert alert-warning mb-0 py-2">{errorPdf}</div>
                      ) : (
                        <iframe
                          src={pdfUrl}
                          title="Vista previa del CV"
                          width="100%"
                          height="480px"
                          style={{ border: "1px solid #dee2e6", borderRadius: "6px" }}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-muted">Seleccione un postulante para ver sus detalles.</p>
                )}
              </div>

              <div className="modal-footer bg-light border-top-0">
                <button className="btn btn-outline-secondary" onClick={() => setModalDetalles(false)}>
                  Cerrar
                </button>
                <button
                  className="btn text-white"
                  style={{ backgroundColor: colorPrimario }}
                  onClick={descargar}
                  disabled={!pdfUrl}
                  title={pdfUrl ? "Descargar CV en PDF" : "El CV todavía no está disponible"}
                >
                  Descargar CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
