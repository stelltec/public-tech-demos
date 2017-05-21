import { injectable } from "inversify";
import { DbClient } from "../../../framework/database";
import { dbClient } from "../../../framework/ioc";
import { GenericRepository } from "../../../framework/generic_repository";
import { Movie } from "../domain/model";

@injectable()
export class MovieRepository extends GenericRepository<Movie> {
    public constructor(
        @dbClient dbClient: DbClient
    ) {
        super(
            "Movies",
            {
                title: String,
                releaseYear: Number,
                releaseMonth: Number,
                releaseDay: Number,
                summary: String,
                actors: [String],
                directors: [String]
            },
            dbClient
        );
    }
}
