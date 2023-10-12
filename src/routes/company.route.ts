import { Router } from "express";
import { validaJwt } from '../middlewares/validarJwt';
import { getAllCompanies, createCompany, getOneCompanyById, updateCompany } from "../controllers/company.controller";

const companyRoutes = Router();

companyRoutes.get("/compania", validaJwt, getAllCompanies)
    .get("/compania/:id", validaJwt, getOneCompanyById)
    .post("/compania", validaJwt, createCompany)
    .put("/compania/:id", validaJwt, updateCompany);


export default companyRoutes;