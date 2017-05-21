import { Repository } from "../../../framework/generic_repository";
import { Movie, Actor, Director } from "./entities";

export type MovieRepository = Repository<Movie>;
export type ActorRepository = Repository<Actor>;
export type DirectorRepository = Repository<Director>;
