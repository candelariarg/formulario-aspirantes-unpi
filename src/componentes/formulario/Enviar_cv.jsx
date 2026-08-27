import React from "react";

export function EnviarCV({ user, onChange }) {
    return (
        <div className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
            <label htmlFor="cvInput" className="form-label">
                Ingrese su CV aquí (solo formato PDF):
            </label>
            <input type="file" className="form-control" id="cvInput" name="cv" accept=".pdf,application/pdf" onChange={onChange} />
        </div>
    );
}
