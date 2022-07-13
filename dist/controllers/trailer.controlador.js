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
exports.updateTrailers = exports.createTrailers = exports.getTrailer = exports.getTrailers = void 0;
const typeorm_1 = require("typeorm");
const TrailerEntidad_1 = require("../entidades/TrailerEntidad");
const getTrailers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TrailerEncontrado = yield (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).find();
    return res.json(TrailerEncontrado);
});
exports.getTrailers = getTrailers;
const getTrailer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not trailer found' });
    }
});
exports.getTrailer = getTrailer;
const createTrailers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {nombre, clave} = req.body
    const nuevoTrailer = (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).save(nuevoTrailer);
    return res.json(respuesta);
});
exports.createTrailers = createTrailers;
const updateTrailers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trailer = yield (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).findOne(req.params.id);
    if (trailer) {
        const clave = req.body;
        (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).merge(trailer, clave);
        const results = yield (0, typeorm_1.getRepository)(TrailerEntidad_1.Trailer).save(trailer);
        return res.json(results);
    }
    return res.json({ msg: 'Not trailer found' });
});
exports.updateTrailers = updateTrailers;
