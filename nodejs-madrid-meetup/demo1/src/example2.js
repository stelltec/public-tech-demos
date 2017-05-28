function filterUserBySurname(users, surname) {
    return users.filter(u => u.surname === surname);
}

var users1 = [
    { surname: "Smith", age: 28 },
    { surname: "Johnson", age: 55 },
    { surname: "Williams", age: 14 }
];

filterUserBySurname(users1, "Smith"); // [{ surname: "Smith", age: 28 }]

var users2 = [
    { familyName: "Smith", age: 28 },
    { familyName: "Johnson", age: 55 },
    { familyName: "Williams", age: 14 }
];

filterUserBySurname(users2, "Smith"); // []
