import { Router } from "express";
const router = Router();

import {getUsuarios, login} from '../controllers/user.controllers.js';

router.post("/login", login);
router.get("/usuarios", getUsuarios);
export default router;