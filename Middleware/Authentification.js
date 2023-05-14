"use strict";
var jsonWebToken = require('jsonwebtoken');
// @ts-ignore
module.exports = function (req, res, next) {
    try {
        var token = req.headers.authorization;
        var decodedToken = jsonWebToken.decode(token, 'LA_CLEF_SECRETE_EST_TRES_SECRETE');
        var userId = decodedToken.userId;
        if ((req.body.userId == undefined) || (req.body.userId !== userId)) {
            throw 'User Id non valable';
        }
        else {
            next();
        }
    }
    catch (error) {
        // @ts-ignore
        res.status(401).json({ error: error | 'Erreur d\'authentification' });
    }
};
