/*
TODO
import { SearchService as SearchServiceInterface } from "../interfaces/services";
import { Movie } from "../model/movie";
import { Actor } from "../model/actor";
import { Director } from "../model/director";
import { movieRepository, actorRepository, directorRepository } from "../constants/decorators";
import { MovieRepository, DirectorRepository, ActorRepository } from "../interfaces/repositories";

export class SearchService implements SearchServiceInterface {

    @movieRepository private _movieRepository: MovieRepository;
    @actorRepository private _actorRepository: ActorRepository;
    @directorRepository private _directorRepository: DirectorRepository;
    
    public async search(query: string): Promise<Movie[]> {

        const moviesWithMatchingTitle = await this._movieRepository.search(query);
        const matchingActors = await this._actorRepository.search(query);
        const matchingDirectors = await this._directorRepository.search(query);

        const getMovieIds = (arr: Actor[] | Director[]) => {
            return arr.map(i => i.movies).reduce((p, c) => [...p, ...c], []);
        }

        const moviesIdsWithMatchingDirector = getMovieIds(matchingDirectors);

        const movieIdsWithMatchingActor = getMovieIds(matchingActors);

        const movieIdsWithMatchingActorOrDirector = [
            ...moviesIdsWithMatchingDirector,
            ...movieIdsWithMatchingActor
        ];

        const moviesWithMatchingActorOrDirector = await this._movieRepository.findById(movieIdsWithMatchingActorOrDirector);

        const matchingMovies = [
            ...moviesWithMatchingTitle,
            ...moviesWithMatchingActorOrDirector
        ];

        return matchingMovies;
    }
}

*/