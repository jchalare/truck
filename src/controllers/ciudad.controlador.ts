import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Ciudad } from '../entidades/CiudadEntidad';

export const getCiudades = async (req: Request, res: Response): Promise<Response> => {
    const CiudadEncontrado = await getRepository(Ciudad).find();
    return res.json(CiudadEncontrado);
};

export const getCiudad = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Ciudad).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Ciudad found'});
    }
    
};

export const createCiudades = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoCiudad =  getRepository(Ciudad).create(req.body);
    const respuesta = await getRepository(Ciudad).save(nuevoCiudad);
    return res.json(respuesta);
};

export const updateCiudades = async (req: Request, res: Response): Promise<Response> => {
    const ciudad = await getRepository(Ciudad).findOne(req.params.id);
    if (ciudad) {
        const clave = req.body
        getRepository(Ciudad).merge(ciudad, clave);
        const results = await getRepository(Ciudad).save(Ciudad);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  