import {Request, Response, Router} from "express";
import express from "express";
import {Space, SpaceModel} from "../Model";
import {Employee, EmployeeModel} from "../Model";
import {Animal, AnimalModel} from "../Model";
import {Visitor, VisitorModel} from "../Model";
import {MaintenanceHistory, MaintenanceHistoryModel} from "../Model";
import {AttendanceHistory, AttendanceHistoryModel} from "../Model";
import {Model} from "mongoose";

const authentication = require('../Middleware/Authentification');
const entityConstValidator = require('../Middleware/EntityConstValidator');

export class SpaceController {

    readonly path: string;
    readonly model: Model<Space>;

    constructor() {
        this.path = "/space";
        this.model = SpaceModel;
    }

    async getSpaces(req: Request, res: Response) {
        await this.model.find()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({error}));
    }

    async getSpaceById(req: Request, res: Response) {
        const space = await this.model.findById(req.params.id);
        res.status(200).json(space);
    }

    async createSpace(req: Request, res: Response) {
        if(req.body.name == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            const space = new this.model(req.body);
            await space.save();
            res.status(200).json(space);
        }
    }

    async updateSpace(req: Request, res: Response) {
        const space = await this.model.findById(req.params.id);
        if(space == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await space.updateOne(req.body);
            res.status(200).json(space);
        }
    }

    async deleteSpace(req: Request, res: Response) {
        const space = await this.model.findById(req.params.id);
        if(space == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await space.deleteOne();
            res.status(200).json(space);
        }
    }

    async getSpaceMaintenanceHistory(req: Request, res: Response) {
        const space = await this.model.findById(req.params.id);
        if(space == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await MaintenanceHistoryModel.find({space: space})
                .then(maintenanceHistory => res.status(200).json(maintenanceHistory))
                .catch(error => res.status(400).json({error}));
        }
    }

    async getSpaceAttendanceHistory(req: Request, res: Response) {
        const space = await this.model.findById(req.params.id);
        if(space == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await AttendanceHistoryModel.find({space: space})
                .then(attendanceHistory => res.status(200).json(attendanceHistory))
                .catch(error => res.status(400).json({error}));
        }
    }

    async getSpaceAnimals(req: Request, res: Response) {
        const spaceAnimals = await SpaceModel.findOne({_id: req.params.id}, 'animals')
        if(spaceAnimals === null) {
            res.status(404).json({message: "Aucun espace correspondant"});
        }
        // @ts-ignore
        const animals = spaceAnimals.animals;
        if(animals === null) {
            res.status(404).json({message: "Aucun animal n'est lié à cette espace"});
        }
        const results = new Array()
        for(let i = 0; i < animals.length; i++) {
            await AnimalModel.findOne({_id: animals[i]})
                .then(product => results.push(product))
                .catch(error => res.status(400).json(error));
        }
        res.status(200).json(results);
    }

    async getSpacesInMaintenance(req: Request, res: Response) {
        await this.model.find({on_maintain: true})
            .then(products => res.status(200).json(products))
            .catch(error => res.status(400).json({error}));
    }

    async isSpaceGetVisitedByDate(req: Request, res: Response) {
        const space = await SpaceModel.findOne({_id: req.params.id})
        if(space === null) {
            res.status(404).json({message: "L'id indiqué ne correspond à aucun espace"});
        }
        const attendances = await AttendanceHistoryModel.find({spaceId: req.params.id}).where('date').equals(req.body.date);
        if(attendances === null) {
            res.status(404).json({message: "Aucun fréquentation le jour indiqué"});
        } else {
            res.status(200).json({message: "L'espace a été visité " + attendances.length + " fois"});
        }
    }

    async isSpaceGetVisitedByPeriod(req: Request, res: Response) {
        const space = await SpaceModel.findOne({_id: req.params.id})
        if(space === null) {
            res.status(404).json({message: "L'id indiqué ne correspond à aucun espace"});
        }
        const attendances = await AttendanceHistoryModel.find({spaceId: req.params.id});
        if(attendances === null) {
            res.status(404).json({message: "Aucun fréquentation trouvé pour cette espace"});
        }
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        let attendanceInRange = [];
        for(let i = 0; i < attendances.length; i++) {
            let attendanceDay = new Date(attendances[i].date);
            if(startDate <= attendanceDay && attendanceDay <= endDate) {
                attendanceInRange.push(attendances[i]);
            }
        }
        res.status(200).json({message: "L'espace a été visité " + attendanceInRange.length + " fois"});
    }

    async getAnimalsTreatmentBySpace(req: Request, res: Response) {
        const space = await SpaceModel.findOne({_id: req.params.id});
        if(space === null) {
            res.status(404).json({message: "Aucun espace correspondant"});
        }
        // @ts-ignore
        const animals = space.animals;
        if(animals === null) {
            res.status(404).json({message: "Aucun animal n'est lié à cette espace"});
        }
        const results = new Array()
        for(let i = 0; i < animals.length; i++) {
            await AnimalModel.findOne({_id: animals[i]})
                .then(product => {
                    if(product !== null) {
                        let result = {
                            "animal_id": animals[i],
                            "treatments": product.treatments == null ? null : product.treatments
                        };
                        results.push(result);
                    }
                });
        }
        res.status(200).json(results);
    }

    async isSpaceVisitedActually(req: Request, res: Response) {
        const visitors = await VisitorModel.find().where('actualLocation').equals(req.params.id);
        if(visitors.length == 0) {
            res.status(200).json({message: "Aucune visiteur ne fréquente cette espace en ce moment"});
        } else {
            res.status(200).json({message: visitors.length + " visiteur(s) fréquente(nt) cette espace en ce moment"});
        }
    }

    async addAnimalToSpace(req: Request, res: Response) {
        const animal = AnimalModel.findOne({_id: req.body.animal_id});
        if(animal === null) {
            res.status(404).json({message: "Aucun espace correspondant"});
        }
        const space = await SpaceModel.findOne({_id: req.params.id})
            .catch(error => res.status(400).json({error}));
        // @ts-ignore
        if(space.animals == undefined) {
            // @ts-ignore
            space.animals = new Array(req.body.animal_id);
        } else {
            // @ts-ignore
            space.animals.push(req.body.animal_id);
        }
        // @ts-ignore
        await SpaceModel.updateOne({_id: req.params.id}, {animals: space.animals})
            .then(() => res.status(200).json({message: "L'animal a bien été ajouté à l'espace"}))
            .catch(error => res.status(400).json({error}));
    }

    async isSpaceInMaintenance(req: Request, res: Response) {
        const employee = await EmployeeModel.findOne({email: req.body.email})
        if(employee === null) {
            res.status(404).json({message: "Aucun employée ne possède cette email"})
        } else if(employee.password != req.body.password) {
            res.status(400).json({message: "Le mot de passe est incorrecte"})
        } else if(!employee.is_admin) {
            res.status(400).json({message: "Vous devez être administrateur pour mettre un espace en maintenance"})
        } else if(req.body.on_maintain === null) {
            res.status(422).json({message: "La valeur fournie n'est pas correcte "})
        } else {
            if(req.body.on_maintain === true) {
                const currentDate = new Date().toISOString().slice(0, 10);
                const maintenanceToHistorize = new MaintenanceHistoryModel({
                    employee: employee._id,
                    date: currentDate
                });
                let space = await SpaceModel.findOne({_id: req.params.id});
                // @ts-ignore
                if(space.maintenanceHistory === null) {
                    await SpaceModel.updateOne({_id: req.params.id}, {maintenanceHistory: maintenanceToHistorize});
                } else {
                    // @ts-ignore
                    space.maintenanceHistory.push(maintenanceToHistorize);
                    // @ts-ignore
                    await SpaceModel.updateOne({_id: req.params.id}, {maintenanceHistory: space.maintenanceHistory});
                }
            }
            await SpaceModel.updateOne({_id: req.params.id}, {on_maintain: req.body.on_maintain})
                .then(() => res.status(200).json({message: "Le status de maintenance a bien été modifié"}))
                .catch(error => res.status(400).json({error}));
        }
    }

    buildRoutes(): Router {
        let router = express.Router();
        router.get("/", authentication, this.getSpaces.bind(this));
        router.get("/:id", authentication, this.getSpaceById.bind(this));
        router.post("/", authentication, entityConstValidator, this.createSpace.bind(this));
        router.put("/:id", authentication, entityConstValidator, this.updateSpace.bind(this));
        router.delete("/:id", authentication, this.deleteSpace.bind(this));
        router.get("/:id/maintenanceHistory", authentication, this.getSpaceMaintenanceHistory.bind(this));
        router.get("/:id/attendanceHistory", authentication, this.getSpaceAttendanceHistory.bind(this));
        router.get("/:id/animals", authentication, this.getSpaceAnimals.bind(this));
        router.get("/maintenance", authentication, this.getSpacesInMaintenance.bind(this));
        router.post("/:id/isVisited", authentication, this.isSpaceGetVisitedByDate.bind(this));
        router.post("/:id/isVisitedByPeriod", authentication, this.isSpaceGetVisitedByPeriod.bind(this));
        router.get("/:id/animals/treatments", authentication, this.getAnimalsTreatmentBySpace.bind(this));
        router.get("/:id/isVisitedActually", authentication, this.isSpaceVisitedActually.bind(this));
        router.post("/:id/animals", authentication, this.addAnimalToSpace.bind(this));
        router.post("/:id/isInMaintenance", authentication, this.isSpaceInMaintenance.bind(this));
        return router;
    }
}