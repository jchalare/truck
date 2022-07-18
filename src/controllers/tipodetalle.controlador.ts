import { Request, Response } from "express";
import { AppDataSource } from "../db/db";
import { TipoDetalleEntidad } from "../entidades/TipoDetalleEntidad";

const dataSource = AppDataSource;


export const getTiposDetalle = async (req: Request, res: Response): Promise<Response> => {
    const tipoDetalleEncontrado = await dataSource.getRepository(TipoDetalleEntidad).find();
    return res.json(tipoDetalleEncontrado);
};

export const getTipoDetalle = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(TipoDetalleEntidad).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not tipo detalle found'});
    }
    
};

export const createTipoDetalle = async (req: Request, res: Response): Promise<Response> => {
    const nuevoTipo =  dataSource.getRepository(TipoDetalleEntidad).create(req.body);
    const respuesta = await dataSource.getRepository(TipoDetalleEntidad).save(nuevoTipo);
    return res.json(respuesta);
};

export const updateTipoDetalle = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const tipoDetalleEncontrado = await dataSource.getRepository(TipoDetalleEntidad).findOneBy({id});
    if (tipoDetalleEncontrado) {
        const nombre = req.body
        dataSource.getRepository(TipoDetalleEntidad).merge(tipoDetalleEncontrado, nombre);
        const results = await dataSource.getRepository(TipoDetalleEntidad).save(tipoDetalleEncontrado);
      return res.json(results);
    }
  
    return res.json({msg: 'Not tipo detalle found'});
  };
  