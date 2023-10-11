import { AppDataSource } from '../db/db';
import { Vehicle } from '../entities/VehicleEntity';



export const getAllVehiclesService = async () => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Vehicle).find({
        select: {
            id: true,
            plate: true
        }
    });
}


export const getVehicleByIdService = async (id) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Vehicle).find({
        select: {
            id: true,
            plate: true
        },
        where: {
            id
        }
    });
}


export const getVehicleByPlateService = async (plate) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Vehicle).find({
        select: {
            id: true,
            plate: true
        },
        where: {
            plate
        }
    });
}

export const createNewVehicleService = async (vehicleData) => {

    const { plate } = vehicleData;
    const dataSource = AppDataSource;

    const foundVehicle = await dataSource.getRepository(Vehicle).findOneBy({ plate });

    if (foundVehicle) {
        return {
            msg: `Vehicle ${plate} already exist!`,
            code: 400
        };
    } else {

        const newVehicle = Vehicle.create({ plate: plate.toUpperCase() });
        return await Vehicle.insert(newVehicle);
    }
}


export const updateVehicleService = async (vehicleData) => {

    const { id, plate } = vehicleData;

    const foundVehicle = await getVehicleByIdService(id);

    if (foundVehicle.length === 0) {

        return { msg: `Vehicle does not exist !`, code: 404 };

    } else {

        try {

            const updatedVehicle = Vehicle.merge(vehicleData, { plate: plate.toUpperCase() });
            return await Vehicle.update({ id }, updatedVehicle);


        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }
}
