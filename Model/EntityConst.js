"use strict";
// @ts-ignore
var entityConst = /** @class */ (function () {
    function entityConst() {
    }
    //Space type const here
    entityConst.SPACE_TYPE = function () {
        return {
            1: "Savane",
            2: "Montagne",
            3: "Océan",
            4: "Marécage",
            5: "Plaine",
            6: "Forêt"
        };
    };
    //Employee role const here
    entityConst.EMPLOYEE_ROLE = function () {
        return {
            1: "Agent d'entretien",
            2: "Vétérinaire",
            3: "Agent d'accueil",
            4: "Vendeur"
        };
    };
    //Pass const here
    entityConst.PASS_TYPE = function () {
        return {
            1: "PASS journée",
            2: "PASS Week-end",
            3: "PASS Annuel",
            4: "PASS 1daymonth",
            5: "PASS Escape game",
            6: "PASS Night"
        };
    };
    return entityConst;
}());
module.exports = entityConst;
