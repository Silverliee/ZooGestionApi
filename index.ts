// Les dépendances ici
const mongoose = require("mongoose");
const express = require('express');
const { SpaceController, EmployeeController, AnimalController, ZooController, VisitorController } = require("./Controller");

//Connexion à la base de données (c'est un cluster mongodb atlas)
mongoose.connect('mongodb+srv://mohamed:414498200@silver-cluster.yegdt.mongodb.net/PlanodeZooApi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connexion à mon cluster mongodb réussie !'))
    .catch(() => console.log('La connexion au cluster a échoué :('));


// Les routes ici
const animalController = new AnimalController();
const employeeController = new EmployeeController();
const zooController = new ZooController();
const visitorController = new VisitorController();
const spaceController = new SpaceController();

// Création du serveur
let app = express();
app.use(animalController.path, animalController.buildRoutes());
app.use(employeeController.path, employeeController.buildRoutes());
app.use(spaceController.path, spaceController.buildRoutes());
app.use(zooController.path, zooController.buildRoutes());
app.use(visitorController.path, visitorController.buildRoutes());

// Lancement du serveur
const port = 8080;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});