import { injectable, inject } from "inversify";
import { TYPES } from "../constants/types";
import { Warrior, Weapon } from "../interfaces/interfaces";

@injectable()
class Samurai implements Warrior {

    private _katana: Weapon;

    public constructor(
        @inject(TYPES.Weapon) katana: Weapon
    ) {
        this._katana = katana;
    }

    public fight() { return this._katana.hit(); };

}

export { Samurai };
