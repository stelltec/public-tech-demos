import { Container, ContainerModule } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";

export function bootstrap(
    port: number,
    ...modules: ContainerModule[]
) {

    // Configure IoC container

    const container = new Container();
    container.bind<Container>("_self").toConstantValue(container);
    container.load(...modules);

    // Configure express server

    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
        app.use(helmet());
    });

    const app = server.build();

    // Run express server

    console.log(`Application listening on port ${port}...`);
    app.listen(port);

}
