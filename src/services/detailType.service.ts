import { AppDataSource } from '../db/db';
import { DetailType } from '../entities/DetailTypeEntity';


export const getAllTypesService = async () => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(DetailType).find({
        select: {
            id: true,
            name: true,
            special: true
        },
        relations: {
            id_company: true,
            id_user: true,
        }
    });
}


export const getTypeByNameService = async (name, id_company) => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(DetailType).find({

        select: {
            id: true,
            name: true,
            special: true
        },
        relations: {
            id_company: true,
            id_user: true,
        },
        where: {
            name,
            id_company
        }
    });
}


export const createNewTypeService = async (typeData) => {

    const { name, id_company } = typeData;
    const dataSource = AppDataSource;

    const foundType = await dataSource.getRepository(DetailType).findOneBy({ name, id_company });

    if (foundType) {
        return {
            msg: `Type ${name} already exist!`,
            code: 400
        };
    } else {

        const newType = DetailType.create(typeData);
        return await DetailType.insert(newType);
    }
}


export const updateTypeService = async (typeData) => {

    const { name, id_company } = typeData;
    const dataSource = AppDataSource;

    const foundType = await dataSource.getRepository(DetailType).findOneBy({ name, id_company });

    if (foundType) {

        return { msg: `Type does not exist !`, code: 404 };

    } else {

        try {

            const updatedType = DetailType.merge(typeData);
            return await DetailType.update({ name, id_company }, updatedType);


        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }
}
