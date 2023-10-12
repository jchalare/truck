import { Request, Response } from "express";
import {
    getVehicleByIdService,
    createNewVehicleService,
    getAllVehiclesService,
    getVehicleByPlateService,
    updateVehicleService,
} from "../services/vehicle.service";

export const getAllVehicles = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const vehiclesData = await getAllVehiclesService();
    return res.send(vehiclesData);
};

export const getOneVehicleById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id } = req.params;
    const vehicleData = await getVehicleByIdService(id);
    return res.send(vehicleData);
};

export const getOneVehicleByPlate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { plate } = req.params;
    const vehicleData = await getVehicleByPlateService(plate);
    return res.send(vehicleData);
};

export const createVehicle = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewVehicleService(req.body));
};

export const updateVehicle = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateVehicleService(req.body));
};
