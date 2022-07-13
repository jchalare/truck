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
exports.updateUsuarios = exports.createUsuarios = exports.getUsuario = exports.getUsuarios = exports.loginUsuario = exports.generarJwt = void 0;
const typeorm_1 = require("typeorm");
const UsuarioEntidad_1 = require("../entidades/UsuarioEntidad");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generarJwt = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, 'J@chm-#$%', {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('no se pudo generar token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJwt = generarJwt;
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, clave } = req.body;
    try {
        //verificar usuario y contraseña
        //const usuarioEncontrado = await getRepository(Usuario).findOne({email});
        const usuarioEncontrado = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario)
            .createQueryBuilder("usuario")
            .innerJoinAndSelect("usuario.perfil_", "perfil")
            .innerJoinAndSelect("perfil.compania_", "compania")
            .where("usuario.email = :email ", { email })
            .getOne();
        if (!usuarioEncontrado) {
            return res.status(400).json({ msg: `Usuario incorrecto` });
        }
        if (!usuarioEncontrado.estado) {
            return res.status(400).json({ msg: `Usuario incorrecto - e` });
        }
        const claveValida = bcryptjs_1.default.compareSync(clave, usuarioEncontrado.clave);
        if (!claveValida) {
            return res.status(400).json({ msg: `Usuario incorrecto -p ` });
        }
        //luego generar el token
        const token = yield (0, exports.generarJwt)(usuarioEncontrado.id);
        const { perfil_ } = usuarioEncontrado;
        const usuarioFinal = {
            uid: usuarioEncontrado.id,
            nombre: usuarioEncontrado.nombre,
            estado: usuarioEncontrado.estado,
            compania: usuarioEncontrado.perfil_.compania_.id,
            compania_nombre: perfil_.compania_.nombre,
            perfil: perfil_.id,
            perfil_nombre: perfil_.nombre,
            token
        };
        return res.json({ "usuario": usuarioFinal });
    }
    catch (error) {
        return res.status(500).json({ msg: 'Error en token' });
    }
    return res.json({ msg: 'Not user found' });
});
exports.loginUsuario = loginUsuario;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioEncontrado = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).find();
    return res.json(usuarioEncontrado);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).findOne(req.params.id);
    if (results) {
        return res.json({ nombre: results.nombre, id: results.id, email: results.email });
    }
    else {
        return res.json({ msg: 'Not user found' });
    }
});
exports.getUsuario = getUsuario;
const createUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, clave, email, perfil_ } = req.body;
    const results = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).findOne({ email });
    if (results) {
        return res.json({ msg: ` Email ${email} ya existe` });
    }
    else {
        const salt = bcryptjs_1.default.genSaltSync(10);
        const claveEncript = bcryptjs_1.default.hashSync(clave, salt);
        const nuevoUsuario = (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).create({ perfil_, nombre, clave: claveEncript, email });
        yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).save(nuevoUsuario);
        return res.json({ msg: `Usuario ${nombre} creado exitosamente` });
    }
});
exports.createUsuarios = createUsuarios;
const updateUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).findOne(req.params.id);
    if (user) {
        const { clave } = req.body;
        const salt = bcryptjs_1.default.genSaltSync();
        user.clave = bcryptjs_1.default.hashSync(clave, salt);
        (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).merge(user, clave);
        const results = yield (0, typeorm_1.getRepository)(UsuarioEntidad_1.Usuario).save(user);
        return res.json({ nombre: results.nombre, id: results.id });
    }
    return res.json({ msg: 'Not user found' });
});
exports.updateUsuarios = updateUsuarios;
