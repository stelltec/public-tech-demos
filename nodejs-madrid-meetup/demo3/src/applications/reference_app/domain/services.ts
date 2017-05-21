import { Repository } from "../../../framework/interfaces";
import { Movie, Actor, Director } from "./model";

export type MovieRepository = Repository<Movie>;
export type ActorRepository = Repository<Actor>;
export type DirectorRepository = Repository<Director>;
