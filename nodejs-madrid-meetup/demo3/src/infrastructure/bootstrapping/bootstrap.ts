import { Container, ContainerModule } from "inversify";
import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import { reqMiddleware, exceptionLoggerMiddleware } from "./middleware";
import { DbClient, getDatabaseClient } from "../data_access/db_client";
import { TYPES } from "../../domain/constants/types";

export async function bootstrap(
    container: Container,
    appPort: number,
    dbHost: string,
    dbName: string,
    ...modules: ContainerModule[]
) {

    if (container.isBound(TYPES.App) === false) {

        const dbClient = await getDatabaseClient(dbHost, dbName);
        container.bind<DbClient>(TYPES.DbClient).toConstantValue(dbClient);
        container.load(...modules);

        // Configure express server
        const server = new InversifyExpressServer(container);

        server.setConfig((app) => {

            // Disable default cache
            app.set('etag', false);

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

        container.bind<express.Application>(TYPES.App).toConstantValue(app);

        return app;
    } else {
        return container.get<express.Application>(TYPES.App);
    }

}
