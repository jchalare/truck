import { AppDataSource } from '../db/db';
import { Profile } from '../entities/ProfileEntity';


export const getAllProfilesService = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Profile).find({
         select: {
           id: true,
           name:true
        },
        relations: {
          id_company:true
        }
    });   
}


export const getProfileByIdService = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Profile).find({
         select: {
           id: true,
           name:true
        },
        relations: {
          id_company:true
        },
        where:{
            id
        }
    });
}

export const createNewProfileService = async( profileData ) => {

    const {name} = profileData;
    const dataSource = AppDataSource;

    const foundProfileByName = await dataSource.getRepository(Profile).findOneBy({ name });
    
    if(foundProfileByName){
        return { msg:`Profile: ${name} already exist!`, 
                code:400
               };
    } else {

        const newProfile =  Profile.create(profileData);
        return  await Profile.insert(newProfile);
    } 
}


export const updateProfileService = async(profileData) => {

   const {id,name} = profileData;

   //const foundProfileData = await getProfileByIdService(id);

   /* if(foundProfileData.length === 0){    
        return { msg:`City does not exist !`, code:404 };   
    }*/
         
    try {

        const updatedProfile = Profile.merge(profileData,{name:name.toUpperCase()});
       return await Profile.update({id},updatedProfile);
        
        //return updatedCity;
        
       } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
    
}