// Barra de paginación. Los totales los informa el backend, no se recalculan acá.
export function Paginacion({ pagina, paginas, total, porPagina, onCambiar }) {
  if (total === 0) return null;

  const desde = (pagina - 1) * porPagina + 1;
  const hasta = Math.min(pagina * porPagina, total);

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 px-2 text-secondary small">
      <span>
        Mostrando {desde}–{hasta} de {total} postulantes
      </span>

      {paginas > 1 && (
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={pagina <= 1}
            onClick={() => onCambiar(pagina - 1)}
          >
            Anterior
          </button>
          <span>
            Página {pagina} de {paginas}
          </span>
          <button
            className="btn btn-sm btn-outline-secondary"
            disabled={pagina >= paginas}
            onClick={() => onCambiar(pagina + 1)}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
