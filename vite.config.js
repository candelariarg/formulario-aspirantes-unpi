import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuración de Vite (reemplaza a react-scripts / Create React App).
export default defineConfig({
  plugins: [react()],
  server: {
    // El frontend queda en 3000 porque el backend arma el enlace de invitación como
    // `${FRONTEND_URL || "http://localhost:3000"}/postulacion?token=...`.
    // El backend debe escuchar en 3001 (PORT=3001 en usina-backend-rrhh/.env).
    port: 3000,
    // Si el puerto está ocupado, Vite falla en vez de saltar a 3001 y dejar la API
    // apuntando a sí misma: el error explícito es más barato que un 404 silencioso.
    strictPort: true,
    open: true,
  },
  build: {
    // Se mantiene "build" (no "dist") para no cambiar el flujo de despliegue existente.
    outDir: "build",
  },
});
