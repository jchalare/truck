import { AppDataSource } from '../db/db';
import { Trip } from '../entities/TripEntity';


export const getAllTripsService = async (criteria, data) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Trip).find({
        select: {
            id: true,
            trip_number: true,
            trip_date: true,
            freight_value: true,
            advance_value: true,
            total_value: true,
            real_value: true,
            is_paid: true,
            paid_date: true,
            notes: true
        },
        relations: {
            id_company: true,
            id_city_destination: true,
            id_city_origin: true,
            id_factory: true,
            id_vehicle: true,
            id_user: true,
            id_driver: true,
        },
        where: criteria = data,
    });
}


export const getTripByNumberService = async (trip_number) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Trip).find({

        select: {
            id: true,
            trip_number: true,
            trip_date: true,
            freight_value: true,
            advance_value: true,
            total_value: true,
            real_value: true,
            is_paid: true,
            paid_date: true,
            notes: true
        },
        relations: {
            id_company: true,
            id_city_destination: true,
            id_city_origin: true,
            id_factory: true,
            id_vehicle: true,
            id_user: true,
            id_driver: true,
        },
        where: {
            trip_number
        }
    });
}


export const createNewTripService = async (tripData) => {

    const { trip_number } = tripData;
    const dataSource = AppDataSource;

    const foundTrip = await dataSource.getRepository(Trip).findOneBy({ trip_number });

    if (foundTrip) {
        return {
            msg: `Trip ${trip_number} already exist!`,
            code: 400
        };
    } else {

        const newTrip = Trip.create(tripData);
        return await Trip.insert(newTrip);
    }
}


export const updateTripService = async (tripData) => {

    const { id, trip_number } = tripData;

    const foundTrip = await getTripByNumberService(trip_number);

    if (foundTrip.length === 0) {

        return { msg: `Trip does not exist !`, code: 404 };

    } else {

        try {

            const updatedTrip = Trip.merge(tripData);
            return await Trip.update({ trip_number }, updatedTrip);


        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }
}
