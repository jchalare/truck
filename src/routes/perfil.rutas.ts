import { Router } from "express";
import { getPerfil,getPerfiles,createPerfiles,updatePerfiles } from '../controllers/perfil.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasPerfil = Router();

rutasPerfil.get("/perfil",validaJwt,getPerfiles);
rutasPerfil.get("/Perfil/:id",validaJwt,getPerfil);
rutasPerfil.post("/Perfil",validaJwt,createPerfiles);
rutasPerfil.put("/Perfil/:id",validaJwt,updatePerfiles);


export default rutasPerfil;