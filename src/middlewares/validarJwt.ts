import { Request,Response } from "express";
import jwt from "jsonwebtoken";

export const validaJwt = async (req:Request, res:Response, next:any ) => {

    const tokenHeader = req.header('x-token');
    

    if(!tokenHeader){
        return res.status(400).json({msg:`Sin permisos `})
    }

    try {

       const id =  jwt.verify(tokenHeader,'J@chm-#$%'); 
           
       next();
        
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:`Sin permisos `})
    }

      

}