# Demo: Node.js & the Onion Architecture powered by InversifyJS

You can learn about the onion architecture [here](https://dzone.com/articles/onion-architecture-is-interesting).

## Running the demo

> :warning: These instructions require MongoDB[MongoDB](https://docs.mongodb.com/manual/installation/) and [Node.js](https://nodejs.org/en/download/) to be installed in your environment.
>
> :warning: The commands`mongod` & `mongorestore` can be found at the MondoDB installation directory.

Clone the repository:

```sh
git clone https://github.com/stelltec/public-tech-demos.git
```

Move to the demo directory:

```sh
cd public-tech-demos/nodejs-madrid-meetup/demo3/
```

Run the MongoDB server:

```sh
mongod
```

Open the MongoDB demo backup:

```sh
tar -zxvf ./bin/demo.tar.gz
```

Create new database named `demo` using the backup:

```sh
mongorestore -d demo dump/demo/
```

Run the tests:

```sh
npm test
```

Run the app:

```sh
npm start
```

Open:

```sh
open http://localhost:8080/api/movies
```

## REST Services

The application exposes a few REST endpoints:

- HTTP GET `/api/actors`
- HTTP GET `/api/actors:id`
- HTTP GET `/api/directors`
- HTTP GET `/api/directors/:id`
- HTTP GET `/api/movies`
- HTTP GET `/api/movies/:id`
- HTTP GET `/api/search/:query`
- HTTP GET `/api/rent/:id`
- HTTP GET `/api/secured` (Requieres a valid `x-auth-token` header)

You can use the following code snippet to call the secured endpoint:

```js
fetch("http://localhost:8080/api/secure", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-auth-token": "SOME_FAKE_CREDENTIAL"
    },
}).then((r) => {
    if (r.status === 200) {
        r.json().then((j) => console.log(j));
    } else {
        console.log("ERROR", r.status);
    }
}).catch(e => console.log(e));
```

You can use the following code snippet to call the secured endpoint with an invalid `x-auth-token` header:

```js
fetch("http://localhost:8080/api/secure", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-auth-token": "SOME_WRONG_FAKE_CREDENTIAL"
    },
}).then((r) => {
    if (r.status === 200) {
        r.json().then((j) => console.log(j));
    } else {
        console.log("ERROR", r.status);
    }
}).catch(e => console.log(e));
```
