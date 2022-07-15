import { Request, Response } from "express";
import { Perfil } from "../entidades/PerfilEntidad";
import { AppDataSource } from "../db/db";

const dataSource = AppDataSource;


export const getPerfiles = async (req: Request, res: Response): Promise<Response> => {
    const PerfilEncontrado = await dataSource.getRepository(Perfil).find();
    return res.json(PerfilEncontrado);
};

export const getPerfil = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Perfil).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Perfil found'});
    }
    
};

export const createPerfiles = async (req: Request, res: Response): Promise<Response> => {
    const nuevoPerfil =  dataSource.getRepository(Perfil).create(req.body);
    const respuesta = await dataSource.getRepository(Perfil).save(nuevoPerfil);
    return res.json(respuesta);
};

export const updatePerfiles = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const perfil = await dataSource.getRepository(Perfil).findOneBy({id});
    if (perfil) {
        dataSource.getRepository(Perfil).merge(perfil, req.body);
        const results = await dataSource.getRepository(Perfil).save(perfil);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Perfil found'});
  };
  