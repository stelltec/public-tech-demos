// Example of lookup type T[K]
// Learn more @ https://blog.mariusschulz.com/2017/01/06/typescript-2-1-keyof-and-lookup-types
const filterByProperty = <T, K extends keyof T>(property: K) => (entities: T[], value: T[K]) => {
    return entities.filter(e => e[property] === value);
}

interface User {
    surname: string;
    age: number;
}

const filterUserByAge = filterByProperty<User, "age">("age");
const filterUserBySurname = filterByProperty<User, "surname">("surname");

const users1 = [
    { surname: "Smith", age: 28 },
    { surname: "Johnson", age: 55 },
    { surname: "Williams", age: 14 }
];

filterUserByAge(users1, 28); // [{ surname: "Smith", age: 28 }]
filterUserBySurname(users1, "Smith"); // [{ surname: "Smith", age: 28 }]

const users2 = [
    { surname: "Smith", age: "28" },
    { surname: "Johnson", age: "55" },
    { surname: "Williams", age: "14" }
];

// Error: Types of property 'age' are incompatible. Type 'string' is not assignable to type 'number'
filterUserByAge(users2, 28);

const users3 = [
    { familyName: "Smith", age: 28 },
    { familyName: "Johnson", age: 55 },
    { familyName: "Williams", age: 14 }
];

// Error: Property 'surname' is missing in type '{ familyName: string; age: number; }'.
filterUserBySurname(users3, "Smith");

var a = null;
export { a };
