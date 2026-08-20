export function EnviarCV() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Ingrese su CV aqui:</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
            </form>
        </>
    )
}