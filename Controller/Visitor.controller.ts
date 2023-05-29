import {Request, Response, Router} from "express";
import express from "express";
import {Visitor, VisitorModel} from "../Model";
import {SpaceModel} from "../Model";
import {ZooModel} from "../Model";
import {PassModel} from "../Model";
import {AttendanceHistoryModel} from "../Model";
import {Model} from "mongoose";

const authentication = require('../Middleware/Authentification');
const entityConstValidator = require('../Middleware/EntityConstValidator');

export class VisitorController {

    readonly path: string;
    readonly model: Model<Visitor>;

    constructor() {
        this.path = "/visitor";
        this.model = VisitorModel;
    }

    async getVisitors(req: Request, res: Response) {
        const visitors = await this.model.find();
        res.status(200).json(visitors);
    }

    async getVisitorById(req: Request, res: Response) {
        const visitor = await this.model.findById(req.params.id);
        res.status(200).json(visitor);
    }

    async createVisitor(req: Request, res: Response) {
        if(req.body.name == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            const visitor = new this.model(req.body);
            await visitor.save();
            res.status(200).json(visitor);
        }
    }

    async updateVisitor(req: Request, res: Response) {
        const visitor = await this.model.findById(req.params.id);
        if(visitor == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await visitor.updateOne(req.body);
            res.status(200).json(visitor);
        }
    }

    async deleteVisitor(req: Request, res: Response) {
        const visitor = await this.model.findById(req.params.id);
        if(visitor == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await visitor.deleteOne();
            res.status(200).json(visitor);
        }
    }

    async addPassToVisitor(req: Request, res: Response) {
        const isPassTypeValid = entityConstValidator.isValid("PASS_TYPE", req.body.type);
        if(req.body.type == undefined || !isPassTypeValid) {
            res.status(400).json({message: "Le type de pass saisie est invalide"});
        }
        if(req.body.authorizedSpaces == undefined) {
            res.status(400).json({message: "Veuillez renseigné la liste des espaces authorizés"});
        } else if(typeof req.body.authorizedSpaces !== "object") {
            res.status(400).json({message: "authoriedSpaces doit être un object, consulté la documentation"});
        }
        for(let i = 0; i < req.body.authorizedSpaces.length; i++) {
            let space = await SpaceModel.findOne({_id: req.body.authorizedSpaces[i]})
                .catch(error => res.status(404).json({message: "L'espace : " + req.body.authorizedSpaces[i] + " n'existe pas"}));
        }
        const pass = new PassModel({
            ...req.body
        });
        const visitor = await this.model.findOne({_id: req.params.id})
            .catch(error => res.status(400).json({error}));
        // @ts-ignore
        if(visitor.pass == undefined) {
            await VisitorModel.updateOne({_id: req.params.id}, {pass: pass})
                .then(() => res.status(200).json({message: "Le pass a bien été ajouté"}))
                .catch(error => res.status(400).json({error}));
        } else {
            await VisitorModel.updateOne({_id: req.params.id}, {pass: pass})
                .then(() => res.status(200).json({message: "Le pass a bien été ajouté, le précédent a été supprimé"}))
                .catch(error => res.status(400).json({error}));
        }
    }

    async moveVisitorToSpace(req: Request, res: Response) {
        const zoo = await ZooModel.find({is_open: true})
        const zooNight = await ZooModel.find({in_night: true})
        if (zoo.length == 0) {
            res.status(400).send("Le zoo est fermé, impossible pour un visiteur d'entrer.");
        } else {
            const visitor = await VisitorModel.findOne({_id: req.params.id});
            if (visitor === null) {
                res.status(404).json({message: "Le visiteur mentionné n'existe pas"});
            } else if (visitor.pass == null) {
                res.status(400).json({message: "Le visiteur ne possède pas de pass"});
            }

            // @ts-ignore
            const visitorAuthorizedSpaces = visitor.pass.authorizedSpaces;
            const destination = await SpaceModel.findOne({_id: req.params.space});
            if (destination === null) {
                res.status(404).json({message: "La destination mentionné n'existe pas"});
            }
            // @ts-ignore
            if (zooNight.length == 1 && visitor.pass.type != 6) {
                res.status(400).json({message: "Le visiteur n'est pas authorisé à se rendre au zoo sans pass night."});
            }
            if (!visitorAuthorizedSpaces.includes(req.params.space)) {
                res.status(400).json({message: "Le visiteur n'est pas authorisé à se rendre à cette endroit"});
            }
            // @ts-ignore
            if (visitor.pass.type === 5) {
                if (visitorAuthorizedSpaces[0] !== req.params.space) {
                    res.status(400).json({message: "Le visiteur n'est pas authorisé à se rendre à cette endroit"});
                } else {
                    // @ts-ignore
                    visitor.pass.authorizedSpaces.shift();
                    // @ts-ignore
                    await VisitorModel.updateOne({_id: req.params.id}, {pass: visitor.pass});
                    await VisitorModel.updateOne({_id: req.params.id}, {actualLocation: req.params.space})
                        .then(() => res.status(200).json({message: "Le visiteur vient de se rendre au lieu indiqué"}))
                        .catch(error => res.status(400).json({error}));
                }
            } else {
                await VisitorModel.updateOne({_id: req.params.id}, {actualLocation: req.params.space})
                    .then(() => res.status(200).json({message: "Le visiteur vient de se rendre au lieu indiqué"}))
                    .catch(error => res.status(400).json({error}));
            }
        }
        const currentDate = new Date().toISOString().slice(0, 10);
        const attendanceToHistorize = new AttendanceHistoryModel({
            spaceId: req.params.space,
            date: currentDate
        });
        await attendanceToHistorize.save();
    }

    buildRoutes(): Router {
        let router = express.Router();
        //CRUD
        router.get("/", authentication, this.getVisitors.bind(this));
        router.get("/:id", authentication, this.getVisitorById.bind(this));
        router.post("/", authentication, entityConstValidator, this.createVisitor.bind(this));
        router.put("/:id", authentication, entityConstValidator, this.updateVisitor.bind(this));
        router.delete("/:id", authentication, this.deleteVisitor.bind(this));
        //PASS
        router.post("/:id/pass", authentication, this.addPassToVisitor.bind(this));
        router.post("/:id/move/:space", authentication, this.moveVisitorToSpace.bind(this));
        //RETURN
        return router;
    }
}