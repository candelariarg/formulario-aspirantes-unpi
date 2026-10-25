import { mostrar } from "./utiles.js";

// Par etiqueta/valor del modal de detalles: evita repetir <small> + <span>.
export function Dato({ etiqueta, valor, className = "col-md-6" }) {
  return (
    <div className={className}>
      <small className="text-secondary d-block">{etiqueta}</small>
      <span>{mostrar(valor)}</span>
    </div>
  );
}
