import { Movie } from "../model/movie";

export interface SearchService {

    search(query: string): Promise<Movie[]>;

}
