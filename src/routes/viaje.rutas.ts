import { Router } from "express";
import { getViajes,createViajes,updateViajes,getViaje } from '../controllers/viaje.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasViaje = Router();

rutasViaje.get("/viaje",validaJwt,getViajes);
rutasViaje.get("/viaje/:id",validaJwt,getViaje);
rutasViaje.post("/viaje",validaJwt,createViajes);
rutasViaje.put("/viaje/:id",validaJwt,updateViajes);


export default rutasViaje;