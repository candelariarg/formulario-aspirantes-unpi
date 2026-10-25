import { useState } from "react";
import { EncabezadoPanelAdmin } from "./Encabezado_panel.jsx";
import { BarraFiltros } from "./Barra_filtros.jsx";
import { TablaAspirantes } from "./Tabla_aspirantes.jsx";
import { Paginacion } from "./Paginacion.jsx";
import { ModalDetalles } from "./Modal_detalles.jsx";
import { ModalEntrevista } from "./Modal_entrevista.jsx";
import { usePostulantes } from "./hooks/usePostulantes.js";

const COLOR_PRIMARIO = "#14589f";
const COLOR_ACENTO = "#0d6efd";
const FILTROS_VACIOS = { busqueda: "", especialidad: "", nivel: "", expDocente: "", estado: "" };

// Pantalla del panel: solo arma el layout. Los datos y la paginación viven en
// usePostulantes, así el componente queda fácil de leer.
export function PanelPrincipal() {
  const [filtros, setFiltros] = useState(FILTROS_VACIOS);
  const [postulante, setPostulante] = useState(null);
  const [verDetalles, setVerDetalles] = useState(false);
  const [agendarEntrevista, setAgendarEntrevista] = useState(false);

  const { lista, total, paginas, pagina, setPagina, cargando, error, porPagina, cambiarEstado } =
    usePostulantes(filtros);

  const filtrando = Object.values(filtros).some(Boolean);
  const cambiarFiltro = (campo) => (valor) => setFiltros((prev) => ({ ...prev, [campo]: valor }));
  const limpiarFiltros = () => setFiltros(FILTROS_VACIOS);

  const cambiarEstadoPostulante = async (id, nuevoEstado) => {
    try {
      await cambiarEstado(id, nuevoEstado);
      setPostulante((prev) => (prev && prev.id === id ? { ...prev, estado: nuevoEstado } : prev));
    } catch (err) {
      alert(err.message || "Error al actualizar el estado del postulante.");
    }
  };

  const enviarCorreoResolucion = (seleccionado) => {
    if (!seleccionado?.mail) {
      alert("Este postulante no tiene un correo electrónico registrado.");
      return;
    }
    const asunto = encodeURIComponent("Postulación Docente - UNPilar");
    window.location.href = `mailto:${seleccionado.mail}?subject=${asunto}`;
  };

  const abrirDetalles = (seleccionado) => {
    setPostulante(seleccionado);
    setVerDetalles(true);
  };

  const abrirEntrevista = (seleccionado) => {
    setPostulante(seleccionado);
    setAgendarEntrevista(true);
  };

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
          <EncabezadoPanelAdmin colorPrimario={COLOR_PRIMARIO} />

          <BarraFiltros
            colorPrimario={COLOR_PRIMARIO}
            busqueda={filtros.busqueda}
            setBusqueda={cambiarFiltro("busqueda")}
            especialidad={filtros.especialidad}
            setEspecialidad={cambiarFiltro("especialidad")}
            nivel={filtros.nivel}
            setNivel={cambiarFiltro("nivel")}
            expDocente={filtros.expDocente}
            setExpDocente={cambiarFiltro("expDocente")}
            estado={filtros.estado}
            setEstado={cambiarFiltro("estado")}
            onLimpiar={limpiarFiltros}
          />

          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : cargando ? (
            <div className="text-center py-5">
              <div className="spinner-border" style={{ color: COLOR_PRIMARIO }} role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p className="text-secondary mt-3 mb-0">Cargando postulaciones...</p>
            </div>
          ) : total === 0 ? (
            <div className="text-center py-5 text-secondary">
              {filtrando
                ? "No se encontraron postulaciones que coincidan con los filtros."
                : "Todavía no hay postulaciones enviadas."}
            </div>
          ) : (
            <>
              <TablaAspirantes
                aspirantes={lista}
                colorPrimario={COLOR_PRIMARIO}
                onVerDetalles={abrirDetalles}
                onMarcarRevisado={(seleccionado) => cambiarEstadoPostulante(seleccionado.id, "Revisado")}
                onAgendarEntrevista={abrirEntrevista}
                onEnviarResolucion={enviarCorreoResolucion}
              />
              <Paginacion
                pagina={pagina}
                paginas={paginas}
                total={total}
                porPagina={porPagina}
                onCambiar={setPagina}
              />
            </>
          )}
        </div>

        <ModalDetalles
          modalDetalles={verDetalles}
          setModalDetalles={setVerDetalles}
          postulante={postulante}
          onCambiarEstado={cambiarEstadoPostulante}
          colorPrimario={COLOR_PRIMARIO}
        />
        <ModalEntrevista
          modalEntrevista={agendarEntrevista}
          setModalEntrevista={setAgendarEntrevista}
          postulante={postulante}
          onConfirmarEntrevista={(seleccionado) => cambiarEstadoPostulante(seleccionado.id, "A Entrevistar")}
          colorPrimario={COLOR_PRIMARIO}
          colorAcento={COLOR_ACENTO}
        />
      </div>
    </div>
  );
}
