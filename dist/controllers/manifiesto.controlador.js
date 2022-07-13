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
exports.updateManifiestos = exports.createManifiestos = exports.getManifiesto = exports.getManifiestos = void 0;
const typeorm_1 = require("typeorm");
const ManifiestoEntidad_1 = require("../entidades/ManifiestoEntidad");
const getManifiestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ManifiestoEncontrado = yield (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).find();
    return res.json(ManifiestoEncontrado);
});
exports.getManifiestos = getManifiestos;
const getManifiesto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not manifiesto found' });
    }
});
exports.getManifiesto = getManifiesto;
const createManifiestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {nombre, clave} = req.body
    const nuevoManifiesto = (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).save(nuevoManifiesto);
    return res.json(respuesta);
});
exports.createManifiestos = createManifiestos;
const updateManifiestos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const manifiesto = yield (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).findOne(req.params.id);
    if (manifiesto) {
        const clave = req.body;
        (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).merge(manifiesto, clave);
        const results = yield (0, typeorm_1.getRepository)(ManifiestoEntidad_1.Manifiesto).save(manifiesto);
        return res.json(results);
    }
    return res.json({ msg: 'Not manifiesto found' });
});
exports.updateManifiestos = updateManifiestos;
