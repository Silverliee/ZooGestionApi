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
exports.AnimalController = void 0;
const express = __importStar(require("express"));
const Model_1 = require("../Model");
const Model_2 = require("../Model");
const authentication = require('../Middleware/Authentification');
const entityConst = require('../Model/EntityConst');
class AnimalController {
    constructor() {
        this.path = "/animal/";
        this.model = Model_2.AnimalModel;
    }
    getAnimals(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animals = yield this.model.find();
            res.status(200).json(animals);
        });
    }
    getAnimalById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = yield this.model.findById(req.params.id);
            res.status(200).json(animal);
        });
    }
    createAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                const animal = new this.model(req.body);
                yield animal.save();
                res.status(200).json(animal);
            }
        });
    }
    updateAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = yield this.model.findById(req.params.id);
            if (animal == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield animal.updateOne(req.body);
                res.status(200).json(animal);
            }
        });
    }
    deleteAnimal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = yield this.model.findById(req.params.id);
            if (animal == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield animal.deleteOne();
                res.status(200).json(animal);
            }
        });
    }
    getAnimalTreatment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_1.EmployeeModel.findOne({ email: req.body.email });
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
            const animal = yield Model_2.AnimalModel.findOne({ _id: req.params.id })
                .catch(error => res.status(400).json({ error }));
            // @ts-ignore
            if (animal.treatments == undefined) {
                yield Model_2.AnimalModel.updateOne({ _id: req.params.id }, { treatments: req.body })
                    .then(() => res.status(200).json({ message: "Le traitement à bien été ajouté" }))
                    .catch(error => res.status(400).json({ error }));
            }
            else {
                // @ts-ignore
                animal.treatments.push(req.body);
                // @ts-ignore
                yield Model_2.AnimalModel.updateOne({ _id: req.params.id }, { treatments: animal.treatments })
                    .then(() => res.status(200).json({ message: "Le traitement à bien été ajouté" }))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    buildRoutes() {
        const router = express.Router();
        router.get(this.path, authentication, this.getAnimals.bind(this));
        router.get(this.path + "/:id", authentication, this.getAnimalById.bind(this));
        router.post(this.path, authentication, this.createAnimal.bind(this));
        router.put(this.path + "/:id", authentication, this.updateAnimal.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteAnimal.bind(this));
        router.post(this.path + "/:id/treatment", authentication, this.getAnimalTreatment.bind(this));
        return router;
    }
}
exports.AnimalController = AnimalController;
