import { Router } from "express";
import { getAllProfiles, getOneProfileById, createProfile, updateProfile } from '../controllers/profile.controller';
import { validaJwt } from '../middlewares/validarJwt';

const profileRoutes = Router();

/**
 * @swagger
 * /profile:
 *  get:
 *    summary: Returns a list of profiles
 *    tags: [Profiles]
 *    responses:
 *      200:
 *        description: the list of profiles
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/entities/Profile'
 */

profileRoutes.get("/profile", validaJwt, getAllProfiles);
profileRoutes.get("/profile/:id", validaJwt, getOneProfileById);
profileRoutes.post("/profile", validaJwt, createProfile);
profileRoutes.put("/profile/:id", validaJwt, updateProfile);


export default profileRoutes;