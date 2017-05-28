import "reflect-metadata";
import { container } from "./inversify.config";
import { TYPES } from "./constants/types";
import { Warrior } from "./interfaces/interfaces";

const ninja = container.getNamed<Warrior>(TYPES.Warrior, "ninja");
const samurai = container.getNamed<Warrior>(TYPES.Warrior, "samurai");

console.log(`The Ninja ${ninja.fight()}`); // The Ninja cuts!
console.log(`The Samurai ${samurai.fight()}`); // The Samurai hits!
