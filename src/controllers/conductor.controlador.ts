import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Conductor } from '../entidades/ConductorEntidad';

export const getConductores = async (req: Request, res: Response): Promise<Response> => {
    const ConductorEncontrado = await getRepository(Conductor).find();
    return res.json(ConductorEncontrado);
};

export const getConductor = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Conductor).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Conductor found'});
    }
    
};

export const createConductores = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoConductor =  getRepository(Conductor).create(req.body);
    const respuesta = await getRepository(Conductor).save(nuevoConductor);
    return res.json(respuesta);
};

export const updateConductors = async (req: Request, res: Response): Promise<Response> => {
    const conductor = await getRepository(Conductor).findOne(req.params.id);
    if (conductor) {
        const clave = req.body
        getRepository(Conductor).merge(conductor, clave);
        const results = await getRepository(Conductor).save(Conductor);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Conductor found'});
  };
  