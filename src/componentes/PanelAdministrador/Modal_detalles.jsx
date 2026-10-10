export function ModalDetalles({
    modalDetalles,
    setModalDetalles,
    colorPrimario = "#14589f"
}) {
    return (
        <>
            {/* Modal Detalles */}
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
        </>
    );
}