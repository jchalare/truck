import { Router } from "express";
import { getManifiestos,createManifiestos,updateManifiestos,getManifiesto } from '../controllers/manifiesto.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasManifiesto = Router();

rutasManifiesto.get("/manifiesto",validaJwt,getManifiestos);
rutasManifiesto.get("/manifiesto/:id",validaJwt,getManifiesto);
rutasManifiesto.post("/manifiesto",validaJwt,createManifiestos);
rutasManifiesto.put("/manifiesto/:id",validaJwt,updateManifiestos);


export default rutasManifiesto;