export function FormacionAcademica() {
    return (
        <>
            <form>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Pregrado" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Pregrado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Grado" />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Grado</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Especializacion"  />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Especializacion</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Maestria"  />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">Maestria</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="Doctorado"  />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">Doctorado</label>
                    </div>
                </div>
            </form>
            <form>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id=""><i class="bi bi-bookmark"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Otras formaciones"/>
                </div>
                <input className="linkedin-input" type="text" placeholder="url de perfil Linkedin" />
            </form>
        </>
    )
}