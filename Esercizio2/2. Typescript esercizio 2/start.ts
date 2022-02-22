import {
    Companies,
    gender,
    location,
    Obj,
    obj2,
    role,
} from "C:/Users/marta/Desktop/Angular/Typescript1/Esercizio1/start";

class Person implements Obj {
    name: string;
    surname: string;
    id: number;
    age: number;
    dateOfBirth: string;
    address: location;
    role: role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: gender;

    constructor (obj2:Obj) {
        this.name = obj2.name;
        this.surname = obj2.surname;
    }

    fullName() {
        console.log(`${this.name} ${this.surname}`)
    };
};

const name = new Person(obj2);
name.fullName();






