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
exports.SpaceController = void 0;
const express = __importStar(require("express"));
const Model_1 = require("../Model");
const Model_2 = require("../Model");
const Model_3 = require("../Model");
const Model_4 = require("../Model");
const Model_5 = require("../Model");
const Model_6 = require("../Model");
const authentication = require('../Middleware/Authentification');
const entityConstValidator = require('../Middleware/EntityConstValidator');
class SpaceController {
    constructor() {
        this.path = "/space";
        this.model = Model_1.SpaceModel;
    }
    getSpaces(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.find()
                .then(products => res.status(200).json(products))
                .catch(error => res.status(400).json({ error }));
        });
    }
    getSpaceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield this.model.findById(req.params.id);
            res.status(200).json(space);
        });
    }
    createSpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.name == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                const space = new this.model(req.body);
                yield space.save();
                res.status(200).json(space);
            }
        });
    }
    updateSpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield this.model.findById(req.params.id);
            if (space == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield space.updateOne(req.body);
                res.status(200).json(space);
            }
        });
    }
    deleteSpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield this.model.findById(req.params.id);
            if (space == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield space.deleteOne();
                res.status(200).json(space);
            }
        });
    }
    getSpaceMaintenanceHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield this.model.findById(req.params.id);
            if (space == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield Model_5.MaintenanceHistoryModel.find({ space: space })
                    .then(maintenanceHistory => res.status(200).json(maintenanceHistory))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    getSpaceAttendanceHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield this.model.findById(req.params.id);
            if (space == null) {
                res.status(400).json({ message: "Le contenue de votre requête est invalide" });
            }
            else {
                yield Model_6.AttendanceHistoryModel.find({ space: space })
                    .then(attendanceHistory => res.status(200).json(attendanceHistory))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    getSpaceAnimals(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const spaceAnimals = yield Model_1.SpaceModel.findOne({ _id: req.params.id }, 'animals');
            if (spaceAnimals === null) {
                res.status(404).json({ message: "Aucun espace correspondant" });
            }
            // @ts-ignore
            const animals = spaceAnimals.animals;
            if (animals === null) {
                res.status(404).json({ message: "Aucun animal n'est lié à cette espace" });
            }
            const results = new Array();
            for (let i = 0; i < animals.length; i++) {
                yield Model_3.AnimalModel.findOne({ _id: animals[i] })
                    .then(product => results.push(product))
                    .catch(error => res.status(400).json(error));
            }
            res.status(200).json(results);
        });
    }
    getSpacesInMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.find({ on_maintain: true })
                .then(products => res.status(200).json(products))
                .catch(error => res.status(400).json({ error }));
        });
    }
    isSpaceGetVisitedByDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield Model_1.SpaceModel.findOne({ _id: req.params.id });
            if (space === null) {
                res.status(404).json({ message: "L'id indiqué ne correspond à aucun espace" });
            }
            const attendances = yield Model_6.AttendanceHistoryModel.find({ spaceId: req.params.id }).where('date').equals(req.body.date);
            if (attendances === null) {
                res.status(404).json({ message: "Aucun fréquentation le jour indiqué" });
            }
            else {
                res.status(200).json({ message: "L'espace a été visité " + attendances.length + " fois" });
            }
        });
    }
    isSpaceGetVisitedByPeriod(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield Model_1.SpaceModel.findOne({ _id: req.params.id });
            if (space === null) {
                res.status(404).json({ message: "L'id indiqué ne correspond à aucun espace" });
            }
            const attendances = yield Model_6.AttendanceHistoryModel.find({ spaceId: req.params.id });
            if (attendances === null) {
                res.status(404).json({ message: "Aucun fréquentation trouvé pour cette espace" });
            }
            const startDate = new Date(req.body.startDate);
            const endDate = new Date(req.body.endDate);
            let attendanceInRange = [];
            for (let i = 0; i < attendances.length; i++) {
                let attendanceDay = new Date(attendances[i].date);
                if (startDate <= attendanceDay && attendanceDay <= endDate) {
                    attendanceInRange.push(attendances[i]);
                }
            }
            res.status(200).json({ message: "L'espace a été visité " + attendanceInRange.length + " fois" });
        });
    }
    getAnimalsTreatmentBySpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const space = yield Model_1.SpaceModel.findOne({ _id: req.params.id });
            if (space === null) {
                res.status(404).json({ message: "Aucun espace correspondant" });
            }
            // @ts-ignore
            const animals = space.animals;
            if (animals === null) {
                res.status(404).json({ message: "Aucun animal n'est lié à cette espace" });
            }
            const results = new Array();
            for (let i = 0; i < animals.length; i++) {
                yield Model_3.AnimalModel.findOne({ _id: animals[i] })
                    .then(product => {
                    if (product !== null) {
                        let result = {
                            "animal_id": animals[i],
                            "treatments": product.treatments == null ? null : product.treatments
                        };
                        results.push(result);
                    }
                });
            }
            res.status(200).json(results);
        });
    }
    isSpaceVisitedActually(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitors = yield Model_4.VisitorModel.find().where('actualLocation').equals(req.params.id);
            if (visitors.length == 0) {
                res.status(200).json({ message: "Aucune visiteur ne fréquente cette espace en ce moment" });
            }
            else {
                res.status(200).json({ message: visitors.length + " visiteur(s) fréquente(nt) cette espace en ce moment" });
            }
        });
    }
    addAnimalToSpace(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = Model_3.AnimalModel.findOne({ _id: req.body.animal_id });
            if (animal === null) {
                res.status(404).json({ message: "Aucun espace correspondant" });
            }
            const space = yield Model_1.SpaceModel.findOne({ _id: req.params.id })
                .catch(error => res.status(400).json({ error }));
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
            yield Model_1.SpaceModel.updateOne({ _id: req.params.id }, { animals: space.animals })
                .then(() => res.status(200).json({ message: "L'animal a bien été ajouté à l'espace" }))
                .catch(error => res.status(400).json({ error }));
        });
    }
    isSpaceInMaintenance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_2.EmployeeModel.findOne({ email: req.body.email });
            if (employee === null) {
                res.status(404).json({ message: "Aucun employée ne possède cette email" });
            }
            else if (employee.password != req.body.password) {
                res.status(400).json({ message: "Le mot de passe est incorrecte" });
            }
            else if (!employee.is_admin) {
                res.status(400).json({ message: "Vous devez être administrateur pour mettre un espace en maintenance" });
            }
            else if (req.body.on_maintain === null) {
                res.status(422).json({ message: "La valeur fournie n'est pas correcte " });
            }
            else {
                if (req.body.on_maintain === true) {
                    const currentDate = new Date().toISOString().slice(0, 10);
                    const maintenanceToHistorize = new Model_5.MaintenanceHistoryModel({
                        employee: employee._id,
                        date: currentDate
                    });
                    let space = yield Model_1.SpaceModel.findOne({ _id: req.params.id });
                    // @ts-ignore
                    if (space.maintenanceHistory === null) {
                        yield Model_1.SpaceModel.updateOne({ _id: req.params.id }, { maintenanceHistory: maintenanceToHistorize });
                    }
                    else {
                        // @ts-ignore
                        space.maintenanceHistory.push(maintenanceToHistorize);
                        // @ts-ignore
                        yield Model_1.SpaceModel.updateOne({ _id: req.params.id }, { maintenanceHistory: space.maintenanceHistory });
                    }
                }
                yield Model_1.SpaceModel.updateOne({ _id: req.params.id }, { on_maintain: req.body.on_maintain })
                    .then(() => res.status(200).json({ message: "Le status de maintenance a bien été modifié" }))
                    .catch(error => res.status(400).json({ error }));
            }
        });
    }
    buildRoutes() {
        const router = express.Router();
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
    }
}
exports.SpaceController = SpaceController;
