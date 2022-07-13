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
exports.updatePerfiles = exports.createPerfiles = exports.getPerfil = exports.getPerfiles = void 0;
const typeorm_1 = require("typeorm");
const PerfilEntidad_1 = require("../entidades/PerfilEntidad");
const getPerfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const PerfilEncontrado = yield (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).find();
    return res.json(PerfilEncontrado);
});
exports.getPerfiles = getPerfiles;
const getPerfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Perfil found' });
    }
});
exports.getPerfil = getPerfil;
const createPerfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoPerfil = (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).save(nuevoPerfil);
    return res.json(respuesta);
});
exports.createPerfiles = createPerfiles;
const updatePerfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const perfil = yield (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).findOne(req.params.id);
    if (perfil) {
        (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).merge(perfil, req.body);
        const results = yield (0, typeorm_1.getRepository)(PerfilEntidad_1.Perfil).save(perfil);
        return res.json(results);
    }
    return res.json({ msg: 'Not Perfil found' });
});
exports.updatePerfiles = updatePerfiles;
