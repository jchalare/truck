import { Request, Response } from "express";
import { AppDataSource } from "../db/db";
import { Viaje } from '../entidades/ViajeEntidad';

const dataSource = AppDataSource;


export const getViajes = async (req: Request, res: Response): Promise<Response> => {
    const viajeEncontrado = await dataSource.getRepository(Viaje).find();
    return res.json(viajeEncontrado);
};

export const getViaje = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Viaje).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Viaje found'});
    }
    
};

export const createViajes = async (req: Request, res: Response): Promise<Response> => {
    const nuevoViaje =  dataSource.getRepository(Viaje).create(req.body);
    const respuesta = await dataSource.getRepository(Viaje).save(nuevoViaje);
    return res.json(respuesta);
};

export const updateViajes = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const viajeEncontrado = await dataSource.getRepository(Viaje).findOneBy({id});
    if (viajeEncontrado) {
        const clave = req.body
        dataSource.getRepository(Viaje).merge(viajeEncontrado, clave);
        const results = await dataSource.getRepository(Viaje).save(viajeEncontrado);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Viaje found'});
  };
  