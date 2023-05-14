"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Les dépendances ici
var mongoose = __importStar(require("mongoose"));
var express = __importStar(require("express"));
var Controller_1 = require("./Controller");
var Controller_2 = require("./Controller");
var Controller_3 = require("./Controller");
var Controller_4 = require("./Controller");
var Controller_5 = require("./Controller");
var http = require("http");
//Connexion à la base de données (c'est un cluster mongodb atlas)
mongoose.connect('mongodb+srv://mohamed:414498200@silver-cluster.yegdt.mongodb.net/PlanodeZooApi?retryWrites=true&w=majority', {})
    .then(function () { return console.log('Connexion à mon cluster mongodb réussie !'); })
    .catch(function () { return console.log('la connexion au cluster à échouée :('); });
//configuration des headers pour éviter les erreurs CORS( Cross-Origin Resource Sharing, je sais pas ce que c'est mais je sais que c'est important)
// @ts-ignore
var app = express();
// Les routes ici
var animalController = new Controller_3.AnimalController();
var employeeController = new Controller_2.EmployeeController();
var zooController = new Controller_4.ZooController();
var visitorController = new Controller_5.VisitorController();
var spaceController = new Controller_1.SpaceController();
app.use(animalController.path, animalController.buildRoutes());
app.use(employeeController.path, employeeController.buildRoutes());
app.use(spaceController.path, spaceController.buildRoutes());
app.use(zooController.path, zooController.buildRoutes());
app.use(visitorController.path, visitorController.buildRoutes());
// @ts-ignore
var normalizePort = function (val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
// @ts-ignore
var onError = function (error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var addr;
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch (error.code) {
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
var port = normalizePort(8080);
console.log("listening the port : " + port);
var server = http.createServer(app);
server.on("error", onError);
server.listen(port);
