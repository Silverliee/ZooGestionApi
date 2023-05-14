// Les dépendances ici
import * as mongoose from "mongoose";
import * as express from "express";
import {SpaceController} from "./Controller";
import {EmployeeController} from "./Controller";
import {AnimalController} from "./Controller";
import {ZooController} from "./Controller";
import {VisitorController} from "./Controller";

const http = require("http");


//Connexion à la base de données (c'est un cluster mongodb atlas)
mongoose.connect('mongodb+srv://mohamed:414498200@silver-cluster.yegdt.mongodb.net/PlanodeZooApi?retryWrites=true&w=majority',
    {})
    .then(() => console.log('Connexion à mon cluster mongodb réussie !'))
    .catch(() => console.log('la connexion au cluster à échouée :('));

//configuration des headers pour éviter les erreurs CORS( Cross-Origin Resource Sharing, je sais pas ce que c'est mais je sais que c'est important)
// @ts-ignore
const app = express();
// Les routes ici
const animalController = new AnimalController();
const employeeController = new EmployeeController();
const zooController = new ZooController();
const visitorController = new VisitorController();
const spaceController = new SpaceController();

app.use(animalController.path, animalController.buildRoutes());
app.use(employeeController.path, employeeController.buildRoutes());
app.use(spaceController.path, spaceController.buildRoutes());
app.use(zooController.path, zooController.buildRoutes());
app.use(visitorController.path, visitorController.buildRoutes());


// @ts-ignore
const normalizePort = val => {
    const port = parseInt(val, 10);
    if(isNaN(port)) {
        // named pipe
        return val;
    }
    if(port >= 0) {
        // port number
        return port;
    }
    return false;
};

// @ts-ignore
const onError = error => {
    if(error.syscall !== "listen") {
        throw error;
    }
    let addr;
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch(error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const port = normalizePort(8080);
console.log("listening the port : " + port);
const server = http.createServer(app);
server.on("error", onError);
server.listen(port);