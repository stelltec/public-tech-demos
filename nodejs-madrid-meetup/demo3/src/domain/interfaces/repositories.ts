import { Actor } from "../model/actor";
import { Director } from "../model/director";
import { Movie } from "../model/movie";
import { Repository } from "../interfaces/repositories";

export interface Repository<T> {
    save(doc: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    findManyById(ids: string[]): Promise<T[]>;
    findManyByQuery(andQueries?: Partial<T>[], orQueries?: Partial<T>[]): Promise<T[]>;
}

export type MovieRepository = Repository<Movie>;
export type ActorRepository = Repository<Actor>;
export type DirectorRepository = Repository<Director>;
