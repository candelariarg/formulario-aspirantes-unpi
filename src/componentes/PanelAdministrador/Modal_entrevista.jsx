export function ModalEntrevista({
    modalEntrevista,
    setModalEntrevista,
    colorPrimario = "#14589f",
    colorAcento = "#0d6efd"
}) {

    return (
        <>
            {/* Modal Entrevista */}
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
        </>
    )
}
