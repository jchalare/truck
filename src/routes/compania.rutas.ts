import { Router } from "express";
import { getCompania,getCompanias,createCompanias,updateCompanias } from '../controllers/compania.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasCompania = Router();

rutasCompania.get("/compania",validaJwt,getCompanias);
rutasCompania.get("/compania/:id",validaJwt,getCompania);
rutasCompania.post("/compania",validaJwt,createCompanias);
rutasCompania.put("/compania/:id",validaJwt,updateCompanias);


export default rutasCompania;