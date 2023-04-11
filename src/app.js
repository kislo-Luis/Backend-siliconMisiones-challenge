import express from "express";
import alumnosRoutes from "./routes/alumnos.routes.js";
const app = express();

//middlewares
app.use(express.json());
app.use(alumnosRoutes);
export default app;
