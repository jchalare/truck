import { Router } from "express";
import { getUsuarios,createUsuarios,updateUsuarios,getUsuario,loginUsuario } from '../controllers/usuario.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasUsuario = Router();

rutasUsuario.get("/usuario",validaJwt,getUsuarios);
rutasUsuario.get("/usuario/:id",validaJwt,getUsuario);
rutasUsuario.post("/usuario",validaJwt,createUsuarios);
rutasUsuario.post("/usuario/login",loginUsuario);
rutasUsuario.put("/usuario/:id",validaJwt,updateUsuarios);


export default rutasUsuario;