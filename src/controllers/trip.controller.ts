import { Request, Response } from "express";
import { getAllTripsService, createNewTripService, getTripByNumberService, updateTripService } from "../services/trip.service";


export const getAllTrips = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { criteria, data } = req.params;
    const tripsData = await getAllTripsService(criteria, data);
    return res.send(tripsData);
};

export const getOneTripByNumber = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { trip_number } = req.params;
    const tripData = await getTripByNumberService(trip_number);
    return res.send(tripData);
};

export const createTrip = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewTripService(req.body));
};

export const updateTrip = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateTripService(req.body));
};
