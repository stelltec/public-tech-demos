import { interfaces } from "inversify";
import { TYPE } from "inversify-express-utils";

// Decorators

// Utils
export function registerController<T>(
    bind: interfaces.Bind,
    constructor: interfaces.Newable<T>
) {
    bind<T>(TYPE.Controller)
        .to(constructor)
        .whenTargetNamed(constructor.name);
}
