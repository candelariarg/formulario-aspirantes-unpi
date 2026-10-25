// lee la url del backend desde variables de entorno (vite) o usa localhost:3001 por defecto en local
const rawUrl =
  import.meta.env?.VITE_API_URL ||
  import.meta.env?.REACT_APP_API_URL ||
  "http://localhost:3001";

export const API_BASE_URL = rawUrl.replace(/\/$/, "");
