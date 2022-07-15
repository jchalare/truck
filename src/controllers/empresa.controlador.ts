import { Request, Response } from "express";
import { Empresa } from '../entidades/EmpresaEntidad';
import { AppDataSource } from '../db/db';



const dataSource = AppDataSource;

export const getEmpresas = async (req: Request, res: Response): Promise<Response> => {
    const EmpresaEncontrado = await dataSource.getRepository(Empresa).find();
    return res.json(EmpresaEncontrado);
};

export const getEmpresa = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);

    const results = await dataSource.getRepository(Empresa).findOneBy({id});
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not company found'});
    }
    
};

export const createEmpresas = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoEmpresa =  dataSource.getRepository(Empresa).create(req.body);
    const respuesta = await dataSource.getRepository(Empresa).save(nuevoEmpresa);
    return res.json(respuesta);
};

export const updateEmpresas = async (req: Request, res: Response): Promise<Response> => {

    const id = parseInt(req.params.id);

    const company = await dataSource.getRepository(Empresa).findOneBy({id});
    if (company) {
        const clave = req.body
        dataSource.getRepository(Empresa).merge(company, clave);
        const results = await dataSource.getRepository(Empresa).save(company);
      return res.json(results);
    }
  
    return res.json({msg: 'Not company found'});
  };
  