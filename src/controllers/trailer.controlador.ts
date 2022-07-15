import { Request, Response } from "express";
import { Trailer } from '../entidades/TrailerEntidad';
import { AppDataSource } from '../db/db';



const dataSource = AppDataSource;

export const getTrailers = async (req: Request, res: Response): Promise<Response> => {
    const TrailerEncontrado = await dataSource.getRepository(Trailer).find();
    return res.json(TrailerEncontrado);
};

export const getTrailer = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Trailer).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not trailer found'});
    }
    
};

export const createTrailers = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoTrailer =  dataSource.getRepository(Trailer).create(req.body);
    const respuesta = await dataSource.getRepository(Trailer).save(nuevoTrailer);
    return res.json(respuesta);
};

export const updateTrailers = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const trailer = await dataSource.getRepository(Trailer).findOneBy({id});
    if (trailer) {
        const clave = req.body
        dataSource.getRepository(Trailer).merge(trailer, clave);
        const results = await dataSource.getRepository(Trailer).save(trailer);
      return res.json(results);
    }
  
    return res.json({msg: 'Not trailer found'});
  };
  