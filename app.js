// Les dépendances ici
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const spaceController = require('./Controller/SpaceController');
const employeeController = require('./Controller/EmployeeController');
const animalController = require('./Controller/AnimalController');
const zooController = require('./Controller/ZooController');
const visitorController = require('./Controller/VisitorController');


//Connexion à la base de données (c'est un cluster mongodb atlas)
mongoose.connect('mongodb+srv://mohamed:414498200@silver-cluster.yegdt.mongodb.net/PlanodeZooApi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à mon cluster mongodb réussie !'))
    .catch(() => console.log('la connexion au cluster à échouée :('));

//configuration de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configuration des headers pour éviter les erreurs CORS( Cross-Origin Resource Sharing, je sais pas ce que c'est mais je sais que c'est important)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

// Les routes ici
app.use('/spaces', spaceController);
app.use('/employees', employeeController);
app.use('/animals', animalController);
app.use('/zoo', zooController);
app.use('/visitors', visitorController);

module.exports = app;