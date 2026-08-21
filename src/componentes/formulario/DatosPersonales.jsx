export function DatosPersonales({ user, onChange }) {
    // aca voy a crear la estructura que va a tener el formulario, por ejemplo el nombre, apellido, dni, telefono, etc
    // uso el  el componente 'div' para crear los campos del formulario, el componente 'input-group' para agrupar los campos, 
    // el componente 'input-group-prepend' para agregar un icono antes del campo, el componente 'input-group-text' para agregar un texto antes del campo
    // el componente 'form-control' para que el campo tenga el estilo de bootstrap, el componente 'form-group' para agrupar los campos
    // le asigno los atributos de name y value, en name para que sirva como identificador para guardar los datos en el objeto user y en value para que muestre el valor del input, 
    // tambien en value utilizo el ? que es un operador de encadenamiento que sirve para que si el valor es null, no muestre nada, 
    // tambien utilizo el 'onChange' para que se ejecute la funcion 'handleUsernameInput' cuando el usuario escriba en el input


    return (
        <>
            <h3 align="center">Datos Personales</h3>
            <div className="datos-personales">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Nombre</span>
                    </div>
                    <input type="text" className="form-control" name="nombre" value={user?.nombre || ""} onChange={onChange} />

                    <div className="input-group">
                        <span className="input-group-text" id="">Apellido</span>
                    </div>
                    <input type="text" className="form-control" name="apellido" value={user?.apellido || ""} onChange={onChange} />
                    <div className="input-group">
                        <span className="input-group-text" id="">DNI</span>
                    </div>
                    <input type="text" inputMode="numeric" pattern="[0-9]*" className="form-control" name="dni" value={user?.dni || ""} onChange={onChange} />
                    <div className="input-group">
                        <span className="input-group-text" id="">telefono</span>
                    </div>
                    <input type="text" inputMode="numeric" pattern="[0-9]*" className="form-control" name="telefono" value={user?.telefono || ""} onChange={onChange} />
                </div>


                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-text" id="">Correo electronico</span>
                    </div>
                    <input type="text" className="form-control" name="correo" value={user?.correo || ""} onChange={onChange} />
                </div>

            </div>
        </>
    )
}