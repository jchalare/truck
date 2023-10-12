import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllTypes, createType, getOneTypeByName, updateType } from "../controllers/detailType.controller";



const detailTypeRoutes = Router();

detailTypeRoutes.get("/detail-type/:name", validaJwt, getOneTypeByName)
    .get("/detail-type", validaJwt, getAllTypes)
    .post("/detail-type", validaJwt, createType)
    .put("/detail-type/:id", validaJwt, updateType)


export default detailTypeRoutes;