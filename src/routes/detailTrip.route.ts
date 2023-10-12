import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllDetailTripsService, createNewDetailTripService, getDetailTripByIdService, updateDetailTripService } from "../services/detailTrip.service";

const detailTripRoutes = Router();

detailTripRoutes.get("/viaje-detalle/:id", validaJwt, getDetailTripByIdService)
    .get("/viaje-detalle/", validaJwt, getAllDetailTripsService)
    .post("/viaje-detalle", validaJwt, createNewDetailTripService)
    .put("/viaje-detalle/:id", validaJwt, updateDetailTripService);


export default detailTripRoutes;