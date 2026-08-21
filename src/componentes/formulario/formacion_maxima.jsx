export function FormacionAcademica() {
    // aca utilizo inputs de tipo texto y checkbox para poder asignar los valores de estudio maximo que tiene el usuario y experiencia en docencia

    return (
        <>
            <h3>Formacion Academica</h3>
            <form>
                <div className="form-check form-check-inline">
                    <label htmlFor="">Nivel Maximo de titulacion (marcar solo uno)</label>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Pregrado" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Pregrado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Grado" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Grado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Especializacion" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Especializacion</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Maestria" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Maestria</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Doctorado" />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">Doctorado</label>
                    </div>
                </div>
            </form>
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Otras Formaciones <i class="bi bi-bookmark"></i></span>
                    </div>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Perfil de Linkedin <i class="bi bi-linkedin"></i></span>
                    </div>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <label htmlFor="inlineCheckbox1">Experiencia en Docencia universitaria?</label>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Si" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Si, poseo experiencia en docencia universitaria.</label>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Si" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">No, no poseo experiencia en docencia universitaria.</label>
                </div>
            </form>
        </>
    )
}