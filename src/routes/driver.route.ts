import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllDrivers, createDriver, getOneDriverById, updateDriver } from "../controllers/driver.controller";


const driverRoutes = Router();

driverRoutes.get("/driver", validaJwt, getAllDrivers)
    .get("/driver/:id", validaJwt, getOneDriverById)
    .post("/driver", validaJwt, createDriver)
    .put("/driver/:id", validaJwt, updateDriver);


export default driverRoutes;