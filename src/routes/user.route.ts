import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllUsers, createUser, getOneUserById, updateUser } from "../controllers/user.controller";
import { userLogIn } from "../utils/user.utils";

const userRoutes = Router();

userRoutes.get("/user", validaJwt, getAllUsers)
    .get("/user/:id", validaJwt, getOneUserById)
    .post("/user", createUser)
    .post("/user/login", userLogIn)
    .put("/user/:id", validaJwt, updateUser);


export default userRoutes;