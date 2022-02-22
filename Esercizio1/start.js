"use strict";
exports.__esModule = true;
exports.obj2 = exports.gender = exports.role = void 0;
var role;
(function (role) {
    role["staff"] = "staff";
    role["student"] = "student";
    role["manager"] = "manager";
    role["admin"] = "admin";
})(role = exports.role || (exports.role = {}));
;
var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "female";
    gender["other"] = "other";
})(gender = exports.gender || (exports.gender = {}));
;
;
;
;
exports.obj2 = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '1995/12/14',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: role.staff,
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
        {
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
    ],
    gender: gender.male // Generi possibili: 'male', 'female', 'other'
};
