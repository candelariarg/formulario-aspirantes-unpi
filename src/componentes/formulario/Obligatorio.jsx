// Marca visual de campo obligatorio. El campo real ya lleva `required`, así que
// el asterisco se oculta a los lectores de pantalla (aria-hidden) para no leerlo.
export function Obligatorio() {
  return (
    <span className="campo-obligatorio" aria-hidden="true">
      *
    </span>
  );
}
