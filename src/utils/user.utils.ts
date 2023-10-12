import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { envVariables } from "./envVariables";
import { User } from "../entities/UserEntity";
import { AppDataSource } from "../db/db";
import { Permission } from "../entities/PermissionEntity";



export const generateJwt = (uid: string) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, envVariables.HASH, {
            expiresIn: envVariables.EXPIREIN
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(envVariables.REJECT_MSG);
            } else {
                resolve(token);
            }
        })

    });
}

export const userLogIn = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;
    const dataSource = AppDataSource;

    try {
        //verificate email and password

        const foundUser = await dataSource.getRepository(User)
            .createQueryBuilder("user")
            .innerJoinAndSelect("user.id_profile", "profile")
            .innerJoinAndSelect("profile.id_company", "company")
            .where("user.email = :email ", { email })
            .getOne();



        console.log(foundUser);

        if (!foundUser) {
            return res.status(400).send({ msg: envVariables.WRONG_USER })
        }

        if (!foundUser.state) {
            return res.status(400).send({ msg: envVariables.WRONG_USER })
        }

        const validPassword = bcryptjs.compareSync(password, foundUser.password);

        if (!validPassword) {
            return res.status(400).send({ msg: envVariables.WRONG_USER })
        }

        const { id: id_user } = foundUser;

        //const userPermissions = await dataSource.getRepository(Permission).findOneBy({ id_user:foundUser.id });

        const userPermissions = await dataSource.getRepository(Permission)
            .createQueryBuilder("permission")
            .innerJoinAndSelect("user.id", "user")
            .where("permission.id_user = :id ", { id_user })
            .getOne();

        //Lets generate the JWT
        const token = await generateJwt(id_user);

        const userData = {
            ...foundUser,
            token
        }
        return res.json({ userData });
    } catch (error) {
        return res.status(500).json({ msg: envVariables.TOKE_ERR });
    }
};