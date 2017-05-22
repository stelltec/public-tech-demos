import "reflect-metadata";
import { bootstrap } from "./infrastructure/bootstrapping/bootstrap";
import { referenceDataIoCModule } from "./infrastructure/ioc/modules";

// Start app
(async () => {
    await bootstrap(
        process.env.APP_PORT || 8080,
        process.env.DB_HOST || "localhost",
        process.env.DB_NAME || "demo",
        referenceDataIoCModule
    );
})();
