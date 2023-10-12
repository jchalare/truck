import { Request, Response } from "express";
import { getAllDetailTripsService, createNewDetailTripService, getDetailTripByIdService, updateDetailTripService } from "../services/detailTrip.service";


export const getAllDetailsTrip = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const tripsData = await getAllDetailTripsService();
    return res.send(tripsData);
};

export const getOneDetailTripById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id } = req.params;
    const tripData = await getDetailTripByIdService(id);
    return res.send(tripData);
};

export const createDetailTrip = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewDetailTripService(req.body));
};

export const updateDetailTrip = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateDetailTripService(req.body));
};

