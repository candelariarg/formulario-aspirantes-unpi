import { BarraBusquedaPanel } from "./Busqueda_panel.jsx";

export function BarraFiltros({
    colorPrimario = "#14589f",
    busqueda,
    setBusqueda
}) {
    return (
        <div className="row g-3 mb-4 p-4 bg-white rounded shadow-sm align-items-end text-start mx-0 w-100">
            {/* Buscar Postulante */}
            <div className="col-xl-3 col-lg-3 col-md-6">
                <label className="form-label mb-1 fw-bold text-secondary small">Buscar Postulante</label>
                <BarraBusquedaPanel
                    busqueda={busqueda}
                    setBusqueda={setBusqueda}
                />
            </div>

            {/* Especialidad */}
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

            {/* Nivel de Titulación */}
            <div className="col-xl-2 col-lg-2 col-md-6">
                <label className="form-label mb-1 fw-bold text-secondary small">Nivel de Titulación</label>
                <select className="form-select border-secondary-subtle">
                    <option>Todos</option>
                    <option>Grado</option>
                    <option>Maestría</option>
                    <option>Doctorado</option>
                </select>
            </div>

            {/* Exp. Docente */}
            <div className="col-xl-2 col-lg-2 col-md-6">
                <label className="form-label mb-1 fw-bold text-secondary small">Exp. Docente</label>
                <select className="form-select border-secondary-subtle">
                    <option>Todos</option>
                    <option>Sí</option>
                    <option>No</option>
                </select>
            </div>

            {/* Estado */}
            <div className="col-xl-2 col-lg-2 col-md-6">
                <label className="form-label mb-1 fw-bold text-secondary small">Estado</label>
                <select className="form-select border-secondary-subtle">
                    <option>Todos</option>
                    <option>Pendiente</option>
                    <option>Revisado</option>
                    <option>Entrevista Agendada</option>
                </select>
            </div>

            {/* Botones */}
            <div className="col-12 d-flex gap-2 justify-content-end mt-3">
                <button className="btn btn-outline-secondary px-4" onClick={() => setBusqueda && setBusqueda("")}>
                    Limpiar
                </button>
                <button className="btn text-white fw-medium px-4" style={{ backgroundColor: colorPrimario }}>
                    Aplicar filtros
                </button>
            </div>
        </div>
    );
}