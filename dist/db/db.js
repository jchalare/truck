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
exports.conexionBD = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
function conexionBD() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, typeorm_1.createConnection)({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "jachm",
                password: "jachm",
                database: "db_truck",
                entities: [path_1.default.join(__dirname, "../entidades/**/**.ts")],
                synchronize: true,
            });
            console.log("base de datos conectada !");
        }
        catch (error) {
            console.log("Error en base de datos", error);
        }
    });
}
exports.conexionBD = conexionBD;
