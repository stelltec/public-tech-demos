import { injectable } from "inversify";
import { Document } from "mongoose";
import { DbClient } from "../database/database";
import { dbClient } from "../ioc/decorators";
import { GenericRepository } from "../repositories/generic_repository";
import { Actor } from "../../domain/model/actor";
import { ActorRepository as ActorRepositoryInterface } from "../../domain/interfaces/repositories";

export interface ActorModel extends Actor, Document {}

@injectable()
export class ActorRepository 
    extends GenericRepository<Actor, ActorModel>
    implements ActorRepositoryInterface {

        public constructor(
            @dbClient dbClient: DbClient
        ) {
            super(
                dbClient,
                "Actors",
                {
                    name: String,
                    yearBorn: Number,
                    nationality: String,
                    movies: [String]
                }
            );

        }

}