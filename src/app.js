import express from "express";
import cors from 'cors';
import alumnosRoutes from "./routes/alumnos.routes.js";
import cursosRoutes from "./routes/cursos.routes.js";
import authRoutes from "./routes/auth.routes.js"
const app = express();
const freeUse =['http://localhost:3000'];
//middlewares
app.use(cors({
    origin:freeUse
}))
app.use(express.json());
app.use(authRoutes);
app.use(cursosRoutes);
app.use(alumnosRoutes);
export default app;
