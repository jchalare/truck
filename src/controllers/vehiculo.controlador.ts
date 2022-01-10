import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Vehiculo } from '../entidades/VehiculoEntidad';

export const getVehiculos = async (req: Request, res: Response): Promise<Response> => {
    const VehiculoEncontrado = await getRepository(Vehiculo).find();
    return res.json(VehiculoEncontrado);
};

export const getVehiculo = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Vehiculo).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Vehiculo found'});
    }
    
};

export const createVehiculos = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoVehiculo =  getRepository(Vehiculo).create(req.body);
    const respuesta = await getRepository(Vehiculo).save(nuevoVehiculo);
    return res.json(respuesta);
};

export const updateVehiculos = async (req: Request, res: Response): Promise<Response> => {
    const vehiculo = await getRepository(Vehiculo).findOne(req.params.id);
    if (vehiculo) {
        const clave = req.body
        getRepository(Vehiculo).merge(vehiculo, clave);
        const results = await getRepository(Vehiculo).save(Vehiculo);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Vehiculo found'});
  };
  