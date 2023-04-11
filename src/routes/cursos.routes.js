import { Router } from "express";
const router = Router();

import {
  getCursos,
  createCurso,
  updateCurso,
  deleteCurso,
  getCurso,
} from "../controllers/cursos.controllers.js";

router.get("/cursos", getCursos);
router.post("/cursos/", createCurso);
router.put("/cursos/:id", updateCurso);
router.delete("/cursos/:id", deleteCurso);
router.get("/cursos/:id", getCurso);

export default router;
