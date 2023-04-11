import express from "express";
import alumnosRoutes from "./routes/alumnos.routes.js";
import cursosRoutes from "./routes/cursos.routes.js";
const app = express();

//middlewares
app.use(express.json());
app.use(cursosRoutes);
app.use(alumnosRoutes);
export default app;
