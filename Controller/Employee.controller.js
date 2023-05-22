"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.EmployeeController = void 0;
const express = __importStar(require("express"));
const Model_1 = require("../Model");
const authentication = require('../Middleware/Authentification');
const jwt = require('jsonwebtoken');
class EmployeeController {
    constructor() {
        this.path = "/employee";
        this.model = Model_1.EmployeeModel;
    }
    getEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield this.model.find();
            res.status(200).json(employees);
        });
    }
    getEmployeeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.model.findById(req.params.id);
            res.status(200).json(employee);
        });
    }
    createEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                const employee = new this.model(req.body);
                yield employee.save();
                res.status(200).json(employee);
            }
        });
    }
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.model.findById(req.params.id);
            if (employee == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield employee.updateOne(req.body);
                res.status(200).json(employee);
            }
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.model.findById(req.params.id);
            if (employee == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield employee.deleteOne();
                res.status(200).json(employee);
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_1.EmployeeModel.findOne({ email: req.body.email });
            if (employee === null) {
                res.status(404).json({ message: "Aucun employée ne possède cette email" });
            }
            else if (employee.password != req.body.password) {
                res.status(400).json({ message: "Le mot de passe est incorrecte" });
            }
            else if (req.body.on_maintain === null) {
                res.status(422).json({ message: "La valeur fournie n'est pas correcte " });
            }
            else {
                const token = jwt.sign({ userId: employee._id }, 'CLEF_SECRETE_DE_LA_MORT_QUI_TUE', { expiresIn: '24h' });
                res.status(200).json({ employee: employee._id, token: token });
            }
        });
    }
    employeeStartWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = Model_1.EmployeeModel.findOne({ _id: req.params.id });
            if (employee === null) {
                res.status(404).json({ message: "Cette employée n'existe pas" });
            }
            else {
                yield Model_1.EmployeeModel.updateOne({ _id: req.params.id }, { is_working: true })
                    .then(() => res.status(200).json({ message: "L'employée commence son service" }))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    employeeEndWork(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = Model_1.EmployeeModel.findOne({ _id: req.params.id });
            if (employee === null) {
                res.status(404).json({ message: "Cette employée n'existe pas" });
            }
            else {
                yield Model_1.EmployeeModel.updateOne({ _id: req.params.id }, { is_working: false })
                    .then(() => res.status(200).json({ message: "L'employée termine son service" }))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    buildRoutes() {
        const router = express.Router();
        router.get(this.path, authentication, this.getEmployees.bind(this));
        router.get(this.path + "/:id", authentication, this.getEmployeeById.bind(this));
        router.post(this.path, authentication, this.createEmployee.bind(this));
        router.put(this.path + "/:id", authentication, this.updateEmployee.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteEmployee.bind(this));
        router.post(this.path + "/login", this.login.bind(this));
        router.put(this.path + "/start/:id", authentication, this.employeeStartWork.bind(this));
        router.put(this.path + "/end/:id", authentication, this.employeeEndWork.bind(this));
        return router;
    }
}
exports.EmployeeController = EmployeeController;
