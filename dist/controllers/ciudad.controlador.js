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
exports.updateCiudades = exports.createCiudades = exports.getCiudad = exports.getCiudades = void 0;
const typeorm_1 = require("typeorm");
const CiudadEntidad_1 = require("../entidades/CiudadEntidad");
const getCiudades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CiudadEncontrado = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).find();
    return res.json(CiudadEncontrado);
});
exports.getCiudades = getCiudades;
const getCiudad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const results = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).findOne(id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Ciudad found' });
    }
});
exports.getCiudad = getCiudad;
const createCiudades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.body;
    const ciudadEncontrada = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).find({ nombre: (0, typeorm_1.ILike)(`${nombre}`) });
    if (ciudadEncontrada.length === 0) {
        const strNombre = JSON.stringify(nombre).toUpperCase();
        const objNombre = { nombre: JSON.parse(strNombre) };
        const nuevoCiudad = (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).create(objNombre);
        const respuesta = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).save(nuevoCiudad);
        return res.json(respuesta);
    }
    else {
        return res.json({ msg: `La ciudad ${nombre} ya existe` });
    }
});
exports.createCiudades = createCiudades;
const updateCiudades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const ciudad = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).findOne(id);
    //return res.json(ciudad);
    if (ciudad) {
        const { nombre } = req.body;
        const ciudadEncontrada = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).find({ nombre: (0, typeorm_1.ILike)(`${nombre}`) });
        if (ciudadEncontrada.length === 0) {
            const strNombre = JSON.stringify(nombre).toUpperCase();
            const objNombre = { nombre: JSON.parse(strNombre) };
            (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).merge(ciudad, objNombre);
            const results = yield (0, typeorm_1.getRepository)(CiudadEntidad_1.Ciudad).save(ciudad);
            return res.json({ nombre: ciudad.nombre, id: ciudad.id });
        }
        else {
            return res.json({ msg: `La ciudad ${nombre} ya existe` });
        }
    }
    return res.json({ msg: 'Not Ciudad found' });
});
exports.updateCiudades = updateCiudades;
