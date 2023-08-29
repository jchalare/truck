import { ILike } from "typeorm";
import { AppDataSource } from '../db/db';
import { Company } from "../entities/CompanyEntity";


export const getAllCompaniesService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Company).find({
         select: {
           id: true,
           name:true
        }
    });   
}
 

export const getCompanyByIdService = async ( id ) => {
    const dataSource = AppDataSource;

    /*if (!id) {
        return {
            msg: `Company does not exist!`, 
                code:400
        }
    }*/

     return await dataSource.getRepository(Company).find({
         select: {
            id:true,
           name:true
        },
        where:{
            id
        }
    });
}

export const createNewCompanyService = async( companyData ) => {

    const {name} = companyData;
    const dataSource = AppDataSource;

    const foundCompanyByName = await dataSource.getRepository(Company).findOneBy({ name });
    
    if(foundCompanyByName){
        return { msg:`Company ${name} already exist!`, 
                code:400
               };
    } else {

        const newCompany =  Company.create({name:name.toUpperCase() });
        return  await Company.insert(newCompany);
    } 
}


export const updateCompanyService = async(companyData) => {

   const {id,name } = companyData;

   const foundCompanyData = await getCompanyByIdService(id);

    if(foundCompanyData.length === 0){
    
        return { msg:`Company does not exist !`, code:404 };
           
    }else{
         
       try {

        const updatedCompany = Company.merge(companyData,{name: name.toUpperCase()});
        await Company.update({id},updatedCompany);
        
        return updatedCompany;
        
       } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    }
}
