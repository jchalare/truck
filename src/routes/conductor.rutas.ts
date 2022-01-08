import { Router } from "express";
import { getConductores,createConductores,updateConductors,getConductor } from '../controllers/conductor.controlador';
import { validaJwt } from '../middlewares/validarJwt';


const rutasConductor = Router();

rutasConductor.get("/conductor",validaJwt,getConductores);
rutasConductor.get("/conductor/:id",validaJwt,getConductor);
rutasConductor.post("/conductor",validaJwt,createConductores);
rutasConductor.put("/conductor/:id",validaJwt,updateConductors);


export default rutasConductor;