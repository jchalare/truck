import { Request, Response } from "express";
import { Compania } from "../entidades/CompaniaEntidad";
import { AppDataSource } from '../db/db';



const dataSource = AppDataSource;



export const getCompanias = async (req: Request, res: Response): Promise<Response> => {
    const CompaniaEncontrado = await dataSource.getRepository(Compania).find();
    return res.json(CompaniaEncontrado);
};

export const getCompania = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Compania).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Compania found'});
    }
    
};

export const createCompanias = async (req: Request, res: Response): Promise<Response> => {
    const nuevoCompania =  dataSource.getRepository(Compania).create(req.body);
    const respuesta = await dataSource.getRepository(Compania).save(nuevoCompania);
    return res.json(respuesta);
};

export const updateCompanias = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const compania = await dataSource.getRepository(Compania).findOneBy({id});
    if (compania) {
        const nombre = req.body
        dataSource.getRepository(Compania).merge(compania, nombre);
        const results = await dataSource.getRepository(Compania).save(compania);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Compania found'});
  };
  