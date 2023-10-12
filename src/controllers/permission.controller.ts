import { Request, Response } from "express";
import { getPermissionById } from "../services/permission.service";
/*

export const getUserPermissions = async (req: Request, res: Response): Promise<Response> => {

    const {id} = req.params;
    const factoryData = await getAll(id);
    return res.json().send(factoryData);
    
};*/

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