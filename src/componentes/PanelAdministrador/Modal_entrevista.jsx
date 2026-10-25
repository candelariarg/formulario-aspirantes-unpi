import { useEffect, useState } from "react";
import { formatearFechaInput } from "./utiles.js";

// Agenda de entrevista. El backend no guarda fecha, horario ni modalidad: al
// guardar solo se cambia el estado del postulante a "A Entrevistar".
export function ModalEntrevista({
  modalEntrevista,
  setModalEntrevista,
  postulante,
  onConfirmarEntrevista,
  colorPrimario = "#14589f",
  colorAcento = "#0d6efd",
}) {
  const [fechaAcordada, setFechaAcordada] = useState("");
  const [horario, setHorario] = useState("");
  const [modalidad, setModalidad] = useState("Presencial (Sede Pilar)");

  // cada apertura arranca con los campos vacíos
  useEffect(() => {
    if (!modalEntrevista) return;
    setFechaAcordada("");
    setHorario("");
    setModalidad("Presencial (Sede Pilar)");
  }, [modalEntrevista, postulante]);

  const guardar = () => {
    if (fechaAcordada && !/^\d{2}\/\d{2}\/\d{4}$/.test(fechaAcordada)) {
      alert("Por favor ingrese la fecha acordada en formato dd/mm/aaaa.");
      return;
    }
    if (postulante && onConfirmarEntrevista) onConfirmarEntrevista(postulante);
    setModalEntrevista(false);
  };

  return (
    <>
      {modalEntrevista && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-light">
                <h5 className="modal-title fw-bold" style={{ color: colorPrimario }}>
                  Agendar Entrevista
                </h5>
                <button type="button" className="btn-close" onClick={() => setModalEntrevista(false)}></button>
              </div>

              <div className="modal-body text-start p-4">
                {postulante && (
                  <div className="mb-3 pb-2 border-bottom">
                    <small className="text-secondary d-block">Postulante</small>
                    <span className="fw-bold">
                      {postulante.apellido_y_nombre || `${postulante.apellido}, ${postulante.nombre}`}
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label text-secondary fw-bold small">Fecha acordada (dd/mm/aaaa)</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="dd/mm/aaaa"
                    maxLength={10}
                    value={fechaAcordada}
                    onChange={(e) => setFechaAcordada(formatearFechaInput(e.target.value))}
                    className="form-control border-secondary-subtle"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-secondary fw-bold small">Horario</label>
                  <input
                    type="time"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
                    className="form-control border-secondary-subtle"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label text-secondary fw-bold small">Modalidad de contacto</label>
                  <select
                    className="form-select border-secondary-subtle"
                    value={modalidad}
                    onChange={(e) => setModalidad(e.target.value)}
                  >
                    <option>Presencial (Sede Pilar)</option>
                    <option>Virtual (Google Meet)</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer bg-light border-top-0">
                <button className="btn btn-outline-secondary" onClick={() => setModalEntrevista(false)}>
                  Cancelar
                </button>
                <button className="btn text-white" style={{ backgroundColor: colorAcento }} onClick={guardar}>
                  Guardar Entrevista
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
