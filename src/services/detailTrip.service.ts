import { AppDataSource } from '../db/db';
import { DetailTrip } from '../entities/DetailTripEntity';



export const getAllDetailTripsService = async () => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(DetailTrip).find({
        select: {
            id: true,
            item_detail: true,
            detail_value: true,
            detail_date: true,
            notes: true
        },
        relations: {
            id_trip: true,
            id_detail_type: true,
        }
    });
}


export const getDetailTripByIdService = async (id_trip) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(DetailTrip).find({

        select: {
            id: true,
            item_detail: true,
            detail_value: true,
            detail_date: true,
            notes: true
        },
        relations: {
            id_trip: true,
            id_detail_type: true,
        },
        where: {
            id_trip
        }
    });
}


export const createNewDetailTripService = async (detailData) => {

    const { id } = detailData;
    const dataSource = AppDataSource;

    const foundDetailTrip = await dataSource.getRepository(DetailTrip).findOneBy({ id });

    if (foundDetailTrip) {
        return {
            msg: `Detail ${id} already exist!`,
            code: 400
        };
    } else {

        const newDetail = DetailTrip.create(detailData);
        return await DetailTrip.insert(newDetail);
    }
}


export const updateDetailTripService = async (detailData) => {

    const { id } = detailData;

    try {

        const updatedDetail = DetailTrip.merge(detailData);
        return await DetailTrip.update({ id }, updatedDetail);


    } catch (error) {

        const { code, detail } = error;

        return { msg: detail, code };
    }

    /*const foundType = await dataSource.getRepository(DetailTrip).findOneBy({ name, id_company });

    if (foundType) {

        return { msg: `Type does not exist !`, code: 404 };

    } else {

        try {

            const updatedType = DetailTrip.merge(typeData);
            return await DetailTrip.update({ name, id_company }, updatedType);


        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }*/
}
