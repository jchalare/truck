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
exports.updateCompanias = exports.createCompanias = exports.getCompania = exports.getCompanias = void 0;
const typeorm_1 = require("typeorm");
const CompaniaEntidad_1 = require("../entidades/CompaniaEntidad");
const getCompanias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CompaniaEncontrado = yield (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).find();
    return res.json(CompaniaEncontrado);
});
exports.getCompanias = getCompanias;
const getCompania = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Compania found' });
    }
});
exports.getCompania = getCompania;
const createCompanias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoCompania = (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).save(nuevoCompania);
    return res.json(respuesta);
});
exports.createCompanias = createCompanias;
const updateCompanias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compania = yield (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).findOne(req.params.id);
    if (compania) {
        const nombre = req.body;
        (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).merge(compania, nombre);
        const results = yield (0, typeorm_1.getRepository)(CompaniaEntidad_1.Compania).save(compania);
        return res.json(results);
    }
    return res.json({ msg: 'Not Compania found' });
});
exports.updateCompanias = updateCompanias;
