import { Router } from "express";
import { getVehiculos,createVehiculos,updateVehiculos,getVehiculo } from '../controllers/vehiculo.controlador';
import { validaJwt } from '../middlewares/validarJwt';


const rutasVehiculo = Router();

rutasVehiculo.get("/vehiculo",validaJwt,getVehiculos);
rutasVehiculo.get("/vehiculo/:id",validaJwt,getVehiculo);
rutasVehiculo.post("/vehiculo",validaJwt,createVehiculos);
rutasVehiculo.put("/vehiculo/:id",validaJwt,updateVehiculos);


export default rutasVehiculo; 