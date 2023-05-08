const express = require('express');
const router = express.Router();
const employeeModel = require('../Model/Employee');
const visitorModel = require('../Model/Visitor');
const zooModel = require('../Model/Zoo');
const authentication = require('../Middleware/Authentification');

// Post Request Here
router.post('/', async (req, res) => {
    const zoo = new zooModel({
        is_open: req.body.is_open
    });
    await zoo.save()
        .then(() => res.status(201).json({message: "Le zoo a été crée !"}))
        .catch(error => res.status(400).json({error}));
});

// Get Request Here
router.get('/receptions/working', authentication, async (req, res) => {
    await employeeModel.find({role: 3, is_working: true})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
});

router.get('/veterinaries/working', authentication, async (req, res) => {
    await employeeModel.find({role: 2, is_working: true})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
});

router.get('/sellers/working', authentication, async (req, res) => {
    await employeeModel.find({role: 4, is_working: true})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
});

router.get('/serviceagents/working', authentication, async (req, res) => {
    await employeeModel.find({role: 1, is_working: true})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}));
});
router.get('/attendance', authentication, async (req, res) => {
    const visitors = await visitorModel.find().where('actualLocation').ne(null);
    if (visitors.length == 0) {
        res.status(200).json({message: "Aucune visiteur ne fréquente le zoo en ce moment"});
    } else {
        res.status(200).json({message: visitors.length + " visiteur(s) fréquente(nt) le zoo en ce moment"});
    }
});

router.get('/ableToOpen', authentication, async (req, res) => {
    const serviceAgents = await employeeModel.find({role: 1, is_working: true})
    const sellers = await employeeModel.find({role: 4, is_working: true})
    const veterinaries = await employeeModel.find({role: 2, is_working: true})
    const receptions = await employeeModel.find({role: 3, is_working: true})

    let missingWork = new Array();
    if (Object.entries(serviceAgents).length === 0) {
        missingWork.push("1 agent d'entretien");
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
            + "agent(s) d'entretien(s):" + serviceAgents + "\n"
            + "vendeur(s):" + sellers + "\n"
            + "vétérinaire(s):" + veterinaries + "\n"
            + "reception:" + receptions + "\n"
        );
    } else {
        res.status(400).send("Le zoo ne peut pas ouvrir, il manque:\n" + missingWork.toString());
    }
});

router.post('/open', authentication, async (req, res) => {
    const employee = await employeeModel.findOne({email: req.body.email})
    if (employee === null) {
        res.status(404).json({message: "Aucun employée ne possède cette email"})
    } else if (employee.password != req.body.password) {
        res.status(400).json({message: "Le mot de passe est incorrecte"})
    } else if (!employee.is_admin) {
        res.status(400).json({message: "Vous devez être administrateur pour ouvrir le zoo."})
    }

    const serviceAgents = await employeeModel.find({role: 1, is_working: true})
    const sellers = await employeeModel.find({role: 4, is_working: true})
    const veterinaries = await employeeModel.find({role: 2, is_working: true})
    const receptions = await employeeModel.find({role: 3, is_working: true})
    const zoo = await zooModel.find({is_open: true})

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
            await zooModel.updateMany({}, {is_open: true})
            res.status(200).send("Le zoo est maintenant ouvert aux visiteurs!\nListe des employés présents:\n"
                + "agent(s) de service(s):" + serviceAgents + "\n"
                + "vendeur(s):" + sellers + "\n"
                + "vétérinaire(s):" + veterinaries + "\n"
                + "reception:" + receptions + "\n"
            );
        }
    }
});

router.post('/close', authentication, async (req, res) => {
    const employee = await employeeModel.findOne({email: req.body.email})
    if (employee === null) {
        res.status(404).json({message: "Aucun employée ne possède cette email"})
    } else if (employee.password != req.body.password) {
        res.status(400).json({message: "Le mot de passe est incorrecte"})
    } else if (!employee.is_admin) {
        res.status(400).json({message: "Vous devez être administrateur pour fermer le zoo."})
    }

    const zoo = await zooModel.find({is_open: true})
    if (zoo.length == 0) {
        res.status(400).send("Le zoo est déjà fermé!");
    } else {
        await zooModel.updateMany({}, {is_open: false, in_night: false})
        res.status(200).send("Le zoo est maintenant fermé!");
    }
});

router.post('/openNight', authentication, async (req, res) => {
    const employee = await employeeModel.findOne({email: req.body.email})
    if (employee === null) {
        res.status(404).json({message: "Aucun employée ne possède cette email"})
    } else if (employee.password != req.body.password) {
        res.status(400).json({message: "Le mot de passe est incorrecte"})
    } else if (!employee.is_admin) {
        res.status(400).json({message: "Vous devez être administrateur pour ouvrir le zoo de nuit."})
    }

    const serviceAgents = await employeeModel.find({role: 1, is_working: true})
    const sellers = await employeeModel.find({role: 4, is_working: true})
    const veterinaries = await employeeModel.find({role: 2, is_working: true})
    const receptions = await employeeModel.find({role: 3, is_working: true})
    const zoo = await zooModel.find({is_open: true})

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
            await zooModel.updateMany({}, {is_open: true, in_night: true})
            res.status(200).send("Le zoo est maintenant ouvert aux visiteurs pour la night!\nListe des employés présents:\n"
                + "agent(s) de service(s):" + serviceAgents + "\n"
                + "vendeur(s):" + sellers + "\n"
                + "vétérinaire(s):" + veterinaries + "\n"
                + "reception:" + receptions + "\n"
            );
        }
    }
});
module.exports = router;