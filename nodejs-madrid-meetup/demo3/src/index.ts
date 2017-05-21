import "reflect-metadata";
import { bootstrap } from "./framework/bootstrap";

// Import apps
import { referenceAppModule } from "./applications/reference_app";
import { ticketingAppModule } from "./applications/ticketing_app";

// Start app
(async () => {
    await bootstrap(
        process.env.APP_PORT || 8080,
        process.env.DB_HOST || "localhost",
        process.env.DB_NAME || "demo",
        referenceAppModule,
        ticketingAppModule
    );
})();
