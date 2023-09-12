import { AppDataSource } from '../db/db';
import { Permission } from '../entities/PermissionEntity';





export const getAllPermissions = async () => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Permission).find({
         select: {
           id: true,
           to_see:true,
           to_save: true,
           to_update: true
         },
        relations: {
          id_user:true
        }
    });   
}


export const getPermissionById = async ( id ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Permission).find({
         select: {
           id: true,
           to_see:true,
           to_save: true,
           to_update: true
         },
        relations: {
          id_user:true
        },
        where:{
            id
        }
    });
}


export const getPermissionByUserId = async ( id_user ) => {
    const dataSource = AppDataSource;
     return await dataSource.getRepository(Permission).find({
         select: {
           id: true,
           to_see:true,
           to_save: true,
           to_update: true
         },
        relations: {
          id_user:true
        },
        where:{
            id_user
        }
    });
}


export const createNewPermission = async( permitionData ) => {

    const { to_see, to_save, to_update,id_user } = permitionData;
    const dataSource = AppDataSource;

    const findPermissionByUser = await dataSource.getRepository(Permission).findOneBy({ id_user });
    
    if(findPermissionByUser){
        return { msg:`User  already exist!`, 
                code:400
               };
    } else {
        const newFactory = Permission.create({ to_see,to_save,to_update,id_user });
        return  await Permission.insert(newFactory);
    } 
}


export const updatePermission = async( permitionData ) => {

    const { id,to_see, to_save, to_update,id_user } = permitionData;
    const dataSource = AppDataSource;


    try {
    const findPermissionByUser = await dataSource.getRepository(Permission).findOneBy({ id_user });

       const updatedPermission = Permission.merge(permitionData);
        return await Permission.update({ id }, updatedPermission);

    } catch (error) {

            const { code, detail } = error;
             
            return { msg:detail, code};
       } 
}
