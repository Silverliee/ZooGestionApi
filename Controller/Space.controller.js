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
exports.SpaceController = void 0;
var express = __importStar(require("express"));
var Model_1 = require("../Model");
var Model_2 = require("../Model");
var Model_3 = require("../Model");
var Model_4 = require("../Model");
var Model_5 = require("../Model");
var Model_6 = require("../Model");
var authentication = require('../Middleware/Authentification');
var entityConstValidator = require('../Middleware/EntityConstValidator');
var SpaceController = /** @class */ (function () {
    function SpaceController() {
        this.path = "/space";
        this.model = Model_1.SpaceModel;
    }
    SpaceController.prototype.getSpaces = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find()
                            .then(function (products) { return res.status(200).json(products); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getSpaceById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        space = _a.sent();
                        res.status(200).json(space);
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.createSpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(req.body.name == null)) return [3 /*break*/, 1];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 3];
                    case 1:
                        space = new this.model(req.body);
                        return [4 /*yield*/, space.save()];
                    case 2:
                        _a.sent();
                        res.status(200).json(space);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.updateSpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        space = _a.sent();
                        if (!(space == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, space.updateOne(req.body)];
                    case 3:
                        _a.sent();
                        res.status(200).json(space);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.deleteSpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        space = _a.sent();
                        if (!(space == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, space.deleteOne()];
                    case 3:
                        _a.sent();
                        res.status(200).json(space);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getSpaceMaintenanceHistory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        space = _a.sent();
                        if (!(space == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Model_5.MaintenanceHistoryModel.find({ space: space })
                            .then(function (maintenanceHistory) { return res.status(200).json(maintenanceHistory); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getSpaceAttendanceHistory = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        space = _a.sent();
                        if (!(space == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Model_6.AttendanceHistoryModel.find({ space: space })
                            .then(function (attendanceHistory) { return res.status(200).json(attendanceHistory); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getSpaceAnimals = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var spaceAnimals, animals, results, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id }, 'animals')];
                    case 1:
                        spaceAnimals = _a.sent();
                        if (spaceAnimals === null) {
                            res.status(404).json({ message: "Aucun espace correspondant" });
                        }
                        animals = spaceAnimals.animals;
                        if (animals === null) {
                            res.status(404).json({ message: "Aucun animal n'est lié à cette espace" });
                        }
                        results = new Array();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < animals.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Model_3.AnimalModel.findOne({ _id: animals[i] })
                                .then(function (product) { return results.push(product); })
                                .catch(function (error) { return res.status(400).json(error); })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        res.status(200).json(results);
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getSpacesInMaintenance = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find({ on_maintain: true })
                            .then(function (products) { return res.status(200).json(products); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.isSpaceGetVisitedByDate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space, attendances;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id })];
                    case 1:
                        space = _a.sent();
                        if (space === null) {
                            res.status(404).json({ message: "L'id indiqué ne correspond à aucun espace" });
                        }
                        return [4 /*yield*/, Model_6.AttendanceHistoryModel.find({ spaceId: req.params.id }).where('date').equals(req.body.date)];
                    case 2:
                        attendances = _a.sent();
                        if (attendances === null) {
                            res.status(404).json({ message: "Aucun fréquentation le jour indiqué" });
                        }
                        else {
                            res.status(200).json({ message: "L'espace a été visité " + attendances.length + " fois" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.isSpaceGetVisitedByPeriod = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space, attendances, startDate, endDate, attendanceInRange, i, attendanceDay;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id })];
                    case 1:
                        space = _a.sent();
                        if (space === null) {
                            res.status(404).json({ message: "L'id indiqué ne correspond à aucun espace" });
                        }
                        return [4 /*yield*/, Model_6.AttendanceHistoryModel.find({ spaceId: req.params.id })];
                    case 2:
                        attendances = _a.sent();
                        if (attendances === null) {
                            res.status(404).json({ message: "Aucun fréquentation trouvé pour cette espace" });
                        }
                        startDate = new Date(req.body.startDate);
                        endDate = new Date(req.body.endDate);
                        attendanceInRange = [];
                        for (i = 0; i < attendances.length; i++) {
                            attendanceDay = new Date(attendances[i].date);
                            if (startDate <= attendanceDay && attendanceDay <= endDate) {
                                attendanceInRange.push(attendances[i]);
                            }
                        }
                        res.status(200).json({ message: "L'espace a été visité " + attendanceInRange.length + " fois" });
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.getAnimalsTreatmentBySpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var space, animals, results, _loop_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id })];
                    case 1:
                        space = _a.sent();
                        if (space === null) {
                            res.status(404).json({ message: "Aucun espace correspondant" });
                        }
                        animals = space.animals;
                        if (animals === null) {
                            res.status(404).json({ message: "Aucun animal n'est lié à cette espace" });
                        }
                        results = new Array();
                        _loop_1 = function (i) {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, Model_3.AnimalModel.findOne({ _id: animals[i] })
                                            .then(function (product) {
                                            if (product !== null) {
                                                var result = {
                                                    "animal_id": animals[i],
                                                    "treatments": product.treatments == null ? null : product.treatments
                                                };
                                                results.push(result);
                                            }
                                        })];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < animals.length)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1(i)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        res.status(200).json(results);
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.isSpaceVisitedActually = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_4.VisitorModel.find().where('actualLocation').equals(req.params.id)];
                    case 1:
                        visitors = _a.sent();
                        if (visitors.length == 0) {
                            res.status(200).json({ message: "Aucune visiteur ne fréquente cette espace en ce moment" });
                        }
                        else {
                            res.status(200).json({ message: visitors.length + " visiteur(s) fréquente(nt) cette espace en ce moment" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.addAnimalToSpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animal, space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        animal = Model_3.AnimalModel.findOne({ _id: req.body.animal_id });
                        if (animal === null) {
                            res.status(404).json({ message: "Aucun espace correspondant" });
                        }
                        return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 1:
                        space = _a.sent();
                        // @ts-ignore
                        if (space.animals == undefined) {
                            // @ts-ignore
                            space.animals = new Array(req.body.animal_id);
                        }
                        else {
                            // @ts-ignore
                            space.animals.push(req.body.animal_id);
                        }
                        // @ts-ignore
                        return [4 /*yield*/, Model_1.SpaceModel.updateOne({ _id: req.params.id }, { animals: space.animals })
                                .then(function () { return res.status(200).json({ message: "L'animal a bien été ajouté à l'espace" }); })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 2:
                        // @ts-ignore
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.isSpaceInMaintenance = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employee, currentDate, maintenanceToHistorize, space;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_2.EmployeeModel.findOne({ email: req.body.email })];
                    case 1:
                        employee = _a.sent();
                        if (!(employee === null)) return [3 /*break*/, 2];
                        res.status(404).json({ message: "Aucun employée ne possède cette email" });
                        return [3 /*break*/, 12];
                    case 2:
                        if (!(employee.password != req.body.password)) return [3 /*break*/, 3];
                        res.status(400).json({ message: "Le mot de passe est incorrecte" });
                        return [3 /*break*/, 12];
                    case 3:
                        if (!!employee.is_admin) return [3 /*break*/, 4];
                        res.status(400).json({ message: "Vous devez être administrateur pour mettre un espace en maintenance" });
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(req.body.on_maintain === null)) return [3 /*break*/, 5];
                        res.status(422).json({ message: "La valeur fournie n'est pas correcte " });
                        return [3 /*break*/, 12];
                    case 5:
                        if (!(req.body.on_maintain === true)) return [3 /*break*/, 10];
                        currentDate = new Date().toISOString().slice(0, 10);
                        maintenanceToHistorize = new Model_5.MaintenanceHistoryModel({
                            employee: employee._id,
                            date: currentDate
                        });
                        return [4 /*yield*/, Model_1.SpaceModel.findOne({ _id: req.params.id })];
                    case 6:
                        space = _a.sent();
                        if (!(space.maintenanceHistory === null)) return [3 /*break*/, 8];
                        return [4 /*yield*/, Model_1.SpaceModel.updateOne({ _id: req.params.id }, { maintenanceHistory: maintenanceToHistorize })];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        // @ts-ignore
                        space.maintenanceHistory.push(maintenanceToHistorize);
                        // @ts-ignore
                        return [4 /*yield*/, Model_1.SpaceModel.updateOne({ _id: req.params.id }, { maintenanceHistory: space.maintenanceHistory })];
                    case 9:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 10;
                    case 10: return [4 /*yield*/, Model_1.SpaceModel.updateOne({ _id: req.params.id }, { on_maintain: req.body.on_maintain })
                            .then(function () { return res.status(200).json({ message: "Le status de maintenance a bien été modifié" }); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    SpaceController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get(this.path, authentication, this.getSpaces.bind(this));
        router.get(this.path + "/:id", authentication, this.getSpaceById.bind(this));
        router.post(this.path, authentication, entityConstValidator, this.createSpace.bind(this));
        router.put(this.path + "/:id", authentication, entityConstValidator, this.updateSpace.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteSpace.bind(this));
        router.get(this.path + "/:id/maintenanceHistory", authentication, this.getSpaceMaintenanceHistory.bind(this));
        router.get(this.path + "/:id/attendanceHistory", authentication, this.getSpaceAttendanceHistory.bind(this));
        router.get(this.path + "/:id/animals", authentication, this.getSpaceAnimals.bind(this));
        router.get(this.path + "/maintenance", authentication, this.getSpacesInMaintenance.bind(this));
        router.post(this.path + "/:id/isVisited", authentication, this.isSpaceGetVisitedByDate.bind(this));
        router.post(this.path + "/:id/isVisitedByPeriod", authentication, this.isSpaceGetVisitedByPeriod.bind(this));
        router.get(this.path + "/:id/animals/treatments", authentication, this.getAnimalsTreatmentBySpace.bind(this));
        router.get(this.path + "/:id/isVisitedActually", authentication, this.isSpaceVisitedActually.bind(this));
        router.post(this.path + "/:id/animals", authentication, this.addAnimalToSpace.bind(this));
        router.post(this.path + "/:id/isInMaintenance", authentication, this.isSpaceInMaintenance.bind(this));
        return router;
    };
    return SpaceController;
}());
exports.SpaceController = SpaceController;
