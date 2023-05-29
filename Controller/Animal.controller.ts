import { Request, Response, Router } from "express";
import express from "express";
import { EmployeeModel } from "../Model";
import { Animal, AnimalModel } from "../Model";
import { Model } from "mongoose";

const authentication = require('../Middleware/Authentification');

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
        if (req.body.name == null) {
            res.status(400).json({ message: "Le contenu de votre requête est invalide" });
        } else {
            const animal = new this.model(req.body);
            await animal.save();
            res.status(200).json(animal);
        }
    }

    async updateAnimal(req: Request, res: Response) {
        const animal = await this.model.findById(req.params.id);
        if (animal == null) {
            res.status(400).json({ message: "Le contenu de votre requête est invalide" });
        } else {
            await animal.updateOne(req.body);
            res.status(200).json(animal);
        }
    }

    async deleteAnimal(req: Request, res: Response) {
        const animal = await this.model.findById(req.params.id);
        if (animal == null) {
            res.status(400).json({ message: "Le contenu de votre requête est invalide" });
        } else {
            await animal.deleteOne();
            res.status(200).json(animal);
        }
    }

    async getAnimalTreatment(req: Request, res: Response) {
        const employee = await EmployeeModel.findOne({ email: req.body.email });
        if (employee === null) {
            res.status(404).json({ message: "Aucun employé ne possède cet email" });
        } else if (employee.password !== req.body.password) {
            res.status(400).json({ message: "Le mot de passe est incorrect" });
        } else if (employee.role !== 2) {
            res.status(400).json({ message: "Vous devez être vétérinaire pour ajouter un traitement au carnet" });
        } else {
            const animal = await AnimalModel.findOne({ _id: req.params.id });
            if (animal === null) {
                res.status(400).json({ message: "L'animal avec cet ID n'existe pas" });
            } else {
                const treatments = animal.treatments || [];
                treatments.push(req.body);
                await AnimalModel.updateOne({ _id: req.params.id }, { treatments });
                res.status(200).json({ message: "Le traitement a bien été ajouté" });
            }
        }
    }

    buildRoutes(): Router {
        const router = express.Router();
        //CRUD
        router.get("/", this.getAnimals.bind(this));
        router.get("/:id", authentication, this.getAnimalById.bind(this));
        router.post("/", authentication, this.createAnimal.bind(this));
        router.put("/:id", authentication, this.updateAnimal.bind(this));
        router.delete("/:id", authentication, this.deleteAnimal.bind(this));
        //TREATMENT
        router.post("/:id/treatment", authentication, this.getAnimalTreatment.bind(this));
        //RETURN
        return router;
    }
}