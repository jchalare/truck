import { Request, Response } from "express";
import { Conductor } from '../entidades/ConductorEntidad';
import { AppDataSource } from '../db/db';



const dataSource = AppDataSource

export const getConductores = async (req: Request, res: Response): Promise<Response> => {
    const ConductorEncontrado = await dataSource.getRepository(Conductor).find();
    return res.json(ConductorEncontrado);
};

export const getConductor = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Conductor).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Conductor found'});
    }
    
};

export const createConductores = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoConductor =  dataSource.getRepository(Conductor).create(req.body);
    const respuesta = await dataSource.getRepository(Conductor).save(nuevoConductor);
    return res.json(respuesta);
};

export const updateConductors = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const conductor = await dataSource.getRepository(Conductor).findOneBy({id});
    if (conductor) {
        const clave = req.body
        dataSource.getRepository(Conductor).merge(conductor, clave);
        const results = await dataSource.getRepository(Conductor).save(Conductor);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Conductor found'});
  };
  