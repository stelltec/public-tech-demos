import { injectable } from "inversify";
import { Document } from "mongoose";
import { DbClient } from "../db_client";
import { dbClient } from "../../../domain/constants/decorators";
import { GenericRepository } from "../repositories/generic_repository";
import { Movie } from "../../../domain/model/movie";
import { MovieRepository as MovieRepositoryInterface } from "../../../domain/interfaces/repositories";

export interface MovieModel extends Movie, Document {}

@injectable()
export class MovieRepository
    extends GenericRepository<Movie, MovieModel>
    implements MovieRepositoryInterface {

        public constructor(
            @dbClient dbClient: DbClient
        ) {
            super(
                dbClient,
                "Movies",
                {
                    title: String,
                    releaseYear: Number,
                    releaseMonth: Number,
                    releaseDay: Number,
                    summary: String,
                    actors: [String],
                    directors: [String]
                }
            );
        }

}
