import { Router } from "express";
import TemperaturaController from "../controller/TemperaturaController.js";

const router = Router();

router.post("/", TemperaturaController.agregarTemperatura);

router.get("/rango", TemperaturaController.listarTemperaturasEnRango);

export default router;
