import React, { useState } from "react";

export function PanelPrincipal() {
  const [modalDetalles, setModalDetalles] = useState(false);
  const [modalEntrevista, setModalEntrevista] = useState(false);

  const colorPrimario = "#14589f";
  const colorAcento = "#0d6efd";

  return (
    <div 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "#f4f6f9", 
        overflowY: "auto",
        zIndex: 1000 
      }}
      className="text-dark"
    >
      <div className="container-fluid py-4 px-4 px-xl-5 d-flex flex-column align-items-center">
        
        <div className="w-100">
          
          {/* Encabezado del Panel */}
          <div className="d-flex justify-content-between align-items-center mb-4 bg-white p-3 rounded shadow-sm border-start border-4" style={{ borderLeftColor: colorPrimario }}>
            <h4 className="mb-0" style={{ color: colorPrimario, fontWeight: "600" }}>Portal de Aspirantes a Cátedra</h4>
            <div className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={colorPrimario} viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <span className="fw-bold" style={{ color: colorPrimario }}>Admin UNPilar</span>
            </div>
          </div>

          {/* Barra de Filtros */}
          <div className="row g-3 mb-4 p-4 bg-white rounded shadow-sm align-items-end text-start mx-0 w-100">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <label className="form-label mb-1 fw-bold text-secondary small">Especialidad</label>
              <select className="form-select border-secondary-subtle">
                <option value="">Seleccione...</option>
                <option value="Humanidades y Ciencias Sociales">Humanidades y Ciencias Sociales</option>
                <option value="Tecnologia e Informatica">Tecnologia e Informatica</option>
                <option value="Arte y Creatividad">Arte y Creatividad</option>
                <option value="Ciencias de la salud">Ciencias de la salud</option>
                <option value="Ciencias economicas y empresariales">Ciencias economicas y empresariales</option>
                <option value="Ciencias exactas y naturales">Ciencias exactas y naturales</option>
                <option value="Construccion e ingenierias">Construccion e ingenierias</option>
              </select>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <label className="form-label mb-1 fw-bold text-secondary small">Nivel de Titulación</label>
              <select className="form-select border-secondary-subtle">
                <option>Todos</option>
                <option>Grado</option>
                <option>Maestría</option>
                <option>Doctorado</option>
              </select>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <label className="form-label mb-1 fw-bold text-secondary small">Exp. Docente</label>
              <select className="form-select border-secondary-subtle">
                <option>Todos</option>
                <option>Sí</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6">
              <label className="form-label mb-1 fw-bold text-secondary small">Estado</label>
              <select className="form-select border-secondary-subtle">
                <option>Todos</option>
                <option>Pendiente</option>
                <option>Revisado</option>
                <option>Entrevista Agendada</option>
              </select>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-12 d-flex gap-2 justify-content-xl-end justify-content-lg-end mt-4 mt-lg-0">
              <button className="btn text-white fw-medium px-4" style={{ backgroundColor: colorPrimario }}>
                Aplicar filtros
              </button>
              <button className="btn btn-outline-secondary px-4">
                Limpiar
              </button>
            </div>
          </div>

          {/* Tabla Principal */}
          <div className="bg-white rounded shadow-sm overflow-hidden border w-100">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0 text-start">
                <thead>
                  <tr>
                    <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>Fecha</th>
                    <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>Apellido y Nombre</th>
                    <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>Especialidad</th>
                    <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>Nivel Académico</th>
                    <th className="py-3 px-4 fw-medium text-white" style={{ backgroundColor: colorPrimario }}>Estado</th>
                    <th className="py-3 px-4 fw-medium text-white text-center" style={{ backgroundColor: colorPrimario, width: "180px" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody className="border-top-0">
                  <tr>
                    <td className="px-4 py-3 text-secondary">25/09/2026</td>
                    <td className="px-4 py-3 fw-bold">Paez, Nyx Margot</td>
                    <td className="px-4 py-3 text-secondary">Tecnologia e Informatica</td>
                    <td className="px-4 py-3 text-secondary">Maestría</td>
                    <td className="px-4 py-3">
                      <span className="badge bg-warning text-dark border px-3 py-2 rounded-pill shadow-sm">Pendiente</span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="d-flex justify-content-center gap-3">
                        
                        {/* Icono Ojo (Ver Detalles) */}
                        <div style={{ cursor: "pointer" }} title="Ver Detalles del Perfil" onClick={() => setModalDetalles(true)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#0d6efd" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                          </svg>
                        </div>

                        {/* Icono Check (Marcar como Revisado) */}
                        <div style={{ cursor: "pointer" }} title="Marcar como Revisado">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#198754" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                          </svg>
                        </div>

                        {/* Icono Calendario (Agendar Entrevista) */}
                        <div style={{ cursor: "pointer" }} title="Agendar Entrevista" onClick={() => setModalEntrevista(true)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0dcaf0" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                          </svg>
                        </div>

                        {/* Icono Sobre (Enviar Resolución) */}
                        <div style={{ cursor: "pointer" }} title="Enviar Resolución">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#6c757d" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>
                        </div>

                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        {/* Modales */}
        {modalDetalles && (
          <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content border-0 shadow-lg">
                <div className="modal-header bg-light">
                  <h5 className="modal-title fw-bold" style={{ color: colorPrimario }}>Detalles del Postulante</h5>
                  <button type="button" className="btn-close" onClick={() => setModalDetalles(false)}></button>
                </div>
                <div className="modal-body text-start p-4">
                  <p className="text-muted">Aquí se mostrarán los datos estructurados del formulario y el visor PDF integrado.</p>
                </div>
                <div className="modal-footer bg-light border-top-0">
                  <button className="btn text-white" style={{ backgroundColor: colorPrimario }}>Descargar CV</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {modalEntrevista && (
          <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content border-0 shadow-lg">
                <div className="modal-header bg-light">
                  <h5 className="modal-title fw-bold" style={{ color: colorPrimario }}>Agendar Entrevista</h5>
                  <button type="button" className="btn-close" onClick={() => setModalEntrevista(false)}></button>
                </div>
                <div className="modal-body text-start p-4">
                  <div className="mb-3">
                    <label className="form-label text-secondary fw-bold small">Fecha acordada</label>
                    <input type="date" className="form-control border-secondary-subtle" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-secondary fw-bold small">Horario</label>
                    <input type="time" className="form-control border-secondary-subtle" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-secondary fw-bold small">Modalidad de contacto</label>
                    <select className="form-select border-secondary-subtle">
                      <option>Presencial (Sede Pilar)</option>
                      <option>Virtual (Google Meet)</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer bg-light border-top-0">
                  <button className="btn btn-outline-secondary" onClick={() => setModalEntrevista(false)}>Cancelar</button>
                  <button className="btn text-white" style={{ backgroundColor: colorAcento }} onClick={() => setModalEntrevista(false)}>Guardar Entrevista</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}