import "reflect-metadata";
import { someAppModule } from "./applications/some_app";
import { bootstrap } from "./framework/bootstrap";

bootstrap(8080, someAppModule);
