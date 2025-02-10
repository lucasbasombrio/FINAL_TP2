import { Router } from "express";
import Controller from "../controller/Controller.js";

const routes = Router();
const controller = new Controller() 

 routes.post("/", controller.ingresarPalabra)

 routes.get("/", controller.listarPalabras)
 routes.get("/conteo", controller.contarPalabras);
 routes.get("/all")
 routes.get("/:cantidad", controller.allApiPalabras)


 routes.delete("/:palabra", controller.borrarPalabras)

export default routes;