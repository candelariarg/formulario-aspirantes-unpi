import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/api";

// Pide el CV con el token y lo deja como blob: sirve para la vista previa en un
// <iframe> y para descargarlo, sin exponer el token en la URL.
export function useCvBlob(postulante, activo) {
  const [url, setUrl] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const id = postulante?.id;
  const tieneCv = Boolean(postulante?.curriculum);

  useEffect(() => {
    if (!activo || !id || !tieneCv) {
      setUrl(null);
      setError("");
      return;
    }

    let objectUrl = null;
    const controlador = new AbortController();
    setCargando(true);
    setError("");

    const cargar = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/postulantes/${id}/cv/descargar`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          signal: controlador.signal,
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "no se pudo cargar la vista previa del cv.");
        }

        const blob = await res.blob();
        objectUrl = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
        setUrl(objectUrl);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "error al cargar el pdf.");
        setUrl(null);
      } finally {
        setCargando(false);
      }
    };

    cargar();

    return () => {
      controlador.abort();
      if (objectUrl) window.URL.revokeObjectURL(objectUrl);
    };
  }, [activo, id, tieneCv]);

  return { url, cargando, error };
}
