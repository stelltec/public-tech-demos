import { injectable } from "inversify";
import { DbClient } from "../../../framework/database";
import { dbClient } from "../../../framework/ioc";
import { GenericRepository } from "../../../framework/generic_repository";
import { Actor } from "../domain/model";

@injectable()
export class ActorRepository extends GenericRepository<Actor> {
    public constructor(
        @dbClient dbClient: DbClient
    ) {
        super(
            "Actors",
            {
                name: String,
                yearBorn: Number,
                nationality: String,
                movies: [String]
            },
            dbClient
        );
    }
}
