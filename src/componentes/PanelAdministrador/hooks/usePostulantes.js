import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/api";

const API_POSTULANTES = `${API_BASE_URL}/api/postulantes`;
const POR_PAGINA = 20;
const ESPERA_BUSQUEDA = 350;

// Concentra el listado del panel: filtros, búsqueda con retardo y paginación.
// El backend responde { total, total_paginas, datos }; acá solo se guarda el estado.
export function usePostulantes({ busqueda, especialidad, nivel, expDocente, estado }) {
  const [pagina, setPagina] = useState(1);
  const [busquedaAplicada, setBusquedaAplicada] = useState("");
  const [resultado, setResultado] = useState({ lista: [], total: 0, paginas: 1 });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // espera a que la persona termine de tipear antes de consultar
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setBusquedaAplicada(busqueda.trim());
      setPagina(1);
    }, ESPERA_BUSQUEDA);
    return () => clearTimeout(temporizador);
  }, [busqueda]);

  // cualquier cambio de filtro vuelve a la primera página
  useEffect(() => {
    setPagina(1);
  }, [especialidad, nivel, expDocente, estado]);

  useEffect(() => {
    const controlador = new AbortController();
    let vigente = true;

    const cargar = async () => {
      setCargando(true);
      setError("");

      const token = localStorage.getItem("token");
      if (!token) {
        setError("No hay sesión activa. Iniciá sesión como administrador.");
        setCargando(false);
        return;
      }

      const params = new URLSearchParams({ page: String(pagina), limit: String(POR_PAGINA) });
      if (busquedaAplicada) params.set("search", busquedaAplicada);
      if (especialidad) params.set("especialidad", especialidad);
      if (nivel) params.set("nivel_titulacion", nivel);
      if (expDocente) params.set("exp_docente", expDocente);
      if (estado) params.set("estado", estado);

      try {
        const res = await fetch(`${API_POSTULANTES}?${params}`, {
          headers: { Authorization: `Bearer ${token}` },
          signal: controlador.signal,
        });

        if (res.status === 401 || res.status === 403) {
          setError("Sesión expirada o inválida. Volvé a iniciar sesión.");
          return;
        }

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Error al cargar postulantes (HTTP ${res.status})`);
        }

        const data = await res.json();
        if (!vigente) return;

        const lista = Array.isArray(data) ? data : Array.isArray(data?.datos) ? data.datos : [];
        const paginas = Math.max(1, Number(data?.total_paginas) || 1);
        setResultado({ lista, total: Number(data?.total) || lista.length, paginas });

        // si los filtros dejaron la página fuera de rango, se vuelve a la última válida
        if (pagina > paginas) setPagina(paginas);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Error al cargar las postulaciones.");
      } finally {
        if (vigente) setCargando(false);
      }
    };

    cargar();

    return () => {
      vigente = false;
      controlador.abort();
    };
  }, [pagina, busquedaAplicada, especialidad, nivel, expDocente, estado]);

  // cambia el estado de un postulante y lo refleja en la lista ya cargada
  const cambiarEstado = async (id, nuevoEstado) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_POSTULANTES}/${id}/estado`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ estado: nuevoEstado }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "no se pudo actualizar el estado.");
    }

    setResultado((prev) => ({
      ...prev,
      lista: prev.lista.map((p) => (p.id === id ? { ...p, estado: nuevoEstado } : p)),
    }));
  };

  return { ...resultado, pagina, setPagina, cargando, error, porPagina: POR_PAGINA, cambiarEstado };
}
