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

        const moviesWithMatchingTitleOrSummary = await this._movieRepository.findManyByQuery(
            { title: new RegExp(`.*${query}.*`) },
            { summary: new RegExp(`.*${query}.*`) }
        );

        const matchingActors = await this._actorRepository.findManyByQuery(
            { name: new RegExp(`.*${query}.*`) }
        );

        const matchingDirectors = await this._directorRepository.findManyByQuery(
            { name: new RegExp(`.*${query}.*`) }
        );

        const getMovieIds = (arr: Actor[] | Director[]) => {
            return arr.map(i => i.movies).reduce((p, c) => [...p, ...c], []);
        }

        const moviesIdsWithMatchingDirector = getMovieIds(matchingDirectors);

        const movieIdsWithMatchingActor = getMovieIds(matchingActors);

        const movieIdsWithMatchingActorOrDirector = [
            ...moviesIdsWithMatchingDirector,
            ...movieIdsWithMatchingActor
        ];

        const moviesWithMatchingActorOrDirector = await this._movieRepository.findManyById(movieIdsWithMatchingActorOrDirector);

        const matchingMovies = [
            ...moviesWithMatchingTitleOrSummary,
            ...moviesWithMatchingActorOrDirector
        ];

        return matchingMovies;
    }
}
