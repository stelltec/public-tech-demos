function findByProperty(property) {
    return (entities, value) => {
        return entities.filter(e => e[property] === value);
    }
}

const users1 = [
    { surname: "Smith", age: 28 },
    { surname: "Johnson", age: 55 },
    { surname: "Williams", age: 14 }
];

findByProperty("age")(users1, 28); // [{ surname: "Smith", age: 28 }]
findByProperty("surname")(users1, "Smith"); // [{ surname: "Smith", age: 28 }]

const users2 = [
    { surname: "Smith", age: "28" },
    { surname: "Johnson", age: "55" },
    { surname: "Williams", age: "14" }
];

findByProperty("age")(users2, 28); // []

const users3 = [
    { familyName: "Smith", age: 28 },
    { familyName: "Johnson", age: 55 },
    { familyName: "Williams", age: 14 }
];

findByProperty("surname")(users3, "Smith"); // []
