import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Manifiesto } from '../entidades/ManifiestoEntidad';

export const getManifiestos = async (req: Request, res: Response): Promise<Response> => {
    const ManifiestoEncontrado = await getRepository(Manifiesto).find();
    return res.json(ManifiestoEncontrado);
};

export const getManifiesto = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Manifiesto).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not manifiesto found'});
    }
    
};

export const createManifiestos = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoManifiesto =  getRepository(Manifiesto).create(req.body);
    const respuesta = await getRepository(Manifiesto).save(nuevoManifiesto);
    return res.json(respuesta);
};

export const updateManifiestos = async (req: Request, res: Response): Promise<Response> => {
    const manifiesto = await getRepository(Manifiesto).findOne(req.params.id);
    if (manifiesto) {
        const clave = req.body
        getRepository(Manifiesto).merge(manifiesto, clave);
        const results = await getRepository(Manifiesto).save(manifiesto);
      return res.json(results);
    }
  
    return res.json({msg: 'Not manifiesto found'});
  };
  