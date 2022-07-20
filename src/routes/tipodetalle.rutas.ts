import { Router } from "express";
import { getTipoDetalle,getTiposDetalle,updateTipoDetalle,createTipoDetalle } from "../controllers/tipodetalle.controlador";
import { validaJwt } from '../middlewares/validarJwt';


const rutasTipoDetalle = Router();

rutasTipoDetalle.get("/tipo-detalle/:id",validaJwt,getTipoDetalle);
rutasTipoDetalle.get("/tipo-detalle",validaJwt,getTiposDetalle);
rutasTipoDetalle.post("/tipo-detalle",validaJwt,createTipoDetalle);
rutasTipoDetalle.put("/tipo-detalle/:id",validaJwt,updateTipoDetalle);


export default rutasTipoDetalle;