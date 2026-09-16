import React from "react";

export function EnviarCV({ user, onChange }) {
    return (
        <div className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
            <label htmlFor="cvInput" className="form-label">
                Adjuntar CV (Sólo formato PDF) *
            </label>
            <input type="file" className="form-control" id="cvInput" name="cv" accept=".pdf,application/pdf" onChange={onChange} required />
            {user?.cv && (
                <div className="form-text text-start text-success mt-1">
                    <i className="bi bi-file-earmark-pdf me-1"></i>
                    Archivo cargado: <strong>{typeof user.cv === "object" ? user.cv.name : user.cv}</strong>
                </div>
            )}
        </div>
    );
}
