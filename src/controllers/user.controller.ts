import { Request, Response } from "express";
import { getAllUsersService, createNewUserService, getOneUserByIdService, updateOneUserService } from "../services/user.service";


export const getAllUsers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const usersData = await getAllUsersService();
    return res.send(usersData);
};

export const getOneUserById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id } = req.params;
    const userData = await getOneUserByIdService(id);
    return res.send(userData);
};

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await createNewUserService(req.body));
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return res.send(await updateOneUserService(req.body));
};
