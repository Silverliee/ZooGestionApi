class entityConst {
    //Space type const here
    static SPACE_TYPE() {
        return {
            1: "Savane",
            2: "Montagne",
            3: "Océan",
            4: "Marécage",
            5: "Plaine",
            6: "Forêt"
        }
    }

    //Employee role const here
    static EMPLOYEE_ROLE() {
        return {
            1: "Agent d'entretien",
            2: "Vétérinaire",
            3: "Agent d'accueil",
            4: "Vendeur"
        }
    }

    //Pass const here
    static PASS_TYPE() {
        return {
            1: "PASS journée",
            2: "PASS Week-end",
            3: "PASS Annuel",
            4: "PASS 1daymonth",
            5: "PASS Escape game",
            6: "PASS Night"
        }
    }
}

module.exports = entityConst;