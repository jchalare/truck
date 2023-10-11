import { AppDataSource } from '../db/db';
import { Trailer } from '../entities/TrailerEntity';



export const getAllTrailersService = async () => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Trailer).find({
        select: {
            id: true,
            plate: true
        }
    });
}


export const getTrailerByIdService = async (id) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Trailer).find({
        select: {
            id: true,
            plate: true
        },
        where: {
            id
        }
    });
}


export const getTrailerByPlateService = async (plate) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(Trailer).find({
        select: {
            id: true,
            plate: true
        },
        where: {
            plate
        }
    });
}

export const createNewTrailerService = async (trailerData) => {

    const { plate } = trailerData;
    const dataSource = AppDataSource;

    const foundTrailer = await dataSource.getRepository(Trailer).findOneBy({ plate });

    if (foundTrailer) {
        return {
            msg: `Trailer ${plate} already exist!`,
            code: 400
        };
    } else {

        const newTrailer = Trailer.create({ plate: plate.toUpperCase() });
        return await Trailer.insert(newTrailer);
    }
}


export const updateTrailerService = async (trailerData) => {

    const { id, plate } = trailerData;

    const foundTrailer = await getTrailerByIdService(id);

    if (foundTrailer.length === 0) {

        return { msg: `Trailer does not exist !`, code: 404 };

    } else {

        try {

            const updatedTrailer = Trailer.merge(trailerData, { plate: plate.toUpperCase() });
            return await Trailer.update({ id }, updatedTrailer);


        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }
}
