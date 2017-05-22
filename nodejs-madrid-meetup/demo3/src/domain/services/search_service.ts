import { SearchService as SearchServiceInterface } from "../interfaces/services";
import { Movie } from "../model/movie";

export class SearchService implements SearchServiceInterface {
    public search(query: string) {
        // search by title
        // search by actor name
        // search by director name
        // return movies only
        return Promise.resolve<Movie[]>([]);
    }
}
