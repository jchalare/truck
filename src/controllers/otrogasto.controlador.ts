import { Request, Response } from "express";
import { AppDataSource } from "../db/db";
import { OtrosGastos } from "../entidades/OtrosGastosEntidad";
import { ViajeDetalle } from "../entidades/ViajeDetalleEntidad";


const dataSource = AppDataSource;


export const getGastos = async (req: Request, res: Response): Promise<Response> => {

    const criterios = req.params;

    const otrosGastos = await dataSource.getRepository(OtrosGastos).find(criterios);

    if(otrosGastos){
        return res.json(otrosGastos);
    }else{
        return res.json({msg: 'Not otros gastos found'});
    }

};


export const createOtroGasto = async (req: Request, res: Response): Promise<Response> => {
    const nuevoGasto =  dataSource.getRepository(OtrosGastos).create(req.body);
    const respuesta = await dataSource.getRepository(OtrosGastos).save(nuevoGasto);
    return res.json(respuesta);
};

export const updateGasto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);

    const gastoEncontrado = await dataSource.getRepository(OtrosGastos).findOneBy({id});
    if (gastoEncontrado) {
        const valor_detalle = req.body
        await dataSource.getRepository(OtrosGastos).merge(gastoEncontrado, valor_detalle);
        const results = await dataSource.getRepository(OtrosGastos).save(gastoEncontrado);
      return res.json(results);
    }
  
    return res.json({msg: 'Not otros gastos found'});
  };
  