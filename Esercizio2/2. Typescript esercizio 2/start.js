"use strict";
exports.__esModule = true;
var start_1 = require("C:/Users/marta/Desktop/Angular/Typescript1/Esercizio1/start");
var Person = /** @class */ (function () {
    function Person(obj2) {
        this.name = obj2.name;
        this.surname = obj2.surname;
    }
    Person.prototype.fullName = function () {
        console.log("".concat(this.name, " ").concat(this.surname));
    };
    ;
    return Person;
}());
;
var name = new Person(start_1.obj2);
name.fullName();
