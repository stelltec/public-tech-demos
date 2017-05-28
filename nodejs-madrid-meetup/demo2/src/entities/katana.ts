import { injectable } from "inversify";
import { Weapon } from "../interfaces/interfaces";

@injectable()
class Katana implements Weapon {
    public hit() {
        return "cuts!";
    }
}

export { Katana };
