import "reflect-metadata";
import { bootstrap } from "./infrastructure/bootstrapping/bootstrap";
import { container } from "./infrastructure/ioc/ioc_container";
import { referenceDataIoCModule } from "./inversify.config";

async function runApp() {
    const app = await bootstrap(
        container,
        process.env.APP_PORT || 8080,
        process.env.DB_HOST || "localhost",
        process.env.DB_NAME || "demo",
        referenceDataIoCModule
    );
    return app;
}

(async () => {
    await runApp();
})();

export { runApp };
