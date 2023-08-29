import { Request, Response } from "express";
import { getAllCompaniesService, getCompanyByIdService, createNewCompanyService,updateCompanyService } from '../services/company.service';

export const getAllCompanies = async (req: Request, res: Response): Promise<Response> => {
     const companiesDatas = await getAllCompaniesService();
    return res.json().send(companiesDatas);
};

export const getOneCompanyById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const companyData = await getCompanyByIdService(id);
    return res.json().send(companyData);    
};

export const createCompany = async (req: Request, res: Response): Promise<Response> => {
    return res.json().send(await createNewCompanyService(req.body));
};

export const updateCompany = async (req: Request, res: Response): Promise<Response> => {
     return res.json().send(await updateCompanyService(req.body));
  };