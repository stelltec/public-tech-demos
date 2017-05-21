import { injectable } from "inversify";
import { DbClient } from "../../../framework/database";
import { dbClient } from "../../../framework/ioc";
import { GenericRepository } from "../../../framework/generic_repository";
import { Director } from "../domain/model";

@injectable()
export class DirectorRepository extends GenericRepository<Director> {
    public constructor(
        @dbClient dbClient: DbClient
    ) {
        super(
            "Directors",
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
