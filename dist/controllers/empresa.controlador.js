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
exports.updateEmpresas = exports.createEmpresas = exports.getEmpresa = exports.getEmpresas = void 0;
const typeorm_1 = require("typeorm");
const EmpresaEntidad_1 = require("../entidades/EmpresaEntidad");
const getEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const EmpresaEncontrado = yield (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).find();
    return res.json(EmpresaEncontrado);
});
exports.getEmpresas = getEmpresas;
const getEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not company found' });
    }
});
exports.getEmpresa = getEmpresa;
const createEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {nombre, clave} = req.body
    const nuevoEmpresa = (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).save(nuevoEmpresa);
    return res.json(respuesta);
});
exports.createEmpresas = createEmpresas;
const updateEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).findOne(req.params.id);
    if (company) {
        const clave = req.body;
        (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).merge(company, clave);
        const results = yield (0, typeorm_1.getRepository)(EmpresaEntidad_1.Empresa).save(company);
        return res.json(results);
    }
    return res.json({ msg: 'Not company found' });
});
exports.updateEmpresas = updateEmpresas;
