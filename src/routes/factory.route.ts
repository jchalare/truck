import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllFactories, createFactory, getOneFactoryById, updateFactory } from "../controllers/factory.controller";


const factoryRoutes = Router();

factoryRoutes.get("/factory", validaJwt, getAllFactories)
    .get("/factory/:id", validaJwt, getOneFactoryById)
    .post("/factory", validaJwt, createFactory)
    .put("/factory/:id", validaJwt, updateFactory);


export default factoryRoutes;