import { injectable } from "inversify";
import { Document } from "mongoose";
import { DbClient } from "../db_client";
import { dbClient } from "../../../domain/constants/decorators";
import { GenericRepository } from "../repositories/generic_repository";
import { Account } from "../../../domain/model/account";
import { AccountRepository as AccountRepositoryInterface } from "../../../domain/interfaces/repositories";

export interface AccountModel extends Account, Document {}

@injectable()
export class AccountRepository 
    extends GenericRepository<Account, AccountModel>
    implements AccountRepositoryInterface {

        public constructor(
            @dbClient dbClient: DbClient
        ) {
            super(
                dbClient,
                "Accounts",
                {
                    id: String,
                    username: String,
                    email: String,
                    password: String
                }
            );

        }

}