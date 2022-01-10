import { Router } from "express";
import { getVehiculos,createVehiculos,updateVehiculos,getVehiculo } from '../controllers/vehiculo.controlador';

const rutasVehiculo = Router();

rutasVehiculo.get("/vehiculo",getVehiculos);
rutasVehiculo.get("/vehiculo/:id",getVehiculo);
rutasVehiculo.post("/vehiculo",createVehiculos);
rutasVehiculo.put("/vehiculo/:id",updateVehiculos);


export default rutasVehiculo;