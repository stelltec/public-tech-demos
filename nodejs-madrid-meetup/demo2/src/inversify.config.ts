import { Container, ContainerModule } from "inversify";
import { TYPES } from "./constants/types";
import { Ninja } from "./entities/ninja";
import { Samurai } from "./entities/samurai";
import { Katana } from "./entities/katana";
import { Shuriken } from "./entities/shuriken";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces/interfaces";

const weapons = new ContainerModule((bind) => {
    container.bind<Weapon>(TYPES.Weapon).to(Katana);
    container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
});

const warriors = new ContainerModule((bind) => {
    container.bind<Warrior>(TYPES.Warrior).to(Ninja).whenTargetNamed("ninja")
    container.bind<Warrior>(TYPES.Warrior).to(Samurai).whenTargetNamed("samurai");
});

const container = new Container();

container.load(weapons, warriors);

export { container };
