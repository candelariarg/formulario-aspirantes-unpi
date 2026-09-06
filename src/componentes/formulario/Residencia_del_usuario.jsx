import { useState, useEffect } from "react";
import { Dropdown, Form, Container, Row, Col } from "react-bootstrap";

export function Residencia() {
  const [residencia, setResidencia] = useState("");

//Esto es para manejar la selección de municipio y localidad, así como la búsqueda dentro de ellos.
  const [municipio, setMunicipio] = useState(null); //Para almacenar el municipio seleccionado.
  const [municipios, setMunicipios] = useState([]); //Para almacenar la lista de municipios de la API.
  const [busquedaMunicipio, setBusquedaMunicipio] = useState(""); //Para almacenar el texto de búsqueda del municipio y mostrarlo en el dropdown.

  const [localidad, setLocalidad] = useState(null); //Para almacenar la localidad seleccionada.
  const [localidades, setLocalidades] = useState([]); //Para almacenar la lista de localidades de la API.
  const [busquedaLocalidad, setBusquedaLocalidad] = useState(""); //Para almacenar el texto de búsqueda de la localidad y mostrarlo en el dropdown.

  const [calle, setCalle] = useState(""); //Para almacenar la calle ingresada.
  const [altura, setAltura] = useState(""); //Para almacenar la altura ingresada.

//Carga la lista de municipios cuando eligen PBA.
  useEffect(() => {
    if (residencia !== "PBA") {
      setMunicipios([]);
      setMunicipio(null);
      return;
    }

    setMunicipio(null); //Reinicia el municipio seleccionado al cambiar la residencia.

    fetch(
      "https://apis.datos.gob.ar/georef/api/municipios?provincia=buenos%20aires&max=200&campos=id,nombre&orden=nombre"
    )
      .then((res) => res.json())
      .then((data) => setMunicipios(data.municipios || []));
  }, [residencia]);

  //Carga la lista de localidades cuando eligen un municipio.
  useEffect(() => {
    if (!municipio) {
      setLocalidades([]);
      return;
    }

    setLocalidad(null); //Reinicia la localidad seleccionada al cambiar el municipio.

    fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?municipio=${municipio.id}&max=200&campos=id,nombre&orden=nombre`
    )
      .then((res) => res.json())
      .then((data) => setLocalidades(data.localidades || []));
  }, [municipio]);

//Filtra los municipios y localidades según la búsqueda de la persona.
  const municipiosFiltrados = municipios.filter((m) =>
    m.nombre.toLowerCase().includes(busquedaMunicipio.toLowerCase()) 
  ); 

  const localidadesFiltradas = localidades.filter((l) =>
    l.nombre.toLowerCase().includes(busquedaLocalidad.toLowerCase())
  );

//Muestra el campo Calle y Altura:
//En CABA, recien cuando se elige esa opción.
//En PBA, recién cuando ya hay localidad elegida.
  const mostrarDireccion = residencia === "CABA" || (residencia === "PBA" && localidad);

  return (
    <Container className="mt-3">
      <Row className="g-3">
        <Col md={7}>
          <Form.Label>Residencia *</Form.Label>
          <Form.Select
            value={residencia}
            onChange={(e) => setResidencia(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="CABA">C.A.B.A</option>
            <option value="PBA">Provincia de Buenos Aires</option>
          </Form.Select>
        </Col>

        {residencia === "PBA" && (
          <Col md={7}>
            <Form.Label>Municipio</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100 text-start">
                {municipio ? municipio.nombre : "Seleccionar municipio..."}
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="w-100 p-2"
                style={{ maxHeight: "250px", overflowY: "auto" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  className="mb-2"
                  value={busquedaMunicipio}
                  onChange={(e) => setBusquedaMunicipio(e.target.value)}
                  onClick={(e) => e.stopPropagation()} //Evita que el click cierre el menú.
                />
                {municipiosFiltrados.length === 0 && (
                  <Dropdown.ItemText>Sin resultados</Dropdown.ItemText>
                )}
                {municipiosFiltrados.map((m) => (
                  <Dropdown.Item
                    key={m.id}
                    onClick={() => setMunicipio(m)}
                  >
                    {m.nombre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        )}

        {municipio && (
          <Col md={7}>
            <Form.Label>Localidad</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100 text-start">
                {localidad ? localidad.nombre : "Seleccionar localidad..."}
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="w-100 p-2"
                style={{ maxHeight: "250px", overflowY: "auto" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  className="mb-2"
                  value={busquedaLocalidad}
                  onChange={(e) => setBusquedaLocalidad(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                {localidadesFiltradas.length === 0 && (
                  <Dropdown.ItemText>Sin resultados</Dropdown.ItemText>
                )}
                {localidadesFiltradas.map((l) => (
                  <Dropdown.Item
                    key={l.id}
                    onClick={() => setLocalidad(l)}
                  >
                    {l.nombre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        )}

        {mostrarDireccion && (
          <>
            <Col md={7}>
              <Form.Label>Calle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Av. Rivadavia"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </Col>

            <Col md={7}>
              <Form.Label>Altura</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 1234"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Residencia;
