import { Router } from "express";
import { getTrailers,createTrailers,updateTrailers,getTrailer } from '../controllers/trailer.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasTrailer = Router();

rutasTrailer.get("/trailer",validaJwt,getTrailers);
rutasTrailer.get("/trailer/:id",validaJwt,getTrailer);
rutasTrailer.post("/trailer",validaJwt,createTrailers);
rutasTrailer.put("/trailer/:id",validaJwt,updateTrailers);


export default rutasTrailer;