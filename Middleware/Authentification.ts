const jsonWebToken = require('jsonwebtoken');

// @ts-ignore
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jsonWebToken.decode(token, 'LA_CLEF_SECRETE_EST_TRES_SECRETE');
        const userId = decodedToken.userId;
        if((req.body.userId == undefined) || (req.body.userId !== userId)) {
            throw 'User Id non valable';
        } else {
            next();
        }
    } catch(error) {
        // @ts-ignore
        res.status(401).json({error: error | 'Erreur d\'authentification'})
    }
};