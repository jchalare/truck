import { ILike } from "typeorm";
import { AppDataSource } from '../db/db';
import { City } from "../entities/CityEntity";


export const getAllCitiesService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(City).find({
         select: {
           id:true,
           name:true
        },
        relations: {
          id_department:true
        }
    });   
}


export const getOneCityByIdService = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(City).find({
         select: {
            id:true,
           name:true
        },
        relations: {
          id_department:true
        },
        where:{
            id
        }
    });
}

export const createNewCityService = async( cityData ) => {

    const {name, id_department} = cityData;
    const dataSource = AppDataSource;

    const foundCityByName = await dataSource.getRepository(City).findOneBy({ name, id_department });
    
    if(foundCityByName){
        return { msg:`City ${name} already exist!`, 
                code:400
               };
    } else {

        const newCity =  City.create({name:name.toUpperCase(), id_department });
        return  await City.insert(newCity);
    } 
}


export const updateCityService = async(cityData) => {

   const {id,name } = cityData;

   const foundCityData = await getOneCityByIdService(id);

    if(foundCityData.length === 0){
    
        return { msg:`City does not exist !`, code:404 };
           
    }else{
         
       try {

        const updatedCity = City.merge(cityData,{name: name.toUpperCase()});
        await City.update({id},updatedCity);
        
        return updatedCity;
        
       } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    }
}


