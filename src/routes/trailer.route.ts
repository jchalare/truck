import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getOneTrailerById, getOneTrailerByPlate, createTrailer, getAllTrailers, updateTrailer } from "../controllers/trailer.controller";


const trailerRoutes = Router();

trailerRoutes.get("/trailer", validaJwt, getAllTrailers)
    .get("/trailer/:id", validaJwt, getOneTrailerById)
    .get("/trailer/:plate", validaJwt, getOneTrailerByPlate)
    .post("/trailer", validaJwt, createTrailer)
    .put("/trailer/:id", validaJwt, updateTrailer);


export default trailerRoutes;