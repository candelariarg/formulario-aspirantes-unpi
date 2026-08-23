export function FormacionAcademica({ user, onChange }) {
    // aca utilizo inputs de tipo radio y texto para poder asignar los valores de estudio maximo que tiene el usuario y experiencia en docencia
    // se utiliza el checked para que el input se marque si el valor es igual al valor del input tambien utilizamos el tipo
    // radio porque es para que el usuario pueda elegir solo una opcion de las que se le presentan 

    return (
        <>
            <h5>Formacion Academica</h5>
            <div>
                <label className="d-block">Nivel Maximo de titulacion (marcar solo uno)</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="formacion" id="inlineRadio1" value="Pregrado" checked={user?.formacion === "Pregrado"} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio1">Pregrado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="formacion" id="inlineRadio2" value="Grado" checked={user?.formacion === "Grado"} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Grado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="formacion" id="inlineRadio3" value="Especializacion" checked={user?.formacion === "Especializacion"} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Especializacion</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="formacion" id="inlineRadio4" value="Maestria" checked={user?.formacion === "Maestria"} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio4">Maestria</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="formacion" id="inlineRadio5" value="Doctorado" checked={user?.formacion === "Doctorado"} onChange={onChange} />
                    <label className="form-check-label" htmlFor="inlineRadio5">Doctorado</label>
                </div>
            </div>

            <div className="div-otras-formaciones mx-auto" style={{ maxWidth: "500px" }}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Otras Formaciones <i className="bi bi-bookmark"></i></span>
                    </div>
                    <input type="text" className="form-control" name="otrasFormaciones" value={user?.otrasFormaciones || ""} onChange={onChange} />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Perfil de Linkedin <i className="bi bi-linkedin"></i></span>
                    </div>
                    <input type="text" className="form-control" name="linkedin" value={user?.linkedin || ""} onChange={onChange} />
                </div>

                <div>
                    <label className="d-block" htmlFor="inlineRadioExp1">Experiencia en Docencia universitaria?</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="experiencia" id="inlineRadioExp1" value="Si" checked={user?.experiencia === "Si"} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadioExp1">Si, poseo experiencia en docencia universitaria.</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="experiencia" id="inlineRadioExp2" value="No" checked={user?.experiencia === "No"} onChange={onChange} />
                        <label className="form-check-label" htmlFor="inlineRadioExp2">No, no poseo experiencia en docencia universitaria.</label>
                    </div>
                </div>
            </div>
        </>
    )
}
