# Demo 3 @ Node.js Madrid Meetup

Este ejemplo es parte de una presentación que tuvo lugar en
el meetup de Node.js de Madrid. Las diapositivas de la presentación se puede encontrar [aquí](https://docs.google.com/presentation/d/12hK5z0wt4BlyOFhJBxVgQBTdvwTznKj3XttlvMwYgrY/present).

Este ejemplo demuestra cómo integrar InversifyJS con Express y como implementar aplicaciones que se adhieren a la arquitectura cebolla. Esta arquitectura de capas puede representarse en un diagrama como sigue:

![](../assets/onion.png)

La principal diferencia entre una arquitectura de n-capas tradicional y la arquitectura cebolla es la dirección de las dependencias entre capas.

En la arquitectura cebolla aplicamos el principio de inversión de dependencias. Los detalles de la implementación (infraestructura) depende de las abstracciones (dominio):

![](../assets/n-tier-vs-onion.png)

La siguiente lista describe el propósito de una de las capas
nn la arquitectura cebolla:

- **Servicios de dominio** - Servicios que existen para reforzar la integridad del dominio y facilitar la inserción, creación, eliminación y recuperación de datos. A menudo, son fachadas encima de repositorios, trabajando para esconder parte de la implementación de bajo nivel y para proporcionar una interfaz más en línea con el UL (lenguaje omnipresente).

- **Servicios de aplicacion** - Servicios que son específicos a la implementación de un modelo del dominio o que no tienen dependencia en el modelo del dominio. Un ejemplo clásico de esto sería el envío y el correo electrónico basado en un cambio de estado o una acción en el dominio. Esto suele ser un requisito de la propia aplicación, y es probable que no esté especificado por el modelo de dominio.

- **Servicios de Infraestructura** - Son servicios que hablan con recursos externos y no son parte del dominio principal del problema. Los ejemplos comunes que veo para esto son correo electrónico y registro.

Esta demostración implementa una API REST de una tienda en linea de películas como ejemplo. La estructura de las carpetas puede parecer un poco confusa de primeras por lo que es recomendable analizar el siguiente diagrama y compararlo con la estructura de directorios para entender la demostración con mayor facilidad:

![](../assets/onion-demo.png)

Las capas del exterior contienes más detalles (implementaciones) que las capas del interior (abstracciones). Las capas del exterior dependen de las capas del interior pero no al contrario.

Puedes obtener más información sobre la arquitectura cebolla [aquí](https://dzone.com/articles/onion-architecture-is-interesting).

## Como ejecutar este ejemplo

> :warning: **Importante** Para seguir las instrucciones a continuación, es necesario instalar [Docker](https://docs.docker.com/engine/installation/) y [Docker Compose](https://docs.docker.com/compose/install/).

Puedes utilizar los siguientes comandos para clonar y ejecutar este ejemplo:

```sh
git clone https://github.com/stelltec/public-tech-demos.git
```

```sh
cd public-tech-demos/nodejs-madrid-meetup/demo3/
```

```sh
docker-compose up
```

## Servicios REST

Podemos utilizar la siguiente llamada Ajax para invocar un serviceio REST:

```js
fetch("http://localhost:8080/api/ref/movies", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}).then((r) => {
    if (r.status === 200) {
        r.json().then((j) => console.log(j));
    } else {
        console.log("ERROR", r.status);
    }
}).catch(e => console.log(e));
```

Los siguiente servicios estan disponibles:

- HTTP GET `/api/ref/actors`
- HTTP GET `/api/ref/actors:id`
- HTTP GET `/api/ref/directors`
- HTTP GET `/api/ref/directors/:id`
- HTTP GET `/api/ref/movies`
- HTTP GET `/api/ref/movies/:id`
- HTTP GET `/api/ref/search/:query`
- HTTP GET `/api/ref/secured` (Requiere un header `x-auth-token` valido)

Podemos utilizar la siguiente llamada Ajax para invocar un serviceio REST con un
header:

```js
fetch("http://localhost:8080/api/ref/secure", {
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

```js
fetch("http://localhost:8080/api/ref/secure", {
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