import { Movie } from "../model/movie";

export interface RenResult {
    returnDate: Date,
    totalPrice: number;
}

export interface RentService {

    rentMoview(
        movieId: string, 
        startDate: Date,
        numberOfDays: number,
        charge: boolean
    ): Promise<RenResult>;

}

export interface SearchService {

    search(query: string): Promise<Movie[]>;

}
