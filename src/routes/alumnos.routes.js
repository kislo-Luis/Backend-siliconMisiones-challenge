import { Router } from "express";
const router = Router();

import {
  getAlumnos,
  getAlumno,
  createAlumno,
  updateAlumno,
  deleteAlumno,
} from "../controllers/alumnos.controllers.js";

router.get("/alumnos", getAlumnos);
router.post("/alumnos", createAlumno);
router.put("/alumnos/:id", updateAlumno);
router.delete("/alumnos/:id", deleteAlumno);
router.get("/alumnos/:id", getAlumno);

export default router;
