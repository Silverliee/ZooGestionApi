import {Request, Response, Router} from "express";
import * as express from "express";
import {Employee, EmployeeModel} from "../Model/Employee";
import {Animal, AnimalModel} from "../Model/Animal";
import {Model} from "mongoose";

const authentication = require('../Middleware/Authentification');
const entityConst = require('../Model/EntityConst');

export class AnimalController {

    readonly path: string;
    readonly model: Model<Animal>;

    constructor() {
        this.path = "/animal";
        this.model = AnimalModel;
    }

    async getAnimals(req: Request, res: Response) {
        const animals = await this.model.find();
        res.status(200).json(animals);
    }

    async getAnimalById(req: Request, res: Response) {
        const animal = await this.model.findById(req.params.id);
        res.status(200).json(animal);
    }

    async createAnimal(req: Request, res: Response) {
        if(req.body.name == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            const animal = new this.model(req.body);
            await animal.save();
            res.status(200).json(animal);
        }
    }

    async updateAnimal(req: Request, res: Response) {
        const animal = await this.model.findById(req.params.id);
        if(animal == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await animal.updateOne(req.body);
            res.status(200).json(animal);
        }
    }

    async deleteAnimal(req: Request, res: Response) {
        const animal = await this.model.findById(req.params.id);
        if(animal == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await animal.deleteOne();
            res.status(200).json(animal);
        }
    }

    async getAnimalTreatment(req: Request, res: Response) {
        const employee = await EmployeeModel.findOne({email: req.body.email})
        if(employee === null) {
            res.status(404).json({message: "Aucun employée ne possède cette email"})
        } else if(employee.password != req.body.password) {
            res.status(400).json({message: "Le mot de passe est incorrecte"})
        }
        // @ts-ignore
        if(employee.role !== 2) {
            res.status(400).json({message: "Vous devez être vétérinaire pour ajouter un traitement au carnet"})
        }
        const animal = await AnimalModel.findOne({_id: req.params.id})
            .catch(error => res.status(400).json({error}))
        // @ts-ignore
        if(animal.treatments == undefined) {
            await AnimalModel.updateOne({_id: req.params.id}, {treatments: req.body})
                .then(() => res.status(200).json({message: "Le traitement à bien été ajouté"}))
                .catch(error => res.status(400).json({error}));
        } else {
            // @ts-ignore
            animal.treatments.push(req.body);
            // @ts-ignore
            await AnimalModel.updateOne({_id: req.params.id}, {treatments: animal.treatments})
                .then(() => res.status(200).json({message: "Le traitement à bien été ajouté"}))
                .catch(error => res.status(400).json({error}));
        }
    }

    buildRoutes(): Router {
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