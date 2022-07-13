"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ciudad = void 0;
const typeorm_1 = require("typeorm");
const ManifiestoEntidad_1 = require("./ManifiestoEntidad");
const ConductorEntidad_1 = require("./ConductorEntidad");
let Ciudad = class Ciudad extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ciudad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Ciudad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ManifiestoEntidad_1.Manifiesto, manifiesto => manifiesto.origen_),
    __metadata("design:type", Array)
], Ciudad.prototype, "manifiesto_origen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ManifiestoEntidad_1.Manifiesto, manifiesto => manifiesto.destino_),
    __metadata("design:type", Array)
], Ciudad.prototype, "manifiesto_destino", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ConductorEntidad_1.Conductor, conductor => conductor.ciudad_),
    __metadata("design:type", Array)
], Ciudad.prototype, "ciudad", void 0);
Ciudad = __decorate([
    (0, typeorm_1.Unique)(['nombre']),
    (0, typeorm_1.Entity)()
], Ciudad);
exports.Ciudad = Ciudad;
