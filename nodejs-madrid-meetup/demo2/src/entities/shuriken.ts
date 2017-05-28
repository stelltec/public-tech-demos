import { injectable } from "inversify";
import { ThrowableWeapon } from "../interfaces/interfaces";

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hits!";
    }
}

export { Shuriken };
