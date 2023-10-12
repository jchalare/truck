import { Router } from "express";

import { validaJwt } from '../middlewares/validarJwt';
import { getAllVehicles, createVehicle, getOneVehicleById, getOneVehicleByPlate, updateVehicle } from "../controllers/vehicle.controller";


const vehicleRoutes = Router();

vehicleRoutes.get("/vehicle", validaJwt, getAllVehicles)
    .get("/vehicle/:id", validaJwt, getOneVehicleById)
    .get("/vehicle/:plate", validaJwt, getOneVehicleByPlate)
    .post("/vehicle", validaJwt, createVehicle)
    .put("/vehicle/:id", validaJwt, updateVehicle);


export default vehicleRoutes; 