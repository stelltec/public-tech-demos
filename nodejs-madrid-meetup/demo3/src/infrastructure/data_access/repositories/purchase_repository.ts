import { injectable } from "inversify";
import { Document } from "mongoose";
import { DbClient } from "../db_client";
import { dbClient } from "../../../domain/constants/decorators";
import { GenericRepository } from "../repositories/generic_repository";
import { Purchase } from "../../../domain/model/purchase";
import { PurchaseRepository as PurchaseRepositoryInterface } from "../../../domain/interfaces/repositories";

export interface PurchaseModel extends Purchase, Document {}

@injectable()
export class PurchaseRepository 
    extends GenericRepository<Purchase, PurchaseModel>
    implements PurchaseRepositoryInterface {

        public constructor(
            @dbClient dbClient: DbClient
        ) {
            super(
                dbClient,
                "Purchases",
                {
                    id: String,
                    userId: String,
                    movieId: String,
                }
            );

        }

}