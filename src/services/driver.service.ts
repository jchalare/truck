import { AppDataSource } from '../db/db';
import { Driver } from '../entities/DriverEntity';


export const getAllDriversService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Driver).find({
         select: {
           id: true,
           id_number:true,
           first_name: true,
           last_name: true,
           address: true,
           phone_number: true,
           email: true,
           account_number: true,
        },
        relations: {
          id_city:true
        }
    });   
}


export const getDriverByIdService = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Driver).find({
        select: {
           id: true,
           id_number:true,
           first_name: true,
           last_name: true,
           address: true,
           phone_number: true,
           email: true,
           account_number: true,
        },
        relations: {
          id_city:true
        },
        where:{
            id
        }
    });
}

export const createNewDriverService = async( driverData ) => {

    const {id_number,first_name,last_name} = driverData;
    const dataSource = AppDataSource;

    const foundDriverByName = await dataSource.getRepository(Driver).findOneBy({ id_number });
    
    if(foundDriverByName){
        return { msg:`Driver: ${first_name} ${last_name} with id number: ${id_number} already exist!`, 
                code:400
               };
    } else {

        const newDriver =  Driver.create({first_name:first_name.toUpperCase(), last_name:last_name.toUpperCase() , ...driverData});
        return  await Driver.insert(newDriver);
    } 
}


export const updateDriverService = async(driverData) => {

   const {id,first_name,last_name } = driverData;

   //const foundDriverData = await getDriverByIdService(id);

   /* if(foundDriverData.length === 0){    
        return { msg:`City does not exist !`, code:404 };   
    }*/
         
    try {

        const updatedDriver = Driver.merge(driverData,{first_name:first_name.toUpperCase(), last_name:last_name.toUpperCase()});
       return await Driver.update({id},updatedDriver);
        
        //return updatedCity;
        
       } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    
}