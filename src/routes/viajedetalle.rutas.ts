import { Router } from "express";
import { getViajeDetalle,getViajeDetalles,updateViajeDetalle,createViajeDetalle } from "../controllers/viajedetalle.controlador";
import { validaJwt } from '../middlewares/validarJwt';

const rutasViajeDetalle = Router();

rutasViajeDetalle.get("/viaje-detalle/:id_usuario_creador/:id_tipo_detalle",validaJwt,getViajeDetalles);
rutasViajeDetalle.get("/viaje-detalle/:id",validaJwt,getViajeDetalle);
rutasViajeDetalle.post("/viaje-detalle",validaJwt,createViajeDetalle);
rutasViajeDetalle.put("/viaje-detalle/:id",validaJwt,updateViajeDetalle);


export default rutasViajeDetalle;