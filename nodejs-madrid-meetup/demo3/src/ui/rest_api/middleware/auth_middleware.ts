import * as express from "express";
import { Container } from "inversify";
import { AccountRepository } from "../../../domain/interfaces/repositories";
import { TYPES } from "../../../domain/constants/types";
import { container } from "../../../infrastructure/ioc/ioc_container";

async function getEmailFromToken(token: string) {
    // This is a fake implementation to simplify this example
    // in real life you want to use something like JWT
    // https://github.com/auth0/node-jsonwebtoken
    return new Promise<string|null>((resolve, reject) => {
        if (token === "SOME_VALID_DEMO_CREDENTIAL") {
            resolve("test.test@test.com");
        } else {
            resolve(null);
        }
    });
}

function authMiddlewareFactory(container: Container) {
    return (config: { role: string }) => {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => {

            const accountRepository = container.get<AccountRepository>(TYPES.AccountRepository);

            (async () => {

                // get email using auth token
                const token = req.headers["x-auth-token"];
                const email = await getEmailFromToken(token);

                if (email !== null) {

                    // find user with matching email
                    const matched = await accountRepository.findManyByQuery({ email: email });

                    // Check user has required role
                    if (matched.length === 1 && matched[0].roles.indexOf(config.role) !== -1 ) {
                        next();
                    } else {
                        res.status(403).end("Forbidden");
                    }

                } else {
                    res.status(401).end("Unauthorized");
                }

            })();
        };
    };
}

const authMiddleware = authMiddlewareFactory(container);

export { authMiddleware };
