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
exports.Conductor = void 0;
const typeorm_1 = require("typeorm");
const CiudadEntidad_1 = require("./CiudadEntidad");
const ManifiestoEntidad_1 = require("./ManifiestoEntidad");
let Conductor = class Conductor extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Conductor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conductor.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conductor.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conductor.prototype, "Apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conductor.prototype, "cuenta_banco", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: null }),
    __metadata("design:type", String)
], Conductor.prototype, "email_conductor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => CiudadEntidad_1.Ciudad),
    (0, typeorm_1.JoinColumn)([{ name: "id_ciudad" }, { name: "id" }]),
    __metadata("design:type", CiudadEntidad_1.Ciudad)
], Conductor.prototype, "ciudad_", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Conductor.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ManifiestoEntidad_1.Manifiesto, manifiesto => manifiesto.conductor_),
    __metadata("design:type", Array)
], Conductor.prototype, "manifiesto", void 0);
Conductor = __decorate([
    (0, typeorm_1.Unique)(['cedula']),
    (0, typeorm_1.Entity)()
], Conductor);
exports.Conductor = Conductor;
