import { Request, Response } from "express";
import { AppDataSource } from "../db/db";
import { ViajeDetalle } from "../entidades/ViajeDetalleEntidad";

const dataSource = AppDataSource;


export const getViajeDetalles = async (req: Request, res: Response): Promise<Response> => {

    const criterios = req.params;

    const {id_usuario_creador,id_tipo_detalle} = criterios;

    const viajeDetalles = await dataSource.getRepository(ViajeDetalle).find(criterios);

    if(viajeDetalles){
        return res.json(viajeDetalles);
    }else{
        return res.json({msg: 'Not viaje detalles found'});
    }

};

export const getViajeDetalle = async (req: Request, res: Response): Promise<Response> => {

    const criterios = req.params;

    const {id_viaje} = criterios;

    const results = await dataSource.getRepository(ViajeDetalle).find(criterios);

    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not viaje detalle found'});
    }
    
};

export const createViajeDetalle = async (req: Request, res: Response): Promise<Response> => {
    const nuevoDetalle =  dataSource.getRepository(ViajeDetalle).create(req.body);
    const respuesta = await dataSource.getRepository(ViajeDetalle).save(nuevoDetalle);
    return res.json(respuesta);
};

export const updateViajeDetalle = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const tipoDetalleEncontrado = await dataSource.getRepository(ViajeDetalle).findOneBy({id});
    if (tipoDetalleEncontrado) {
        const valor_detalle = req.body
        dataSource.getRepository(ViajeDetalle).merge(tipoDetalleEncontrado, valor_detalle);
        const results = await dataSource.getRepository(ViajeDetalle).save(tipoDetalleEncontrado);
      return res.json(results);
    }
  
    return res.json({msg: 'Not tipo detalle found'});
  };
  