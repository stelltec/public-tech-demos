import { injectable, inject } from "inversify";
import { TYPES } from "../constants/types";
import { Warrior, ThrowableWeapon } from "../interfaces/interfaces";

@injectable()
class Ninja implements Warrior {

    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._shuriken = shuriken;
    }

    public fight() { return this._shuriken.throw(); };

}

export { Ninja };
