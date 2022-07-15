import { Request, Response } from "express";
import { ILike } from "typeorm";
import { Ciudad } from '../entidades/CiudadEntidad';
import { AppDataSource } from '../db/db';



const dataSource = AppDataSource;

export const getCiudades = async (req: Request, res: Response): Promise<Response> => {
    const CiudadEncontrado = await dataSource.getRepository(Ciudad).find();
    return res.json(CiudadEncontrado);
};

export const getCiudad = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);
    const results = await dataSource.getRepository(Ciudad).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Ciudad found'});
    }
    
};

export const createCiudades = async (req: Request, res: Response): Promise<Response> => {
    const {nombre} = req.body;    
    const ciudadEncontrada = await dataSource.getRepository(Ciudad).findBy({nombre: ILike(`${nombre}`)});    
    
    if (ciudadEncontrada.length===0){
        const strNombre = JSON.stringify(nombre).toUpperCase();
        const objNombre = { nombre:JSON.parse(strNombre)}; 
        const nuevoCiudad =  dataSource.getRepository(Ciudad).create(objNombre);
        const respuesta = await dataSource.getRepository(Ciudad).save(nuevoCiudad);
        return res.json(respuesta);
    }else{
        return res.json({msg: `La ciudad ${nombre} ya existe`}); 
    }
};

export const updateCiudades = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const ciudad = await dataSource.getRepository(Ciudad).findOneBy({id});

    //return res.json(ciudad);
    if (ciudad) {
        const {nombre} = req.body;

        const ciudadEncontrada = await dataSource.getRepository(Ciudad).findBy({nombre: ILike(`${nombre}`)});
        if (ciudadEncontrada.length===0){
            const strNombre = JSON.stringify(nombre).toUpperCase();
            const objNombre = { nombre:JSON.parse(strNombre)}; 
            dataSource.getRepository(Ciudad).merge(ciudad, objNombre);
            const results = await dataSource.getRepository(Ciudad).save(ciudad);

            return res.json({nombre:ciudad.nombre, id:ciudad.id});    
        }else{
            return res.json({msg: `La ciudad ${nombre} ya existe`}); 
        }
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  