import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Compania } from "../entidades/CompaniaEntidad";


export const getCompanias = async (req: Request, res: Response): Promise<Response> => {
    const CompaniaEncontrado = await getRepository(Compania).find();
    return res.json(CompaniaEncontrado);
};

export const getCompania = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Compania).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Compania found'});
    }
    
};

export const createCompanias = async (req: Request, res: Response): Promise<Response> => {
    const nuevoCompania =  getRepository(Compania).create(req.body);
    const respuesta = await getRepository(Compania).save(nuevoCompania);
    return res.json(respuesta);
};

export const updateCompanias = async (req: Request, res: Response): Promise<Response> => {
    const compania = await getRepository(Compania).findOne(req.params.id);
    if (compania) {
        const nombre = req.body
        getRepository(Compania).merge(compania, nombre);
        const results = await getRepository(Compania).save(compania);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Compania found'});
  };
  