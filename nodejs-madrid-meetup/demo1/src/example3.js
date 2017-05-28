const filterByProperty = (property) => (entities, value) => {
    return entities.filter(e => e[property] === value);
}

const filterUserByAge = filterByProperty("age");
const filterUserBySurname = filterByProperty("surname");

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

filterUserByAge(users2, 28); // []

const users3 = [
    { familyName: "Smith", age: 28 },
    { familyName: "Johnson", age: 55 },
    { familyName: "Williams", age: 14 }
];

filterUserBySurname(users3, "Smith"); // []
