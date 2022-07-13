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
exports.Permisos = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntidad_1 = require("./UsuarioEntidad");
let Permisos = class Permisos extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.permiso_ver = false;
        this.permiso_grabar = false;
        this.permiso_modificar = false;
    }
};
__decorate([
    (0, typeorm_1.OneToOne)(() => UsuarioEntidad_1.Usuario, { primary: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", UsuarioEntidad_1.Usuario)
], Permisos.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Permisos.prototype, "permiso_ver", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Permisos.prototype, "permiso_grabar", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Permisos.prototype, "permiso_modificar", void 0);
Permisos = __decorate([
    (0, typeorm_1.Index)(["id_usuario"], { unique: true }),
    (0, typeorm_1.Entity)()
], Permisos);
exports.Permisos = Permisos;
