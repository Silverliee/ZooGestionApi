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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
var express = __importStar(require("express"));
var Model_1 = require("../Model");
var authentication = require('../Middleware/Authentification');
var jwt = require('jsonwebtoken');
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
        this.path = "/employee";
        this.model = Model_1.EmployeeModel;
    }
    EmployeeController.prototype.getEmployees = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find()];
                    case 1:
                        employees = _a.sent();
                        res.status(200).json(employees);
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.getEmployeeById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        employee = _a.sent();
                        res.status(200).json(employee);
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.createEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(req.body.name == null)) return [3 /*break*/, 1];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 3];
                    case 1:
                        employee = new this.model(req.body);
                        return [4 /*yield*/, employee.save()];
                    case 2:
                        _a.sent();
                        res.status(200).json(employee);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.updateEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        employee = _a.sent();
                        if (!(employee == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, employee.updateOne(req.body)];
                    case 3:
                        _a.sent();
                        res.status(200).json(employee);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.deleteEmployee = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        employee = _a.sent();
                        if (!(employee == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, employee.deleteOne()];
                    case 3:
                        _a.sent();
                        res.status(200).json(employee);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.findOne({ email: req.body.email })];
                    case 1:
                        employee = _a.sent();
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
                            token = jwt.sign({ userId: employee._id }, 'CLEF_SECRETE_DE_LA_MORT_QUI_TUE', { expiresIn: '24h' });
                            res.status(200).json({ employee: employee._id, token: token });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.employeeStartWork = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        employee = Model_1.EmployeeModel.findOne({ _id: req.params.id });
                        if (!(employee === null)) return [3 /*break*/, 1];
                        res.status(404).json({ message: "Cette employée n'existe pas" });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, Model_1.EmployeeModel.updateOne({ _id: req.params.id }, { is_working: true })
                            .then(function () { return res.status(200).json({ message: "L'employée commence son service" }); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.employeeEndWork = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        employee = Model_1.EmployeeModel.findOne({ _id: req.params.id });
                        if (!(employee === null)) return [3 /*break*/, 1];
                        res.status(404).json({ message: "Cette employée n'existe pas" });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, Model_1.EmployeeModel.updateOne({ _id: req.params.id }, { is_working: false })
                            .then(function () { return res.status(200).json({ message: "L'employée termine son service" }); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get(this.path, authentication, this.getEmployees.bind(this));
        router.get(this.path + "/:id", authentication, this.getEmployeeById.bind(this));
        router.post(this.path, authentication, this.createEmployee.bind(this));
        router.put(this.path + "/:id", authentication, this.updateEmployee.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteEmployee.bind(this));
        router.post(this.path + "/login", this.login.bind(this));
        router.put(this.path + "/start/:id", authentication, this.employeeStartWork.bind(this));
        router.put(this.path + "/end/:id", authentication, this.employeeEndWork.bind(this));
        return router;
    };
    return EmployeeController;
}());
exports.EmployeeController = EmployeeController;
