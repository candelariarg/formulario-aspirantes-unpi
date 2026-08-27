export function FormacionAcademica({ user, onChange }) {
    // aca utilizo inputs de tipo radio y texto para poder asignar los valores de estudio maximo que tiene el usuario y experiencia en docencia
    // se utiliza el checked para que el input se marque si el valor es igual al valor del input tambien utilizamos el tipo
    // radio porque es para que el usuario pueda elegir solo una opcion de las que se le presentan 

    return (
        <>
            <h5>Formación Académica</h5>
            <div>
                <div className="mb-3 mx-auto" style={{maxWidth: "800px"}}>
                    <label className="form-label d-block">Nivel máximo de titulación (marcar solo uno)</label>
                    <select 
                      className="form-select" 
                      name="formacion" 
                      value={user?.formacion || ""} 
                      onChange={onChange}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Pregrado">Pregrado</option>
                      <option value="Grado">Grado</option>
                      <option value="Especializacion">Especialización</option>
                      <option value="Maestria">Maestría</option>
                      <option value="Doctorado">Doctorado</option>
                    </select>
                </div> 

            <div className="div-otras-formaciones mx-auto" style={{ maxWidth: "800px" }}> 
                <div className="row g-3">
                    {/* Columna para Otras Formaciones */}
                    <div className="col-md-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="">Otras Formaciones <i className="bi bi-bookmark"></i></span>
                        </div>
                        <input type="text" className="form-control" name="otrasFormaciones" value={user?.otrasFormaciones || ""} onChange={onChange} />
                    </div>
                    </div>

                    {/* Columna para LinkedIn */}
                    <div className="col-md-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="">Perfil de Linkedin <i className="bi bi-linkedin"></i></span>
                        </div>
                        <input type="text" className="form-control" name="linkedin" value={user?.linkedin || ""} onChange={onChange} />
                    </div>
                    </div>
                </div>
                </div>

                <div>
                    <label className="d-block" htmlFor="inlineRadioExp1">¿Posee experiencia en docencia universitaria?</label>
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
