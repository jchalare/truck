import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllTrips, createTrip, getOneTripByNumber, updateTrip } from "../controllers/trip.controller";

const tripRoutes = Router();

tripRoutes.get("/trip/:number", validaJwt, getOneTripByNumber)
    .get("/trip/:criteria/:data", validaJwt, getAllTrips)
    .post("/trip", validaJwt, createTrip)
    .put("/trip/:id", validaJwt, updateTrip)


export default tripRoutes;