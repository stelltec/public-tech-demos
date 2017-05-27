import { Movie } from "../model/movie";

export interface RenResult {
    returnDate: Date,
    totalPrice: number;
}

export interface RentService {

    rentMoview(
        accoountId: string,
        movieId: string
    ): Promise<RenResult>;

}

export interface SearchService {

    search(query: string): Promise<Movie[]>;

}
