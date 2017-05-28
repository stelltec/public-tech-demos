namespace example2 {

    interface User {
        surname: string;
        age: number;
    }

    function findUserBySurname(users: User[], surname: string) {
        return users.filter(u => u.surname === surname);
    }

    const users1 = [
        { surname: "Smith", age: 28 },
        { surname: "Johnson", age: 55 },
        { surname: "Williams", age: 14 }
    ];

    findUserBySurname(users1, "Smith"); //  [{ surname: "Smith", age: 28 }]

    /*
    
    Error: Property 'surname' is missing in type '{ familyName: string; age: string; }'

    const users2 = [
        { familyName: "Smith", age: 28 },
        { familyName: "Johnson", age: 55 },
        { familyName: "Williams", age: 14 }
    ];

    findUserBySurname(users2, "Smith");

    */

}