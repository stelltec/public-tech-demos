import * as express from "express";

export function reqMiddleware(req: express.Request, res: express.Response, next: () => void) {
    console.log(`
    ----------------------------------
    REQUEST MIDDLEWARE
    HTTP ${req.method} ${req.url}
    ----------------------------------
    `);
    next();
}

export function exceptionLoggerMiddleware(error: Error, req: express.Request, res: express.Response, next: () => void) {

    // Log exception
    console.error(`
    ----------------------------------
    EXCEPTION MIDDLEWARE
    HTTP ${req.method} ${req.url}
    ${error.message}
    ${error.stack}
    ----------------------------------
    `);

    // Hide stack from client for security reasons
    const e = { error: "Internal server error" };
    res.status(500).json(e);

}
