import { Router } from "express";
import { getGastos,updateGasto,createOtroGasto } from "../controllers/otrogasto.controlador";
import { validaJwt } from '../middlewares/validarJwt';


const rutasGastos = Router();

rutasGastos.get("/otrogasto",validaJwt,getGastos);
//rutasTrailer.get("/otrogasto/:id",validaJwt,getTrailer);
rutasGastos.post("/otrogasto",validaJwt,createOtroGasto);
rutasGastos.put("/otrogasto/:id",validaJwt,updateGasto);


export default rutasGastos;