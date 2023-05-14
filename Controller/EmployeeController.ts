import {Request, Response, Router} from "express";
import * as express from "express";
import {Employee, EmployeeModel} from "../Model/Employee";
import {Model} from "mongoose";
import {Space, SpaceModel} from "../Model/Space";

const authentication = require('../Middleware/Authentification');
const jwt = require('jsonwebtoken');

export class EmployeeController {

    readonly path: string;
    readonly model: Model<Employee>;

    constructor() {
        this.path = "/employee";
        this.model = EmployeeModel;
    }

    async getEmployees(req: Request, res: Response) {
        const employees = await this.model.find();
        res.status(200).json(employees);
    }

    async getEmployeeById(req: Request, res: Response) {
        const employee = await this.model.findById(req.params.id);
        res.status(200).json(employee);
    }

    async createEmployee(req: Request, res: Response) {
        if(req.body.name == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            const employee = new this.model(req.body);
            await employee.save();
            res.status(200).json(employee);
        }
    }

    async updateEmployee(req: Request, res: Response) {
        const employee = await this.model.findById(req.params.id);
        if(employee == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await employee.updateOne(req.body);
            res.status(200).json(employee);
        }
    }

    async deleteEmployee(req: Request, res: Response) {
        const employee = await this.model.findById(req.params.id);
        if(employee == null) {
            res.status(400).json({message: "Le contenue de votre requête est invalide"});
        } else {
            await employee.deleteOne();
            res.status(200).json(employee);
        }
    }

    async login(req: Request, res: Response) {
        const employee = await EmployeeModel.findOne({email: req.body.email})
        if(employee === null) {
            res.status(404).json({message: "Aucun employée ne possède cette email"})
        } else if(employee.password != req.body.password) {
            res.status(400).json({message: "Le mot de passe est incorrecte"})
        } else if(req.body.on_maintain === null) {
            res.status(422).json({message: "La valeur fournie n'est pas correcte "})
        } else {
            const token = jwt.sign({userId: employee._id}, 'CLEF_SECRETE_DE_LA_MORT_QUI_TUE', {expiresIn: '24h'});
            res.status(200).json({employee: employee._id, token: token});
        }
    }

    async employeeStartWork(req: Request, res: Response) {
        const employee = EmployeeModel.findOne({_id: req.params.id});
        if(employee === null) {
            res.status(404).json({message: "Cette employée n'existe pas"});
        } else {
            await EmployeeModel.updateOne({_id: req.params.id}, {is_working: true})
                .then(() => res.status(200).json({message: "L'employée commence son service"}))
                .catch(error => res.status(400).json({error}));
        }
    }

    async employeeEndWork(req: Request, res: Response) {
        const employee = EmployeeModel.findOne({_id: req.params.id});
        if(employee === null) {
            res.status(404).json({message: "Cette employée n'existe pas"});
        } else {
            await EmployeeModel.updateOne({_id: req.params.id}, {is_working: false})
                .then(() => res.status(200).json({message: "L'employée termine son service"}))
                .catch(error => res.status(400).json({error}));
        }
    }

    buildRoutes(): Router {
        const router = express.Router();
        router.get(this.path, authentication, this.getEmployees.bind(this));
        router.get(this.path + "/:id", authentication, this.getEmployeeById.bind(this));
        router.post(this.path, authentication, this.createEmployee.bind(this));
        router.put(this.path + "/:id", authentication, this.updateEmployee.bind(this));
        router.delete(this.path + "/:id", authentication, this.deleteEmployee.bind(this));
        router.post(this.path + "/login", this.login.bind(this));
        router.put(this.path + "/start/:id", authentication, this.employeeStartWork.bind(this));
        router.put(this.path + "/end/:id", authentication, this.employeeEndWork.bind(this));
        return router;
    }
}