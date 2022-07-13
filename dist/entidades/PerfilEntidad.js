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
exports.Perfil = void 0;
const typeorm_1 = require("typeorm");
const CompaniaEntidad_1 = require("./CompaniaEntidad");
const UsuarioEntidad_1 = require("./UsuarioEntidad");
let Perfil = class Perfil extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Perfil.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Perfil.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => CompaniaEntidad_1.Compania),
    (0, typeorm_1.JoinColumn)([{ name: "id_compania" }, { name: "id" }]),
    __metadata("design:type", CompaniaEntidad_1.Compania)
], Perfil.prototype, "compania_", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UsuarioEntidad_1.Usuario, usuario => usuario.perfil_),
    __metadata("design:type", Array)
], Perfil.prototype, "usuario", void 0);
Perfil = __decorate([
    (0, typeorm_1.Index)(["nombre", "compania_"], { unique: true }),
    (0, typeorm_1.Entity)()
], Perfil);
exports.Perfil = Perfil;
