import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Perfil } from "../entidades/PerfilEntidad";


export const getPerfiles = async (req: Request, res: Response): Promise<Response> => {
    const PerfilEncontrado = await getRepository(Perfil).find();
    return res.json(PerfilEncontrado);
};

export const getPerfil = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Perfil).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Perfil found'});
    }
    
};

export const createPerfiles = async (req: Request, res: Response): Promise<Response> => {
    const nuevoPerfil =  getRepository(Perfil).create(req.body);
    const respuesta = await getRepository(Perfil).save(nuevoPerfil);
    return res.json(respuesta);
};

export const updatePerfiles = async (req: Request, res: Response): Promise<Response> => {
    const perfil = await getRepository(Perfil).findOne(req.params.id);
    if (perfil) {
        getRepository(Perfil).merge(perfil, req.body);
        const results = await getRepository(Perfil).save(perfil);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Perfil found'});
  };
  