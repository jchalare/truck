import { Router } from "express";
import { getCiudades,createCiudades,updateCiudades,getCiudad } from '../controllers/ciudad.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasCiudad = Router();

rutasCiudad.get("/ciudad",validaJwt,getCiudades);
rutasCiudad.get("/ciudad/:id",validaJwt,getCiudad);
rutasCiudad.post("/ciudad",validaJwt,createCiudades);
rutasCiudad.put("/ciudad/:id",validaJwt,updateCiudades);

export default rutasCiudad;