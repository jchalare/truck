import { User } from "../entities/UserEntity";
import { AppDataSource } from '../db/db';



export const getAllUsersService = async () => {
    const dataSource = AppDataSource;
    return await dataSource.getRepository(User).find({
        select: {
            id: true,
            name: true,
            email: true,
            state: true
        },
        relations: {
            id_profile: true,
            id_company: true,
            id_user: true
        }
    });
}

export const getOneUserByIdService = async (id) => {

    const dataSource = AppDataSource;
    return await dataSource.getRepository(User).find({
        select: {
            id: true,
            name: true,
            email: true,
            state: true
        },
        relations: {
            id_profile: true,
            id_company: true,
            id_user: true
        },
        where: {
            id
        }
    });
}

export const updateOneUserService = async (userData) => {
    const { id } = userData;

    const foundUserData = await getOneUserByIdService(id);

    if (foundUserData.length === 0) {

        return { msg: `User does not exist !`, code: 404 };

    } else {

        try {

            const updatedUser = User.merge(userData);
            await User.update({ id }, updatedUser);

            return updatedUser;

        } catch (error) {

            const { code, detail } = error;

            return { msg: detail, code };
        }
    }
}

export const createNewUserService = async (userData) => {
    const { email, id_company } = userData;
    const dataSource = AppDataSource;

    const foundUserByEmail = await User.findOneBy({ email });  //await dataSource.getRepository(User).findOneBy({ email });

    if (foundUserByEmail) {
        return {
            msg: `User ${email} already exist!`,
            code: 400
        };
    } else {

        const newUser = User.create(userData);
        await User.insert(newUser);
        delete newUser.id
        return newUser;
    }
}
