import { injectable } from "inversify";
import { Controller, Get } from "inversify-express-utils";
import { authMiddleware } from "../middleware/auth_middleware";

// This is an example of a controller protected by the auth middleware

@injectable()
@Controller("/api/secure", authMiddleware({ role: "admin" }))
export class SecureController {

    @Get("/")
    public async get() {
        return Promise.resolve(["This", "data", "is", "secure!"]);
    }

}
