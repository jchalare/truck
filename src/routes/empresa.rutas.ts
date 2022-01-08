import { Router } from "express";
import { getEmpresas,createEmpresas,updateEmpresas,getEmpresa} from '../controllers/empresa.controlador';
import { validaJwt } from '../middlewares/validarJwt';

const rutasEmpresa = Router();

rutasEmpresa.get("/empresa",validaJwt,getEmpresas);
rutasEmpresa.get("/empresa/:id",validaJwt,getEmpresa);
rutasEmpresa.post("/empresa",validaJwt,createEmpresas);
rutasEmpresa.put("/empresa/:id",validaJwt,updateEmpresas);


export default rutasEmpresa;