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
exports.updateVehiculos = exports.createVehiculos = exports.getVehiculo = exports.getVehiculos = void 0;
const typeorm_1 = require("typeorm");
const VehiculoEntidad_1 = require("../entidades/VehiculoEntidad");
const getVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const VehiculoEncontrado = yield (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).find();
    return res.json(VehiculoEncontrado);
});
exports.getVehiculos = getVehiculos;
const getVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).findOne(req.params.id);
    if (results) {
        return res.json(results);
    }
    else {
        return res.json({ msg: 'Not Vehiculo found' });
    }
});
exports.getVehiculo = getVehiculo;
const createVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {nombre, clave} = req.body
    const nuevoVehiculo = (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).create(req.body);
    const respuesta = yield (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).save(nuevoVehiculo);
    return res.json(respuesta);
});
exports.createVehiculos = createVehiculos;
const updateVehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vehiculo = yield (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).findOne(req.params.id);
    if (vehiculo) {
        const clave = req.body;
        (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).merge(vehiculo, clave);
        const results = yield (0, typeorm_1.getRepository)(VehiculoEntidad_1.Vehiculo).save(VehiculoEntidad_1.Vehiculo);
        return res.json(results);
    }
    return res.json({ msg: 'Not Vehiculo found' });
});
exports.updateVehiculos = updateVehiculos;
