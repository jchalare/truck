import { Request, Response } from "express";
import { createNewFactoryService, getAllFactoriesService, getFactoryByIdService, updateFactoryService } from "../services/factory.service";


export const getAllFactories = async (req: Request, res: Response): Promise<Response> => {
     const factoriesData = await getAllFactoriesService();
    return res.json().send(factoriesData);
};

export const getOneFactoryById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const factoryData = await getFactoryByIdService(id);
    return res.json().send(factoryData);    
};

export const createFactory = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await createNewFactoryService(req.body));
};

export const updateFactory = async (req: Request, res: Response): Promise<Response> => {
     return res.json().send(await updateFactoryService(req.body));
  };