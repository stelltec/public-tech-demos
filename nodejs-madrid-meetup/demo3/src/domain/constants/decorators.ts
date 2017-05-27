import { inject } from "inversify";
import { TYPES } from "./types";

export const dbClient = inject(TYPES.DbClient);
export const movieRepository = inject(TYPES.MovieRepository);
export const actorRepository = inject(TYPES.ActorRepository);
export const directorRepository = inject(TYPES.DirectorRepository);
export const searchService = inject(TYPES.SearchService);
export const rentService = inject(TYPES.RentService);
