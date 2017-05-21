import { Container, ContainerModule } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import { DbClient, getDatabaseClient } from "./database";
import { TYPES } from "./ioc";
import { reqMiddleware, exceptionLoggerMiddleware } from "./middleware";

export async function bootstrap(
    appPort: number,
    dbHost: string,
    dbName: string,
    ...modules: ContainerModule[]
) {

    // Configure database client
    const dbClient = await getDatabaseClient(dbHost, dbName);

    // Configure IoC container
    const container = new Container();
    container.bind<DbClient>(TYPES.DbClient).toConstantValue(dbClient);
    container.load(...modules);

    // Configure express server
    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {

        // Configure requests body parsing
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        // Adds some decurity defaults
        app.use(helmet());

        // Log all requets that hit the server
        app.use(reqMiddleware);

    });

    server.setErrorConfig((app) => {
      // Catch and log all exceptions
      app.use(exceptionLoggerMiddleware);
    });

    const app = server.build();

    // Run express server
    console.log(`Application listening on port ${appPort}...`);
    app.listen(appPort);

}
