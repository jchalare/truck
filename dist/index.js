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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const db_1 = require("./db/db");
const usuario_rutas_1 = __importDefault(require("./routes/usuario.rutas"));
const empresa_rutas_1 = __importDefault(require("./routes/empresa.rutas"));
const trailer_rutas_1 = __importDefault(require("./routes/trailer.rutas"));
const ciudad_rutas_1 = __importDefault(require("./routes/ciudad.rutas"));
const conductor_rutas_1 = __importDefault(require("./routes/conductor.rutas"));
const vehiculo_rutas_1 = __importDefault(require("./routes/vehiculo.rutas"));
const manifiesto_rutas_1 = __importDefault(require("./routes/manifiesto.rutas"));
const perfil_rutas_1 = __importDefault(require("./routes/perfil.rutas"));
const compania_rutas_1 = __importDefault(require("./routes/compania.rutas"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        (0, db_1.conexionBD)();
        //settings  
        app.set('port', process.env.PORT || 4000);
        // Middlewares
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use((0, morgan_1.default)('dev'));
        // routes
        app.get('/', (req, res) => {
            return res.json(`LA APP ESTA EN EL PUERTO ${app.get('port')}`);
        });
        app.use(usuario_rutas_1.default);
        app.use(empresa_rutas_1.default);
        app.use(trailer_rutas_1.default);
        app.use(ciudad_rutas_1.default);
        app.use(conductor_rutas_1.default);
        app.use(vehiculo_rutas_1.default);
        app.use(manifiesto_rutas_1.default);
        app.use(perfil_rutas_1.default);
        app.use(compania_rutas_1.default);
        app.listen(app.get('port'));
        console.log('Server on port', app.get('port'));
    });
}
main();
