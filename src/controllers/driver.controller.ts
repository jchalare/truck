import { Request, Response } from "express";
import { getAllDriversService, getDriverByIdService, createNewDriverService, updateDriverService } from '../services/driver.service';

export const getAllDrivers = async (req: Request, res: Response): Promise<Response> => {
     const companiesData = await getAllDriversService();
    return res.json().send(companiesData);
};

export const getOneDriverById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const companyData = await getDriverByIdService(id);
    return res.json().send(companyData);    
};

export const createDriver = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await createNewDriverService(req.body));
};

export const updateDriver = async (req: Request, res: Response): Promise<Response> => {
     return res.json().send(await updateDriverService(req.body));
  };