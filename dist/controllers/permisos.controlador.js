"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermisoUsuario = void 0;
const typeorm_1 = require("typeorm");
const PermisosEntidad_1 = require("../entidades/PermisosEntidad");
const getPermisoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const results = yield (0, typeorm_1.getRepository)(PermisosEntidad_1.Permisos).findOne(id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Permisos found' });
    }
});
exports.getPermisoUsuario = getPermisoUsuario;
/*export const createPermisos = async (req: Request, res: Response): Promise<Response> => {
    const {id_usuario} = req.body;
    const ciudadEncontrada = await getRepository(Permisos).find(id_usuario);
    
    if (ciudadEncontrada.length===0){
        const strNombre = JSON.stringify(nombre).toUpperCase();
        const objNombre = { nombre:JSON.parse(strNombre)};
        const nuevoCiudad =  getRepository(Ciudad).create(objNombre);
        const respuesta = await getRepository(Ciudad).save(nuevoCiudad);
        return res.json(respuesta);
    }else{
        return res.json({msg: `La ciudad ${nombre} ya existe`});
    }
};*/
/*
export const updatePermisoUsuario = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const permiso = await getRepository(Permisos).findOne(id);
    if (permiso) {
        const objPermisos = req.body;
        getRepository(Permisos).merge(permiso,objPermisos);
        const results = await getRepository(Permisos).save(permiso);
        return res.json({msg:'ok'});
     
    }
  
    return res.json({msg: 'Not Ciudad found'});
  };
  */ 
