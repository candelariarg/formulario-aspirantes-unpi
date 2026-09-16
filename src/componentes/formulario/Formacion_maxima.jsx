import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { especialidades } from "../../docs/data.js";

const animatedComponents = makeAnimated();
export function FormacionAcademica({ user, onChange }) {
  // aca utilizo inputs de tipo radio y texto para poder asignar los valores de estudio maximo que tiene el usuario y experiencia en docencia
  // se utiliza el checked para que el input se marque si el valor es igual al valor del input tambien utilizamos el tipo
  // radio porque es para que el usuario pueda elegir solo una opcion de las que se le presentan

  return (
    <>
      <h5>Formación Académica</h5>
      <div className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <label className="form-label d-block">Especialidades *</label>
        <div style={{ maxWidth: "800px", padding: "1rem" }}>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={[especialidades[4], especialidades[5]]}
            isMulti
            options={especialidades}
            placeholder={'Seleccione...'}
          />
        </div>
      </div>

      <div className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <label className="form-label d-block">
          Nivel máximo de titulación *
        </label>
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

      <div className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        {/* Columna para Otras Formaciones */}

        <label className="form-label" id="">
          Otras Formaciones <i className="bi bi-bookmark"></i>
        </label>

        <input
          type="text"
          className="form-control"
          name="otrasFormaciones"
          value={user?.otrasFormaciones || ""}
          onChange={onChange}
        />
      </div>
    </>
  );
}
