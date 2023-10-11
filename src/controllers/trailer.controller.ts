import { Request, Response } from "express";
import {
    getTrailerByIdService,
    createNewTrailerService,
    getAllTrailersService,
    getTrailerByPlateService,
    updateTrailerService,
} from "../services/trailer.service";

export const getAllTrailers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const trailersData = await getAllTrailersService();
    return res.send(trailersData);
};

export const getOneTrailerById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id } = req.params;
    const trailerData = await getTrailerByIdService(id);
    return res.send(trailerData);
};

export const getOneTrailerByPlate = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { plate } = req.params;
    const trailerData = await getTrailerByPlateService(plate);
    return res.send(trailerData);
};

export const createTrailer = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewTrailerService(req.body));
};

export const updateTrailer = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateTrailerService(req.body));
};
