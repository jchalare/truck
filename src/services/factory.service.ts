import { AppDataSource } from '../db/db';
import { Factory } from '../entities/FactoryEntity';


export const getAllFactoriesService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Factory).find({
         select: {
           id: true,
           name:true,
           nit: true,
           contact: true,
           phone_number: true,
         },
        relations: {
          id_city:true
        }
    });   
}


export const getFactoryByIdService = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Factory).find({
         select: {
           id: true,
           name:true,
           nit: true,
           contact: true,
           phone_number: true,
         },
        relations: {
          id_city:true
        },
        where:{
            id
        }
    });
}

export const createNewFactoryService = async( factoryData ) => {

    const {name,nit} = factoryData;
    const dataSource = AppDataSource;

    const foundFactoryByName = await dataSource.getRepository(Factory).findOneBy({ nit });
    
    if(foundFactoryByName){
        return { msg:`Factory: ${name} with nit: ${nit} already exist!`, 
                code:400
               };
    } else {
        const newFactory = Factory.create({ name: name.toUpperCase() });
        return  await Factory.insert(newFactory);
    } 
}


export const updateFactoryService = async( factoryData ) => {

   const {id,name } = factoryData;

   //const foundFactoryData = await getFactoryByIdService(id);

   /* if(foundFactoryData.length === 0){    
        return { msg:`City does not exist !`, code:404 };   
    }*/
         
    try {

       const updatedFactory = Factory.merge(factoryData,{name:name.toUpperCase()});
        return await Factory.update({ id }, updatedFactory);

    } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    
}