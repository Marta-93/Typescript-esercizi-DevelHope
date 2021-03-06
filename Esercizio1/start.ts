export enum role {staff = 'staff', student = 'student', manager = 'manager', admin ='admin'};
export enum gender {male = 'male', female ='female', other = 'other'};

export interface location {
    city: string;
    street: string;
    postalCode: string;
};

export interface Companies {
    id: number;
    name: string;
    description: string;
    location: location;
};

export interface Obj {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: location;
    role: role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: gender
};

export const obj2: Obj = {
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
    role: role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
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
    gender: gender.male// Generi possibili: 'male', 'female', 'other'
}
