import { Request, Response } from "express";
import { getRepository,ILike,getConnection } from "typeorm";
import { Permisos } from "../entidades/PermisosEntidad";


export const getPermisoUsuario = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);
    const results = await getRepository(Permisos).findOne(id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not Permisos found'});
    }
    
};

/*export const create = async (req: Request, res: Response): Promise<Response> => {
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
*/
export const updatePermisoUsuario = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const permiso = await getRepository(Permisos).findOne(id);

    //return res.json(ciudad);
    if (permiso) {
        const objPermisos = req.body;
        getRepository(Permisos).merge(permiso,objPermisos);
        const results = await getRepository(Permisos).save(permiso);
        return res.json({msg:'ok'});    
     
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  