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
exports.updateConductors = exports.createConductores = exports.getConductor = exports.getConductores = void 0;
const typeorm_1 = require("typeorm");
const ConductorEntidad_1 = require("../entidades/ConductorEntidad");
const getConductores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ConductorEncontrado = yield (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).find();
    return res.json(ConductorEncontrado);
});
exports.getConductores = getConductores;
const getConductor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Conductor found' });
    }
});
exports.getConductor = getConductor;
const createConductores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {nombre, clave} = req.body
    const nuevoConductor = (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).save(nuevoConductor);
    return res.json(respuesta);
});
exports.createConductores = createConductores;
const updateConductors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conductor = yield (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).findOne(req.params.id);
    if (conductor) {
        const clave = req.body;
        (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).merge(conductor, clave);
        const results = yield (0, typeorm_1.getRepository)(ConductorEntidad_1.Conductor).save(ConductorEntidad_1.Conductor);
        return res.json(results);
    }
    return res.json({ msg: 'Not Conductor found' });
});
exports.updateConductors = updateConductors;
