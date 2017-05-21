import { interfaces, inject } from "inversify";
import { TYPE } from "inversify-express-utils";

// Types
export const TYPES = {
    DbClient: Symbol("DbClient")
};

// Decorators
export const dbClient = inject(TYPES.DbClient);

// Utils
export function registerController<T>(
    bind: interfaces.Bind,
    constructor: interfaces.Newable<T>
) {
    bind<T>(TYPE.Controller).to(constructor);
}
