import { Request, Response } from "express";
import { createNewProfileService, getAllProfilesService, getProfileByIdService, updateProfileService } from '../services/profile.service';

export const getAllProfiles = async (req: Request, res: Response): Promise<Response> => {
    const profilesData = await getAllProfilesService();
    return res.send(profilesData);
};

export const getOneProfileById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const profileData = await getProfileByIdService(id);
    return res.json().send(profileData);
};

export const createProfile = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await createNewProfileService(req.body));
};

export const updateProfile = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await updateProfileService(req.body));
};