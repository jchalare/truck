import { Request, Response } from "express";
import { getRepository,ILike,getConnection } from "typeorm";
import { Ciudad } from '../entidades/CiudadEntidad';

export const getCiudades = async (req: Request, res: Response): Promise<Response> => {
    const CiudadEncontrado = await getRepository(Ciudad).find();
    return res.json(CiudadEncontrado);
};

export const getCiudad = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);
    const results = await getRepository(Ciudad).findOne(id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Ciudad found'});
    }
    
};

export const createCiudades = async (req: Request, res: Response): Promise<Response> => {
    const {nombre} = req.body;    
    const ciudadEncontrada = await getRepository(Ciudad).find({nombre: ILike(`${nombre}`)});    
    
    if (ciudadEncontrada.length===0){
        const strNombre = JSON.stringify(nombre).toUpperCase();
        const objNombre = { nombre:JSON.parse(strNombre)}; 
        const nuevoCiudad =  getRepository(Ciudad).create(objNombre);
        const respuesta = await getRepository(Ciudad).save(nuevoCiudad);
        return res.json(respuesta);
    }else{
        return res.json({msg: `La ciudad ${nombre} ya existe`}); 
    }
};

export const updateCiudades = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const ciudad = await getRepository(Ciudad).findOne(id);

    //return res.json(ciudad);
    if (ciudad) {
        const {nombre} = req.body;

        const ciudadEncontrada = await getRepository(Ciudad).find({nombre: ILike(`${nombre}`)});
        if (ciudadEncontrada.length===0){
            const strNombre = JSON.stringify(nombre).toUpperCase();
            const objNombre = { nombre:JSON.parse(strNombre)}; 
            getRepository(Ciudad).merge(ciudad, objNombre);
            const results = await getRepository(Ciudad).save(ciudad);

            return res.json({nombre:ciudad.nombre, id:ciudad.id});    
        }else{
            return res.json({msg: `La ciudad ${nombre} ya existe`}); 
        }
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  