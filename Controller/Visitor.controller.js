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
exports.VisitorController = void 0;
const express = __importStar(require("express"));
const Model_1 = require("../Model");
const Model_2 = require("../Model");
const Model_3 = require("../Model");
const Model_4 = require("../Model");
const Model_5 = require("../Model");
const authentication = require('../Middleware/Authentification');
const entityConstValidator = require('../Middleware/EntityConstValidator');
class VisitorController {
    constructor() {
        this.path = "/visitor";
        this.model = Model_1.VisitorModel;
    }
    getVisitors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitors = yield this.model.find();
            res.status(200).json(visitors);
        });
    }
    getVisitorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitor = yield this.model.findById(req.params.id);
            res.status(200).json(visitor);
        });
    }
    createVisitor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                const visitor = new this.model(req.body);
                yield visitor.save();
                res.status(200).json(visitor);
            }
        });
    }
    updateVisitor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitor = yield this.model.findById(req.params.id);
            if (visitor == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield visitor.updateOne(req.body);
                res.status(200).json(visitor);
            }
        });
    }
    deleteVisitor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitor = yield this.model.findById(req.params.id);
            if (visitor == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield visitor.deleteOne();
                res.status(200).json(visitor);
            }
        });
    }
    addPassToVisitor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPassTypeValid = entityConstValidator.isValid("PASS_TYPE", req.body.type);
            if (req.body.type == undefined || !isPassTypeValid) {
                res.status(400).json({ message: "Le type de pass saisie est invalide" });
            }
            if (req.body.authorizedSpaces == undefined) {
                res.status(400).json({ message: "Veuillez renseigné la liste des espaces authorizés" });
            }
            else if (typeof req.body.authorizedSpaces !== "object") {
                res.status(400).json({ message: "authoriedSpaces doit être un object, consulté la documentation" });
            }
            for (let i = 0; i < req.body.authorizedSpaces.length; i++) {
                let space = yield Model_2.SpaceModel.findOne({ _id: req.body.authorizedSpaces[i] })
                    .catch(error => res.status(404).json({ message: "L'espace : " + req.body.authorizedSpaces[i] + " n'existe pas" }));
            }
            const pass = new Model_4.PassModel(Object.assign({}, req.body));
            const visitor = yield this.model.findOne({ _id: req.params.id })
                .catch(error => res.status(400).json({ error }));
            // @ts-ignore
            if (visitor.pass == undefined) {
                yield Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: pass })
                    .then(() => res.status(200).json({ message: "Le pass a bien été ajouté" }))
                    .catch(error => res.status(400).json({ error }));
            }
            else {
                yield Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: pass })
                    .then(() => res.status(200).json({ message: "Le pass a bien été ajouté, le précédent a été supprimé" }))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    moveVisitorToSpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoo = yield Model_3.ZooModel.find({ is_open: true });
            const zooNight = yield Model_3.ZooModel.find({ in_night: true });
            if (zoo.length == 0) {
                res.status(400).send("Le zoo est fermé, impossible pour un visiteur d'entrer.");
            }
            else {
                const visitor = yield Model_1.VisitorModel.findOne({ _id: req.params.id });
                if (visitor === null) {
                    res.status(404).json({ message: "Le visiteur mentionné n'existe pas" });
                }
                else if (visitor.pass == null) {
                    res.status(400).json({ message: "Le visiteur ne possède pas de pass" });
                }
                // @ts-ignore
                const visitorAuthorizedSpaces = visitor.pass.authorizedSpaces;
                const destination = yield Model_2.SpaceModel.findOne({ _id: req.params.space });
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
                // @ts-ignore
                if (visitor.pass.type === 5) {
                    if (visitorAuthorizedSpaces[0] !== req.params.space) {
                        res.status(400).json({ message: "Le visiteur n'est pas authorisé à se rendre à cette endroit" });
                    }
                    else {
                        // @ts-ignore
                        visitor.pass.authorizedSpaces.shift();
                        // @ts-ignore
                        yield Model_1.VisitorModel.updateOne({ _id: req.params.id }, { pass: visitor.pass });
                        yield Model_1.VisitorModel.updateOne({ _id: req.params.id }, { actualLocation: req.params.space })
                            .then(() => res.status(200).json({ message: "Le visiteur vient de se rendre au lieu indiqué" }))
                            .catch(error => res.status(400).json({ error }));
                    }
                }
                else {
                    yield Model_1.VisitorModel.updateOne({ _id: req.params.id }, { actualLocation: req.params.space })
                        .then(() => res.status(200).json({ message: "Le visiteur vient de se rendre au lieu indiqué" }))
                        .catch(error => res.status(400).json({ error }));
                }
            }
            const currentDate = new Date().toISOString().slice(0, 10);
            const attendanceToHistorize = new Model_5.AttendanceHistoryModel({
                spaceId: req.params.space,
                date: currentDate
            });
            yield attendanceToHistorize.save();
        });
    }
    buildRoutes() {
        const router = express.Router();
        router.get("/", authentication, this.getVisitors.bind(this));
        router.get("/:id", authentication, this.getVisitorById.bind(this));
        router.post("/", authentication, entityConstValidator, this.createVisitor.bind(this));
        router.put("/:id", authentication, entityConstValidator, this.updateVisitor.bind(this));
        router.delete("/:id", authentication, this.deleteVisitor.bind(this));
        router.post("/:id/pass", authentication, this.addPassToVisitor.bind(this));
        router.post("/:id/move/:space", authentication, this.moveVisitorToSpace.bind(this));
        return router;
    }
}
exports.VisitorController = VisitorController;
