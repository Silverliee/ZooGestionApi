"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.VisitorController = void 0;
var express = __importStar(require("express"));
var Model_1 = require("../Model");
var Model_2 = require("../Model");
var Model_3 = require("../Model");
var Model_4 = require("../Model");
var Model_5 = require("../Model");
var authentication = require('../Middleware/Authentification');
var entityConstValidator = require('../Middleware/EntityConstValidator');
var VisitorController = /** @class */ (function () {
    function VisitorController() {
        this.path = "/visitor";
        this.model = Model_1.VisitorModel;
    }
    VisitorController.prototype.getVisitors = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.find()];
                    case 1:
                        visitors = _a.sent();
                        res.status(200).json(visitors);
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.getVisitorById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        visitor = _a.sent();
                        res.status(200).json(visitor);
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.createVisitor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(req.body.name == null)) return [3 /*break*/, 1];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 3];
                    case 1:
                        visitor = new this.model(req.body);
                        return [4 /*yield*/, visitor.save()];
                    case 2:
                        _a.sent();
                        res.status(200).json(visitor);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.updateVisitor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        visitor = _a.sent();
                        if (!(visitor == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, visitor.updateOne(req.body)];
                    case 3:
                        _a.sent();
                        res.status(200).json(visitor);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.deleteVisitor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findById(req.params.id)];
                    case 1:
                        visitor = _a.sent();
                        if (!(visitor == null)) return [3 /*break*/, 2];
                        res.status(400).json({ message: "Le contenue de votre requête est invalide" });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, visitor.deleteOne()];
                    case 3:
                        _a.sent();
                        res.status(200).json(visitor);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.addPassToVisitor = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var isPassTypeValid, _loop_1, i, pass, visitor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isPassTypeValid = entityConstValidator.isValid("PASS_TYPE", req.body.type);
                        if (req.body.type == undefined || !isPassTypeValid) {
                            res.status(400).json({ message: "Le type de pass saisie est invalide" });
                        }
                        if (req.body.authorizedSpaces == undefined) {
                            res.status(400).json({ message: "Veuillez renseigné la liste des espaces authorizés" });
                        }
                        else if (typeof req.body.authorizedSpaces !== "object") {
                            res.status(400).json({ message: "authoriedSpaces doit être un object, consulté la documentation" });
                        }
                        _loop_1 = function (i) {
                            var space;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, Model_2.SpaceModel.findOne({ _id: req.body.authorizedSpaces[i] })
                                            .catch(function (error) { return res.status(404).json({ message: "L'espace : " + req.body.authorizedSpaces[i] + " n'existe pas" }); })];
                                    case 1:
                                        space = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < req.body.authorizedSpaces.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        pass = new Model_4.PassModel(__assign({}, req.body));
                        return [4 /*yield*/, this.model.findOne({ _id: req.params.id })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 5:
                        visitor = _a.sent();
                        if (!(visitor.pass == undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: pass })
                                .then(function () { return res.status(200).json({ message: "Le pass a bien été ajouté" }); })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: pass })
                            .then(function () { return res.status(200).json({ message: "Le pass a bien été ajouté, le précédent a été supprimé" }); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.moveVisitorToSpace = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var zoo, zooNight, visitor, visitorAuthorizedSpaces, destination, currentDate, attendanceToHistorize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Model_3.ZooModel.find({ is_open: true })];
                    case 1:
                        zoo = _a.sent();
                        return [4 /*yield*/, Model_3.ZooModel.find({ in_night: true })];
                    case 2:
                        zooNight = _a.sent();
                        if (!(zoo.length == 0)) return [3 /*break*/, 3];
                        res.status(400).send("Le zoo est fermé, impossible pour un visiteur d'entrer.");
                        return [3 /*break*/, 12];
                    case 3: return [4 /*yield*/, Model_1.VisitorModel.findOne({ _id: req.params.id })];
                    case 4:
                        visitor = _a.sent();
                        if (visitor === null) {
                            res.status(404).json({ message: "Le visiteur mentionné n'existe pas" });
                        }
                        else if (visitor.pass == null) {
                            res.status(400).json({ message: "Le visiteur ne possède pas de pass" });
                        }
                        visitorAuthorizedSpaces = visitor.pass.authorizedSpaces;
                        return [4 /*yield*/, Model_2.SpaceModel.findOne({ _id: req.params.space })];
                    case 5:
                        destination = _a.sent();
                        if (destination === null) {
                            res.status(404).json({ message: "La destination mentionné n'existe pas" });
                        }
                        // @ts-ignore
                        if (zooNight.length == 1 && visitor.pass.type != 6) {
                            res.status(400).json({ message: "Le visiteur n'est pas authorisé à se rendre au zoo sans pass night." });
                        }
                        if (!visitorAuthorizedSpaces.includes(req.params.space)) {
                            res.status(400).json({ message: "Le visiteur n'est pas authorisé à se rendre à cette endroit" });
                        }
                        if (!(visitor.pass.type === 5)) return [3 /*break*/, 10];
                        if (!(visitorAuthorizedSpaces[0] !== req.params.space)) return [3 /*break*/, 6];
                        res.status(400).json({ message: "Le visiteur n'est pas authorisé à se rendre à cette endroit" });
                        return [3 /*break*/, 9];
                    case 6:
                        // @ts-ignore
                        visitor.pass.authorizedSpaces.shift();
                        // @ts-ignore
                        return [4 /*yield*/, Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: visitor.pass })];
                    case 7:
                        // @ts-ignore
                        _a.sent();
                        return [4 /*yield*/, Model_1.VisitorModel.updateOne({ _id: req.params.id }, { actualLocation: req.params.space })
                                .then(function () { return res.status(200).json({ message: "Le visiteur vient de se rendre au lieu indiqué" }); })
                                .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, Model_1.VisitorModel.updateOne({ _id: req.params.id }, { actualLocation: req.params.space })
                            .then(function () { return res.status(200).json({ message: "Le visiteur vient de se rendre au lieu indiqué" }); })
                            .catch(function (error) { return res.status(400).json({ error: error }); })];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        currentDate = new Date().toISOString().slice(0, 10);
                        attendanceToHistorize = new Model_5.AttendanceHistoryModel({
                            spaceId: req.params.space,
                            date: currentDate
                        });
                        return [4 /*yield*/, attendanceToHistorize.save()];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get("/", authentication, this.getVisitors.bind(this));
        router.get("/:id", authentication, this.getVisitorById.bind(this));
        router.post("/", authentication, entityConstValidator, this.createVisitor.bind(this));
        router.put("/:id", authentication, entityConstValidator, this.updateVisitor.bind(this));
        router.delete("/:id", authentication, this.deleteVisitor.bind(this));
        router.post("/:id/pass", authentication, this.addPassToVisitor.bind(this));
        router.post("/:id/move/:space", authentication, this.moveVisitorToSpace.bind(this));
        return router;
    };
    return VisitorController;
}());
exports.VisitorController = VisitorController;
