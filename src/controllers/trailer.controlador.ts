import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Trailer } from '../entidades/TrailerEntidad';

export const getTrailers = async (req: Request, res: Response): Promise<Response> => {
    const TrailerEncontrado = await getRepository(Trailer).find();
    return res.json(TrailerEncontrado);
};

export const getTrailer = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Trailer).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not trailer found'});
    }
    
};

export const createTrailers = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoTrailer =  getRepository(Trailer).create(req.body);
    const respuesta = await getRepository(Trailer).save(nuevoTrailer);
    return res.json(respuesta);
};

export const updateTrailers = async (req: Request, res: Response): Promise<Response> => {
    const trailer = await getRepository(Trailer).findOne(req.params.id);
    if (trailer) {
        const clave = req.body
        getRepository(Trailer).merge(trailer, clave);
        const results = await getRepository(Trailer).save(trailer);
      return res.json(results);
    }
  
    return res.json({msg: 'Not trailer found'});
  };
  