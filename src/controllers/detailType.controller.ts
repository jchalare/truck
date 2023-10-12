import { Request, Response } from "express";
import { getAllTypesService, createNewTypeService, getTypeByNameService, updateTypeService } from "../services/detailType.service";


export const getAllTypes = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const typeData = await getAllTypesService();
    return res.send(typeData);
};

export const getOneTypeByName = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { name, id_company } = req.params;
    const typeData = await getTypeByNameService(name, id_company);
    return res.send(typeData);
};

export const createType = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewTypeService(req.body));
};

export const updateType = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateTypeService(req.body));
};

