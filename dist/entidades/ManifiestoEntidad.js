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
exports.Manifiesto = void 0;
const typeorm_1 = require("typeorm");
const CiudadEntidad_1 = require("./CiudadEntidad");
const CompaniaEntidad_1 = require("./CompaniaEntidad");
const ConductorEntidad_1 = require("./ConductorEntidad");
const EmpresaEntidad_1 = require("./EmpresaEntidad");
const UsuarioEntidad_1 = require("./UsuarioEntidad");
const VehiculoEntidad_1 = require("./VehiculoEntidad");
let Manifiesto = class Manifiesto extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.pagado = false;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Manifiesto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Manifiesto.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => VehiculoEntidad_1.Vehiculo),
    (0, typeorm_1.JoinColumn)([{ name: "id_vehiculo" }, { name: "id" }]),
    __metadata("design:type", VehiculoEntidad_1.Vehiculo)
], Manifiesto.prototype, "vehiculo_", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => EmpresaEntidad_1.Empresa),
    (0, typeorm_1.JoinColumn)([{ name: "id_empresa" }, { name: "id" }]),
    __metadata("design:type", EmpresaEntidad_1.Empresa)
], Manifiesto.prototype, "empresa_", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CiudadEntidad_1.Ciudad, ciudad => ciudad.id),
    (0, typeorm_1.JoinColumn)([{ name: "id_origen" }, { name: "id" }]),
    __metadata("design:type", CiudadEntidad_1.Ciudad)
], Manifiesto.prototype, "origen_", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CiudadEntidad_1.Ciudad, ciudad => ciudad.id),
    (0, typeorm_1.JoinColumn)([{ name: "id_destino" }, { name: "id" }]),
    __metadata("design:type", CiudadEntidad_1.Ciudad)
], Manifiesto.prototype, "destino_", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ConductorEntidad_1.Conductor, conductor => conductor.id),
    (0, typeorm_1.JoinColumn)([{ name: "id_conductor" }, { name: "id" }]),
    __metadata("design:type", ConductorEntidad_1.Conductor)
], Manifiesto.prototype, "conductor_", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_viaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_anticipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "money" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_peaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_combustible", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_x_cobrar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric" }),
    __metadata("design:type", Number)
], Manifiesto.prototype, "valor_total_costo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Manifiesto.prototype, "fecha_viaje", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "date" }),
    __metadata("design:type", Date)
], Manifiesto.prototype, "fecha_pago", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false }),
    __metadata("design:type", Boolean)
], Manifiesto.prototype, "pagado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Manifiesto.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsuarioEntidad_1.Usuario, usuario => usuario.id),
    (0, typeorm_1.JoinColumn)([{ name: "id_usuario_creador" }, { name: "id" }]),
    __metadata("design:type", UsuarioEntidad_1.Usuario)
], Manifiesto.prototype, "creador_", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CompaniaEntidad_1.Compania, compania => compania.id),
    (0, typeorm_1.JoinColumn)([{ name: "id_compania" }, { name: "id" }]),
    __metadata("design:type", CompaniaEntidad_1.Compania)
], Manifiesto.prototype, "compania_", void 0);
Manifiesto = __decorate([
    (0, typeorm_1.Unique)(['numero']),
    (0, typeorm_1.Entity)()
], Manifiesto);
exports.Manifiesto = Manifiesto;
