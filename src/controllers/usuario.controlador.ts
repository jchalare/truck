import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Usuario } from '../entidades/UsuarioEntidad';
import jwt from "jsonwebtoken";
import  bcryptjs  from "bcryptjs";
import { Perfil } from "../entidades/PerfilEntidad";
import { Compania } from "../entidades/CompaniaEntidad";
import { AppDataSource } from '../db/db';
import { UsuarioSubscriber } from "../subscribers/usuario.subscriber";



const dataSource = AppDataSource;

export const generarJwt = (uid:any) => {
    return new Promise ((resolve, reject)=>{
        const payload = { uid };
        jwt.sign(payload,'J@chm-#$%',{
            expiresIn: '1h'
        },(err,token) =>{
            if(err){
                console.log(err);
                reject('no se pudo generar token');
            }else{
                resolve(token);
            }
        })

    });
}



export const loginUsuario = async (req: Request, res: Response): Promise<Response> => {
    
    const {email, clave } = req.body;
    
    try{
       //verificar usuario y contraseña

       const usuarioEncontrado = await dataSource.getRepository(Usuario)
                                .createQueryBuilder("usuario")
                                .innerJoinAndSelect("usuario.perfil_", "perfil")
                                .innerJoinAndSelect("perfil.compania_","compania")
                                .where("usuario.email = :email ", { email})
                                .getOne();

        
       
       if(!usuarioEncontrado){
        return res.status(400).json({msg:`Usuario incorrecto`})
       }

       if(!usuarioEncontrado.estado){
        return res.status(400).json({msg:`Usuario incorrecto - e`})
       }

       const claveValida = bcryptjs.compareSync(clave,usuarioEncontrado.clave);

       if(!claveValida){
        return res.status(400).json({msg:`Usuario incorrecto -p `})
       }
       
       //luego generar el token
       const token = await generarJwt(usuarioEncontrado.id);

       const {id_perfil_usuario} = usuarioEncontrado;
       
       const usuarioFinal = {
           uid: usuarioEncontrado.id,
           nombre: usuarioEncontrado.nombre,
           estado: usuarioEncontrado.estado,
           compania:usuarioEncontrado.id_perfil_usuario.id_compania_perfil.id,
           compania_nombre:id_perfil_usuario.id_compania_perfil.nombre,
           perfil:id_perfil_usuario.id,
           perfil_nombre:id_perfil_usuario.nombre,
           token
       }
          return res.json({"usuario":usuarioFinal});
    }catch(error){
        return res.status(500).json({msg:'Error en token'});
    }   
    return res.json({msg: 'Not user found'});
};
 

export const getUsuarios = async (req: Request, res: Response): Promise<Response> => {
    const usuarioEncontrado = await dataSource.getRepository(Usuario).find();
    return res.json(usuarioEncontrado);
};

export const getUsuario = async (req: Request, res: Response): Promise<Response> => {

    const id_usuario = parseInt(req.params.id);

    const results = await Usuario.findOneBy({id: id_usuario});
    if(results){
        return res.json({nombre:results.nombre,id:results.id,email:results.email});
    }else{
        return res.json({msg: 'Not user found'});
    }    
};

export const createUsuarios = async (req: Request, res: Response): Promise<Response> => {
    
    const {nombre, clave, email,id_perfil_usuario,id_compania_usuario } = req.body;

    const results = await dataSource.getRepository(Usuario).findOneBy({email});
    if(results){
        return res.json({msg: ` Email ${email} ya existe`});
    }else{

        const dataSource = AppDataSource;
        const salt = bcryptjs.genSaltSync(10);
        const claveEncript = bcryptjs.hashSync(clave,salt);
         

   /*const queryRunner = dataSource.createQueryRunner();

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {

        const salt = bcryptjs.genSaltSync(10);
        const claveEncript = bcryptjs.hashSync(clave,salt);

        const nuevoUsuario = new Usuario();
        nuevoUsuario.id_perfil_usuario = id_perfil_usuario;
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.clave = claveEncript;
        nuevoUsuario.email = email;
        nuevoUsuario.id_compania_usuario = id_compania_usuario;

     

    // execute some operations on this transaction:
    await queryRunner.manager.save(nuevoUsuario);

    // commit transaction now:
    await queryRunner.commitTransaction();
        

} catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
    console.log('Error en Rollback');
} finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
}
        
        */



      


        const nuevoUsuario =  dataSource.getRepository(Usuario).create({id_perfil_usuario,nombre,clave:claveEncript,email,id_compania_usuario });
        await dataSource.getRepository(Usuario).save(nuevoUsuario);
        
        return res.json({msg: `Usuario ${nombre} creado exitosamente`});
    }    
};

export const updateUsuarios = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const user = await dataSource.getRepository(Usuario).findOneBy({id});
    if (user) {
        const {clave} = req.body
        const salt = bcryptjs.genSaltSync();
        user.clave = bcryptjs.hashSync(clave,salt);

        dataSource.getRepository(Usuario).merge(user, clave);
        const results = await dataSource.getRepository(Usuario).save(user);
        
      return res.json({nombre:results.nombre, id:results.id});
    }
  
    return res.json({msg: 'Not user found'});
  };
  