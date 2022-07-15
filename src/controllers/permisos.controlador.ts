import { Request, Response } from "express";
import { ILike } from "typeorm";
import { Permisos } from "../entidades/PermisosEntidad";
import { AppDataSource } from "../db/db";

const dataSource = AppDataSource;


export const getPermisoUsuario = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);
    const results = await dataSource.getRepository(Permisos).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Permisos found'});
    }
    
};

/*export const createPermisos = async (req: Request, res: Response): Promise<Response> => {
    const {id_usuario} = req.body;    
    const ciudadEncontrada = await dataSource.getRepository(Permisos).find(id_usuario);    
    
    if (ciudadEncontrada.length===0){
        const strNombre = JSON.stringify(nombre).toUpperCase();
        const objNombre = { nombre:JSON.parse(strNombre)}; 
        const nuevoCiudad =  dataSource.getRepository(Ciudad).create(objNombre);
        const respuesta = await dataSource.getRepository(Ciudad).save(nuevoCiudad);
        return res.json(respuesta);
    }else{
        return res.json({msg: `La ciudad ${nombre} ya existe`}); 
    }
};*/

/*
export const updatePermisoUsuario = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const permiso = await dataSource.getRepository(Permisos).findOneBy(id);
    if (permiso) {
        const objPermisos = req.body;
        dataSource.getRepository(Permisos).merge(permiso,objPermisos);
        const results = await dataSource.getRepository(Permisos).save(permiso);
        return res.json({msg:'ok'});    
     
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  */