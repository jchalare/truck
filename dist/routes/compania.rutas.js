"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const compania_controlador_1 = require("../controllers/compania.controlador");
const validarJwt_1 = require("../middlewares/validarJwt");
const rutasCompania = (0, express_1.Router)();
rutasCompania.get("/compania", validarJwt_1.validaJwt, compania_controlador_1.getCompanias);
rutasCompania.get("/compania/:id", validarJwt_1.validaJwt, compania_controlador_1.getCompania);
rutasCompania.post("/compania", validarJwt_1.validaJwt, compania_controlador_1.createCompanias);
rutasCompania.put("/compania/:id", validarJwt_1.validaJwt, compania_controlador_1.updateCompanias);
exports.default = rutasCompania;