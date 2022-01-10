import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Empresa } from '../entidades/EmpresaEntidad';

export const getEmpresas = async (req: Request, res: Response): Promise<Response> => {
    const EmpresaEncontrado = await getRepository(Empresa).find();
    return res.json(EmpresaEncontrado);
};

export const getEmpresa = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(Empresa).findOne(req.params.id);
    if(results){
        return res.json(results);
    }else{
        return res.json({msg: 'Not company found'});
    }
    
};

export const createEmpresas = async (req: Request, res: Response): Promise<Response> => {
    //const {nombre, clave} = req.body
    const nuevoEmpresa =  getRepository(Empresa).create(req.body);
    const respuesta = await getRepository(Empresa).save(nuevoEmpresa);
    return res.json(respuesta);
};

export const updateEmpresas = async (req: Request, res: Response): Promise<Response> => {
    const company = await getRepository(Empresa).findOne(req.params.id);
    if (company) {
        const clave = req.body
        getRepository(Empresa).merge(company, clave);
        const results = await getRepository(Empresa).save(company);
      return res.json(results);
    }
  
    return res.json({msg: 'Not company found'});
  };
  