import { Request, Response } from "express";
import { Vehiculo } from '../entidades/VehiculoEntidad';
import { AppDataSource } from "../db/db";

const dataSource = AppDataSource;


export const getVehiculos = async (req: Request, res: Response): Promise<Response> => {
    const VehiculoEncontrado = await dataSource.getRepository(Vehiculo).find();
    return res.json(VehiculoEncontrado);
};

export const getVehiculo = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Vehiculo).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Vehiculo found'});
    }
    
};

export const createVehiculos = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoVehiculo =  dataSource.getRepository(Vehiculo).create(req.body);
    const respuesta = await dataSource.getRepository(Vehiculo).save(nuevoVehiculo);
    return res.json(respuesta);
};

export const updateVehiculos = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const vehiculo = await dataSource.getRepository(Vehiculo).findOneBy({id});
    if (vehiculo) {
        const clave = req.body
        dataSource.getRepository(Vehiculo).merge(vehiculo, clave);
        const results = await dataSource.getRepository(Vehiculo).save(Vehiculo);
      return res.json(results);
    }
  
    return res.json({msg: 'Not Vehiculo found'});
  };
  