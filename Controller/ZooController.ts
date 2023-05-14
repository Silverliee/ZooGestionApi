import {Request, Response, Router} from "express";
import * as express from "express";
import {Employee, EmployeeModel} from "../Model/Employee";
import {Visitor, VisitorModel} from "../Model/Visitor";
import {Zoo, ZooModel} from "../Model/Zoo";
import {Model} from "mongoose";

const authentication = require('../Middleware/Authentification');

export class ZooController {

        readonly path: string;
        readonly model: Model<Zoo>;

        constructor() {
            this.path = "/zoo";
            this.model = ZooModel;
        }

        async getAll(req: Request, res: Response): Promise<void> {
            const zoos = await this.model.find().exec();
            res.json(zoos);
        }

        async searchZoo(req: Request, res: Response): Promise<void> {
            const zoo = await this.model.find({
                name: req.params.name
            }).exec();
            res.json(zoo);
        }

        async deleteZoo(req: Request, res: Response): Promise<void> {
            const result = await this.model.deleteOne({_id : req.params.id}).exec();
            res.json(result);
        }

        async createZoo(req: Request, res: Response): Promise<void> {
            const result = await this.model.create({
                is_open: req.body.is_open,
                in_night: req.body.in_night
            });
            res.json(result);
        }

        async updateZoo(req: Request, res: Response): Promise<void> {
            const result = await this.model.updateOne({_id : req.params.id}, {
                is_open: req.body.is_open,
                in_night: req.body.in_night
            }).exec();
            res.json(result);
        }

        async getServiceAgent(req: Request, res: Response): Promise<void> {
            const serviceAgent =  await EmployeeModel.find({role: 1, is_working: true}).exec();
            res.json(serviceAgent);
        }

        async getVeterinary(req: Request, res: Response): Promise<void> {
            const veterinary =  await EmployeeModel.find({role: 2, is_working: true}).exec();
            res.json(veterinary);
        }

        async getReceptionist(req: Request, res: Response): Promise<void> {
            const receptionist =  await EmployeeModel.find({role: 3, is_working: true}).exec();
            res.json(receptionist);
        }

        async getSeller(req: Request, res: Response): Promise<void> {
            const seller =  await EmployeeModel.find({role: 4, is_working: true}).exec();
            res.json(seller);
        }

        async getVisitor(req: Request, res: Response): Promise<void> {
            const visitors =  await VisitorModel.find().where('actualLocation').ne(null);
            if (visitors.length == 0) {
                res.status(200).json({message: "Aucune visiteur ne fréquente le zoo en ce moment"});
            } else {
                res.status(200).json({message: visitors.length + " visiteur(s) fréquente(nt) le zoo en ce moment"});
            }
        }

        async isAbleToOpen(req: Request, res: Response): Promise<void> {
            const serviceAgents = await EmployeeModel.find({role: 1, is_working: true});
            const veterinaries = await EmployeeModel.find({role: 2, is_working: true});
            const receptions = await EmployeeModel.find({role: 3, is_working: true});
            const sellers = await EmployeeModel.find({role: 4, is_working: true});

            if (Object.entries(serviceAgents).length === 0 || Object.entries(sellers).length === 0 || Object.entries(veterinaries).length === 0 || Object.entries(receptions).length === 0) {
                res.status(400).send(false);
            } else {
                res.status(200).send(true);
            }
        }

        async isAbleToOpenDetails(req: Request, res: Response): Promise<void> {
            const serviceAgents = await EmployeeModel.find({role: 1, is_working: true})
            const sellers = await EmployeeModel.find({role: 4, is_working: true})
            const veterinaries = await EmployeeModel.find({role: 2, is_working: true})
            const receptions = await EmployeeModel.find({role: 3, is_working: true})

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
                    + "reception:" + receptions + "\n"
                );
            } else {
                res.status(400).send("Le zoo ne peut pas ouvrir, il manque:\n" + missingWork.toString());
            }
        }

        async openZoo(req: Request, res: Response): Promise<void> {
            const employee = await EmployeeModel.findOne({email: req.body.email})
            if (employee === null) {
                res.status(404).json({message: "Aucun employée ne possède cette email"})
            } else if (employee.password != req.body.password) {
                res.status(400).json({message: "Le mot de passe est incorrecte"})
            } else if (!employee.is_admin) {
                res.status(400).json({message: "Vous devez être administrateur pour ouvrir le zoo."})
            }

            const serviceAgents = await EmployeeModel.find({role: 1, is_working: true})
            const sellers = await EmployeeModel.find({role: 4, is_working: true})
            const veterinaries = await EmployeeModel.find({role: 2, is_working: true})
            const receptions = await EmployeeModel.find({role: 3, is_working: true})
            const zoo = await ZooModel.find({is_open: true})

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
            } else {
                if (missingWork.length > 0) {
                    res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                } else {
                    await ZooModel.updateMany({}, {is_open: true})
                    res.status(200).send("Le zoo est maintenant ouvert aux visiteurs!\nListe des employés présents:\n"
                        + "agent(s) de service(s):" + serviceAgents + "\n"
                        + "vendeur(s):" + sellers + "\n"
                        + "vétérinaire(s):" + veterinaries + "\n"
                        + "reception:" + receptions + "\n"
                    );
                }
            }
        }

        async closeZoo(req: Request, res: Response): Promise<void> {
            const employee = await EmployeeModel.findOne({email: req.body.email})
            if (employee === null) {
                res.status(404).json({message: "Aucun employée ne possède cette email"})
            } else if (employee.password != req.body.password) {
                res.status(400).json({message: "Le mot de passe est incorrecte"})
            } else if (!employee.is_admin) {
                res.status(400).json({message: "Vous devez être administrateur pour fermer le zoo."})
            }

            const zoo = await ZooModel.find({is_open: true})
            if (zoo.length == 0) {
                res.status(400).send("Le zoo est déjà fermé!");
            } else {
                await ZooModel.updateMany({}, {is_open: false, in_night: false})
                res.status(200).send("Le zoo est maintenant fermé!");
            }
        }

        async openNight(req: Request, res: Response): Promise<void> {
            const employee = await EmployeeModel.findOne({email: req.body.email})
            if (employee === null) {
                res.status(404).json({message: "Aucun employée ne possède cette email"})
            } else if (employee.password != req.body.password) {
                res.status(400).json({message: "Le mot de passe est incorrecte"})
            } else if (!employee.is_admin) {
                res.status(400).json({message: "Vous devez être administrateur pour ouvrir le zoo de nuit."})
            }

            const serviceAgents = await EmployeeModel.find({role: 1, is_working: true})
            const sellers = await EmployeeModel.find({role: 4, is_working: true})
            const veterinaries = await EmployeeModel.find({role: 2, is_working: true})
            const receptions = await EmployeeModel.find({role: 3, is_working: true})
            const zoo = await ZooModel.find({is_open: true})

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
            } else {
                if (missingWork.length > 0) {
                    res.status(400).send("Le zoo ne peut pas ouvrir, il manque des employés!\n" + missingWork);
                } else {
                    await ZooModel.updateMany({}, {is_open: true, in_night: true})
                    res.status(200).send("Le zoo est maintenant ouvert aux visiteurs pour la night!\nListe des employés présents:\n"
                        + "agent(s) de service(s):" + serviceAgents + "\n"
                        + "vendeur(s):" + sellers + "\n"
                        + "vétérinaire(s):" + veterinaries + "\n"
                        + "reception:" + receptions + "\n"
                    );
                }
            }
        }

        buildRoutes(): Router {
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