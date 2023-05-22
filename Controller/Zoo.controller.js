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
exports.ZooController = void 0;
const express = __importStar(require("express"));
const Model_1 = require("../Model");
const Model_2 = require("../Model");
const Model_3 = require("../Model");
const authentication = require('../Middleware/Authentification');
class ZooController {
    constructor() {
        this.path = "/zoo";
        this.model = Model_3.ZooModel;
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoos = yield this.model.find().exec();
            res.json(zoos);
        });
    }
    searchZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoo = yield this.model.find({
                name: req.params.name
            }).exec();
            res.json(zoo);
        });
    }
    deleteZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.deleteOne({ _id: req.params.id }).exec();
            res.json(result);
        });
    }
    createZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create({
                is_open: req.body.is_open,
                in_night: req.body.in_night
            });
            res.json(result);
        });
    }
    updateZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.updateOne({ _id: req.params.id }, {
                is_open: req.body.is_open,
                in_night: req.body.in_night
            }).exec();
            res.json(result);
        });
    }
    getServiceAgent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceAgent = yield Model_1.EmployeeModel.find({ role: 1, is_working: true }).exec();
            res.json(serviceAgent);
        });
    }
    getVeterinary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const veterinary = yield Model_1.EmployeeModel.find({ role: 2, is_working: true }).exec();
            res.json(veterinary);
        });
    }
    getReceptionist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const receptionist = yield Model_1.EmployeeModel.find({ role: 3, is_working: true }).exec();
            res.json(receptionist);
        });
    }
    getSeller(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const seller = yield Model_1.EmployeeModel.find({ role: 4, is_working: true }).exec();
            res.json(seller);
        });
    }
    getVisitor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const visitors = yield Model_2.VisitorModel.find().where('actualLocation').ne(null);
            if (visitors.length == 0) {
                res.status(200).json({ message: "Aucune visiteur ne fréquente le zoo en ce moment" });
            }
            else {
                res.status(200).json({ message: visitors.length + " visiteur(s) fréquente(nt) le zoo en ce moment" });
            }
        });
    }
    isAbleToOpen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceAgents = yield Model_1.EmployeeModel.find({ role: 1, is_working: true });
            const veterinaries = yield Model_1.EmployeeModel.find({ role: 2, is_working: true });
            const receptions = yield Model_1.EmployeeModel.find({ role: 3, is_working: true });
            const sellers = yield Model_1.EmployeeModel.find({ role: 4, is_working: true });
            if (Object.entries(serviceAgents).length === 0 || Object.entries(sellers).length === 0 || Object.entries(veterinaries).length === 0 || Object.entries(receptions).length === 0) {
                res.status(400).send(false);
            }
            else {
                res.status(200).send(true);
            }
        });
    }
    isAbleToOpenDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceAgents = yield Model_1.EmployeeModel.find({ role: 1, is_working: true });
            const sellers = yield Model_1.EmployeeModel.find({ role: 4, is_working: true });
            const veterinaries = yield Model_1.EmployeeModel.find({ role: 2, is_working: true });
            const receptions = yield Model_1.EmployeeModel.find({ role: 3, is_working: true });
            let missingWork = new Array();
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
        });
    }
    openZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_1.EmployeeModel.findOne({ email: req.body.email });
            if (employee === null) {
                res.status(404).json({ message: "Aucun employée ne possède cette email" });
            }
            else if (employee.password != req.body.password) {
                res.status(400).json({ message: "Le mot de passe est incorrecte" });
            }
            else if (!employee.is_admin) {
                res.status(400).json({ message: "Vous devez être administrateur pour ouvrir le zoo." });
            }
            const serviceAgents = yield Model_1.EmployeeModel.find({ role: 1, is_working: true });
            const sellers = yield Model_1.EmployeeModel.find({ role: 4, is_working: true });
            const veterinaries = yield Model_1.EmployeeModel.find({ role: 2, is_working: true });
            const receptions = yield Model_1.EmployeeModel.find({ role: 3, is_working: true });
            const zoo = yield Model_3.ZooModel.find({ is_open: true });
            let missingWork = new Array();
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
            if (zoo.length == 1) {
                res.status(400).send("Le zoo est déjà ouvert");
            }
            else {
                if (missingWork.length > 0) {
                    res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                }
                else {
                    yield Model_3.ZooModel.updateMany({}, { is_open: true });
                    res.status(200).send("Le zoo est maintenant ouvert aux visiteurs!\nListe des employés présents:\n"
                        + "agent(s) de service(s):" + serviceAgents + "\n"
                        + "vendeur(s):" + sellers + "\n"
                        + "vétérinaire(s):" + veterinaries + "\n"
                        + "reception:" + receptions + "\n");
                }
            }
        });
    }
    closeZoo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_1.EmployeeModel.findOne({ email: req.body.email });
            if (employee === null) {
                res.status(404).json({ message: "Aucun employée ne possède cette email" });
            }
            else if (employee.password != req.body.password) {
                res.status(400).json({ message: "Le mot de passe est incorrecte" });
            }
            else if (!employee.is_admin) {
                res.status(400).json({ message: "Vous devez être administrateur pour fermer le zoo." });
            }
            const zoo = yield Model_3.ZooModel.find({ is_open: true });
            if (zoo.length == 0) {
                res.status(400).send("Le zoo est déjà fermé!");
            }
            else {
                yield Model_3.ZooModel.updateMany({}, { is_open: false, in_night: false });
                res.status(200).send("Le zoo est maintenant fermé!");
            }
        });
    }
    openNight(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield Model_1.EmployeeModel.findOne({ email: req.body.email });
            if (employee === null) {
                res.status(404).json({ message: "Aucun employée ne possède cette email" });
            }
            else if (employee.password != req.body.password) {
                res.status(400).json({ message: "Le mot de passe est incorrecte" });
            }
            else if (!employee.is_admin) {
                res.status(400).json({ message: "Vous devez être administrateur pour ouvrir le zoo de nuit." });
            }
            const serviceAgents = yield Model_1.EmployeeModel.find({ role: 1, is_working: true });
            const sellers = yield Model_1.EmployeeModel.find({ role: 4, is_working: true });
            const veterinaries = yield Model_1.EmployeeModel.find({ role: 2, is_working: true });
            const receptions = yield Model_1.EmployeeModel.find({ role: 3, is_working: true });
            const zoo = yield Model_3.ZooModel.find({ is_open: true });
            let missingWork = new Array();
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
            if (zoo.length == 1) {
                res.status(400).send("Le zoo est déjà ouvert");
            }
            else {
                if (missingWork.length > 0) {
                    res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                }
                else {
                    yield Model_3.ZooModel.updateMany({}, { is_open: true, in_night: true });
                    res.status(200).send("Le zoo est maintenant ouvert aux visiteurs pour la night!\nListe des employés présents:\n"
                        + "agent(s) de service(s):" + serviceAgents + "\n"
                        + "vendeur(s):" + sellers + "\n"
                        + "vétérinaire(s):" + veterinaries + "\n"
                        + "reception:" + receptions + "\n");
                }
            }
        });
    }
    buildRoutes() {
        const router = express.Router();
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
    }
}
exports.ZooController = ZooController;
