import React, { useState } from "react";
import { EncabezadoPanelAdmin } from "./Encabezado_panel.jsx";
import { BarraFiltros } from "./Barra_filtros.jsx";
import { ModalDetalles } from "./Modal_detalles.jsx";
import { ModalEntrevista } from "./Modal_entrevista.jsx";
import { TablaAspirantes } from "./Tabla_aspirantes.jsx";

export function PanelPrincipal() {
  const [modalDetalles, setModalDetalles] = useState(false);
  const [modalEntrevista, setModalEntrevista] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const colorPrimario = "#14589f";
  const colorAcento = "#0d6efd";

  const aspirantes = [
    { id: 1, fecha: "25/09/2026", nombre: "Paez, Nyx Margot", especialidad: "Tecnologia e Informatica", nivel: "Maestría", estado: "Pendiente" },
    { id: 2, fecha: "26/09/2026", nombre: "Gómez, Lucía Beatriz", especialidad: "Arte y Creatividad", nivel: "Grado", estado: "Revisado" },
    { id: 3, fecha: "27/09/2026", nombre: "Pérez, Martín", especialidad: "Ciencias de la salud", nivel: "Doctorado", estado: "Pendiente" },
  ];

  const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const aspirantesFiltrados = aspirantes.filter((a) => {
    const palabras = normalizar(busqueda).split(" ").filter(Boolean);
    return palabras.every((p) => normalizar(a.nombre).includes(p));
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#f4f6f9",
        overflowY: "auto",
        zIndex: 1000
      }}
      className="text-dark"
    >
      <div className="container-fluid py-4 px-4 px-xl-5 d-flex flex-column align-items-center">
        <div className="w-100">

          {/* Encabezado */}
          <EncabezadoPanelAdmin colorPrimario={colorPrimario} />

          {/* Barra de Filtros */}
          <BarraFiltros
            colorPrimario={colorPrimario}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />

          {/* Tabla de Aspirantes */}
          <TablaAspirantes
            aspirantes={aspirantesFiltrados}
            busqueda={busqueda}
            colorPrimario={colorPrimario}
            onVerDetalles={() => setModalDetalles(true)}
            onAgendarEntrevista={() => setModalEntrevista(true)}
          />

        </div>

        {/* Modales */}
        <ModalDetalles
          modalDetalles={modalDetalles}
          setModalDetalles={setModalDetalles}
          colorPrimario={colorPrimario}
        />
        <ModalEntrevista
          modalEntrevista={modalEntrevista}
          setModalEntrevista={setModalEntrevista}
          colorPrimario={colorPrimario}
          colorAcento={colorAcento}
        />

      </div>
    </div>
  );
}