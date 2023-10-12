import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getOneCityById, getAllCities, createCity, updateCity } from "../controllers/city.controller";

const cityRoutes = Router();

cityRoutes.get("/city", validaJwt, getAllCities)
    .get("/city/:id", validaJwt, getOneCityById)
    .post("/city", validaJwt, createCity)
    .put("/city/:id", validaJwt, updateCity)

export default cityRoutes;