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
exports.ZooController = void 0;
var express = __importStar(require("express"));
var Model_1 = require("../Model");
var Model_2 = require("../Model");
var Model_3 = require("../Model");
var authentication = require('../Middleware/Authentification');
var ZooController = /** @class */ (function () {
    function ZooController() {
        this.path = "/zoo";
        this.model = Model_3.ZooModel;
    }
    ZooController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var zoos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find().exec()];
                    case 1:
                        zoos = _a.sent();
                        res.json(zoos);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.searchZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var zoo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find({
                            name: req.params.name
                        }).exec()];
                    case 1:
                        zoo = _a.sent();
                        res.json(zoo);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.deleteZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.deleteOne({ _id: req.params.id }).exec()];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.createZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.create({
                            is_open: req.body.is_open,
                            in_night: req.body.in_night
                        })];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.updateZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.updateOne({ _id: req.params.id }, {
                            is_open: req.body.is_open,
                            in_night: req.body.in_night
                        }).exec()];
                    case 1:
                        result = _a.sent();
                        res.json(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.getServiceAgent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceAgent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 1, is_working: true }).exec()];
                    case 1:
                        serviceAgent = _a.sent();
                        res.json(serviceAgent);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.getVeterinary = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var veterinary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 2, is_working: true }).exec()];
                    case 1:
                        veterinary = _a.sent();
                        res.json(veterinary);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.getReceptionist = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var receptionist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 3, is_working: true }).exec()];
                    case 1:
                        receptionist = _a.sent();
                        res.json(receptionist);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.getSeller = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var seller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 4, is_working: true }).exec()];
                    case 1:
                        seller = _a.sent();
                        res.json(seller);
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.getVisitor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_2.VisitorModel.find().where('actualLocation').ne(null)];
                    case 1:
                        visitors = _a.sent();
                        if (visitors.length == 0) {
                            res.status(200).json({ message: "Aucune visiteur ne fréquente le zoo en ce moment" });
                        }
                        else {
                            res.status(200).json({ message: visitors.length + " visiteur(s) fréquente(nt) le zoo en ce moment" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.isAbleToOpen = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceAgents, veterinaries, receptions, sellers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 1, is_working: true })];
                    case 1:
                        serviceAgents = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 2, is_working: true })];
                    case 2:
                        veterinaries = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 3, is_working: true })];
                    case 3:
                        receptions = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 4, is_working: true })];
                    case 4:
                        sellers = _a.sent();
                        if (Object.entries(serviceAgents).length === 0 || Object.entries(sellers).length === 0 || Object.entries(veterinaries).length === 0 || Object.entries(receptions).length === 0) {
                            res.status(400).send(false);
                        }
                        else {
                            res.status(200).send(true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.isAbleToOpenDetails = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceAgents, sellers, veterinaries, receptions, missingWork;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 1, is_working: true })];
                    case 1:
                        serviceAgents = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 4, is_working: true })];
                    case 2:
                        sellers = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 2, is_working: true })];
                    case 3:
                        veterinaries = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 3, is_working: true })];
                    case 4:
                        receptions = _a.sent();
                        missingWork = new Array();
                        if (Object.entries(serviceAgents).length === 0) {
                            missingWork.push("1 agent de service");
                        }
                        if (Object.entries(sellers).length === 0) {
                            missingWork.push(" 1 vendeur");
                        }
                        if (Object.entries(veterinaries).length === 0) {
                            missingWork.push(" 1 veterinaire");
                        }
                        if (Object.entries(receptions).length === 0) {
                            missingWork.push(" 1 personne a la reception");
                        }
                        if (missingWork.length <= 0) {
                            res.status(200).send("Le zoo peut ouvrir.\nListe des employés présents:\n"
                                + "agent(s) de service(s):" + serviceAgents + "\n"
                                + "vendeur(s):" + sellers + "\n"
                                + "vétérinaire(s):" + veterinaries + "\n"
                                + "reception:" + receptions + "\n");
                        }
                        else {
                            res.status(400).send("Le zoo ne peut pas ouvrir, il manque:\n" + missingWork.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.openZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, serviceAgents, sellers, veterinaries, receptions, zoo, missingWork;
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
                        else if (!employee.is_admin) {
                            res.status(400).json({ message: "Vous devez être administrateur pour ouvrir le zoo." });
                        }
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 1, is_working: true })];
                    case 2:
                        serviceAgents = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 4, is_working: true })];
                    case 3:
                        sellers = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 2, is_working: true })];
                    case 4:
                        veterinaries = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 3, is_working: true })];
                    case 5:
                        receptions = _a.sent();
                        return [4 /*yield*/, Model_3.ZooModel.find({ is_open: true })];
                    case 6:
                        zoo = _a.sent();
                        missingWork = new Array();
                        if (Object.entries(serviceAgents).length === 0) {
                            missingWork.push("1 agent de service");
                        }
                        if (Object.entries(sellers).length === 0) {
                            missingWork.push(" 1 vendeur");
                        }
                        if (Object.entries(veterinaries).length === 0) {
                            missingWork.push(" 1 veterinaire");
                        }
                        if (Object.entries(receptions).length === 0) {
                            missingWork.push(" 1 personne a la reception");
                        }
                        if (!(zoo.length == 1)) return [3 /*break*/, 7];
                        res.status(400).send("Le zoo est déjà ouvert");
                        return [3 /*break*/, 10];
                    case 7:
                        if (!(missingWork.length > 0)) return [3 /*break*/, 8];
                        res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, Model_3.ZooModel.updateMany({}, { is_open: true })];
                    case 9:
                        _a.sent();
                        res.status(200).send("Le zoo est maintenant ouvert aux visiteurs!\nListe des employés présents:\n"
                            + "agent(s) de service(s):" + serviceAgents + "\n"
                            + "vendeur(s):" + sellers + "\n"
                            + "vétérinaire(s):" + veterinaries + "\n"
                            + "reception:" + receptions + "\n");
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.closeZoo = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, zoo;
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
                        else if (!employee.is_admin) {
                            res.status(400).json({ message: "Vous devez être administrateur pour fermer le zoo." });
                        }
                        return [4 /*yield*/, Model_3.ZooModel.find({ is_open: true })];
                    case 2:
                        zoo = _a.sent();
                        if (!(zoo.length == 0)) return [3 /*break*/, 3];
                        res.status(400).send("Le zoo est déjà fermé!");
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Model_3.ZooModel.updateMany({}, { is_open: false, in_night: false })];
                    case 4:
                        _a.sent();
                        res.status(200).send("Le zoo est maintenant fermé!");
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.openNight = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, serviceAgents, sellers, veterinaries, receptions, zoo, missingWork;
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
                        else if (!employee.is_admin) {
                            res.status(400).json({ message: "Vous devez être administrateur pour ouvrir le zoo de nuit." });
                        }
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 1, is_working: true })];
                    case 2:
                        serviceAgents = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 4, is_working: true })];
                    case 3:
                        sellers = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 2, is_working: true })];
                    case 4:
                        veterinaries = _a.sent();
                        return [4 /*yield*/, Model_1.EmployeeModel.find({ role: 3, is_working: true })];
                    case 5:
                        receptions = _a.sent();
                        return [4 /*yield*/, Model_3.ZooModel.find({ is_open: true })];
                    case 6:
                        zoo = _a.sent();
                        missingWork = new Array();
                        if (Object.entries(serviceAgents).length === 0) {
                            missingWork.push("1 agent de service");
                        }
                        if (Object.entries(sellers).length === 0) {
                            missingWork.push(" 1 vendeur");
                        }
                        if (Object.entries(veterinaries).length === 0) {
                            missingWork.push(" 1 veterinaire");
                        }
                        if (Object.entries(receptions).length === 0) {
                            missingWork.push(" 1 personne a la reception");
                        }
                        if (!(zoo.length == 1)) return [3 /*break*/, 7];
                        res.status(400).send("Le zoo est déjà ouvert");
                        return [3 /*break*/, 10];
                    case 7:
                        if (!(missingWork.length > 0)) return [3 /*break*/, 8];
                        res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, Model_3.ZooModel.updateMany({}, { is_open: true, in_night: true })];
                    case 9:
                        _a.sent();
                        res.status(200).send("Le zoo est maintenant ouvert aux visiteurs pour la night!\nListe des employés présents:\n"
                            + "agent(s) de service(s):" + serviceAgents + "\n"
                            + "vendeur(s):" + sellers + "\n"
                            + "vétérinaire(s):" + veterinaries + "\n"
                            + "reception:" + receptions + "\n");
                        _a.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ZooController.prototype.buildRoutes = function () {
        var router = express.Router();
        // .bind(this) permet de conserver le this lors de l'appel par express de la fonction
        router.get('/', authentication, this.getAll.bind(this));
        router.get('/:name', authentication, this.searchZoo.bind(this));
        router.delete('/:id', authentication, this.deleteZoo.bind(this));
        router.post('/', authentication, express.json(), this.createZoo.bind(this));
        router.put('/:id', authentication, express.json(), this.updateZoo.bind(this));
        router.get('/serviceAgent', authentication, this.getServiceAgent.bind(this));
        router.get('/veterinary', authentication, this.getVeterinary.bind(this));
        router.get('/receptionist', authentication, this.getReceptionist.bind(this));
        router.get('/seller', authentication, this.getSeller.bind(this));
        router.get('/visitor', authentication, this.getVisitor.bind(this));
        router.get('/isAbleToOpen', authentication, this.isAbleToOpen.bind(this));
        router.get('/isAbleToOpenDetails', authentication, this.isAbleToOpenDetails.bind(this));
        router.post('/openZoo', authentication, express.json(), this.openZoo.bind(this));
        router.post('/closeZoo', authentication, express.json(), this.closeZoo.bind(this));
        router.post('/openNight', authentication, express.json(), this.openNight.bind(this));
        return router;
    };
    return ZooController;
}());
exports.ZooController = ZooController;
