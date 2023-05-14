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
exports.AnimalController = void 0;
var express = __importStar(require("express"));
var Model_1 = require("../Model");
var Model_2 = require("../Model");
var authentication = require('../Middleware/Authentification');
var entityConst = require('../Model/EntityConst');
var AnimalController = /** @class */ (function () {
    function AnimalController() {
        this.path = "/animal";
        this.model = Model_2.AnimalModel;
    }
    AnimalController.prototype.getAnimals = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find()];
                    case 1:
                        animals = _a.sent();
                        res.status(200).json(animals);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.getAnimalById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        animal = _a.sent();
                        res.status(200).json(animal);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.createAnimal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(req.body.name == null)) return [3 /*break*/, 1];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 3];
                    case 1:
                        animal = new this.model(req.body);
                        return [4 /*yield*/, animal.save()];
                    case 2:
                        _a.sent();
                        res.status(200).json(animal);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.updateAnimal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        animal = _a.sent();
                        if (!(animal == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, animal.updateOne(req.body)];
                    case 3:
                        _a.sent();
                        res.status(200).json(animal);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.deleteAnimal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        animal = _a.sent();
                        if (!(animal == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, animal.deleteOne()];
                    case 3:
                        _a.sent();
                        res.status(200).json(animal);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.getAnimalTreatment = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, animal;
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
                        // @ts-ignore
                        if (employee.role !== 2) {
                            res.status(400).json({ message: "Vous devez être vétérinaire pour ajouter un traitement au carnet" });
                        }
                        return [4 /*yield*/, Model_2.AnimalModel.findOne({ _id: req.params.id })
                                .catch(function (error) { return res.status(400).json({ error: error }); })
                            // @ts-ignore
                        ];
                    case 2:
                        animal = _a.sent();
                        if (!(animal.treatments == undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Model_2.AnimalModel.updateOne({ _id: req.params.id }, { treatments: req.body })
                                .then(function () { return res.status(200).json({ message: "Le traitement à bien été ajouté" }); })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        // @ts-ignore
                        animal.treatments.push(req.body);
                        // @ts-ignore
                        return [4 /*yield*/, Model_2.AnimalModel.updateOne({ _id: req.params.id }, { treatments: animal.treatments })
                                .then(function () { return res.status(200).json({ message: "Le traitement à bien été ajouté" }); })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 5:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get(this.path, authentication, this.getAnimals.bind(this));
        router.get(this.path + "/:id", authentication, this.getAnimalById.bind(this));
        router.post(this.path, authentication, this.createAnimal.bind(this));
        router.put(this.path + "/:id", authentication, this.updateAnimal.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteAnimal.bind(this));
        router.post(this.path + "/:id/treatment", authentication, this.getAnimalTreatment.bind(this));
        return router;
    };
    return AnimalController;
}());
exports.AnimalController = AnimalController;
