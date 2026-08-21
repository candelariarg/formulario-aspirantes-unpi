export function DatosPersonales() {
    return (
        <>
            <div className="datos-personales">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Nombre</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ingrese su nombre"/>

                    <div className="input-group">
                        <span className="input-group-text" id="">Apellido</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ingrese su apellido"/>
                    <div className="input-group">
                        <span className="input-group-text" id="">DNI</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ingrese su DNI"/>
                    <div className="input-group">
                        <span className="input-group-text" id="">telefono</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ingrese su telefono"/>
                </div>
                
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Correo electronico</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Ingrese su correo electronico" />
                    </div>
                </form>
            </div>
        </>
    )
}