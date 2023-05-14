// @ts-ignore
const entityConst = require('../Model/EntityConst');

class entityConstValidator {
    //function to verify if value is in range of acceptable value for a entity
    // @ts-ignore
    static isValid(entity, value) {
        let validValues;
        switch(entity) {
            case 'PASS_TYPE' :
                validValues = entityConst.PASS_TYPE();
                break;
            case 'EMPLOYEE_ROLE' :
                validValues = entityConst.EMPLOYEE_ROLE();
                break;
            case 'SPACE_TYPE' :
                validValues = entityConst.SPACE_TYPE();
                break;
            default :
                return "server internal error, unknox entity const";
        }
        // @ts-ignore
        return validValues.hasOwnProperty(value);
    }
}

module.exports = entityConstValidator;