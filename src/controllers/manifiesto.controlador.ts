import { Request, Response } from "express";
import { AppDataSource } from "../db/db";
import { Manifiesto } from '../entidades/ManifiestoEntidad';

const dataSource = AppDataSource;


export const getManifiestos = async (req: Request, res: Response): Promise<Response> => {
    const ManifiestoEncontrado = await dataSource.getRepository(Manifiesto).find();
    return res.json(ManifiestoEncontrado);
};

export const getManifiesto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Manifiesto).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not manifiesto found'});
    }
    
};

export const createManifiestos = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoManifiesto =  dataSource.getRepository(Manifiesto).create(req.body);
    const respuesta = await dataSource.getRepository(Manifiesto).save(nuevoManifiesto);
    return res.json(respuesta);
};

export const updateManifiestos = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const manifiesto = await dataSource.getRepository(Manifiesto).findOneBy({id});
    if (manifiesto) {
        const clave = req.body
        dataSource.getRepository(Manifiesto).merge(manifiesto, clave);
        const results = await dataSource.getRepository(Manifiesto).save(manifiesto);
      return res.json(results);
    }
  
    return res.json({msg: 'Not manifiesto found'});
  };
  