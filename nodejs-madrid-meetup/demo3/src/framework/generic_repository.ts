import { injectable, unmanaged } from "inversify";
import { Schema, Document, Model, SchemaDefinition } from "mongoose";
import { dbClient } from "./ioc";
import { DbClient } from "./database";

export interface Repository<T> {
    save(doc: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
}

@injectable()
export class GenericRepository<TModel extends Document> implements Repository<TModel> {

    private _name: string;
    protected Model: Model<TModel>;

    public constructor(
        @unmanaged() name: string,
        @unmanaged() schemaDefinition: SchemaDefinition,
        @dbClient dbClient: DbClient
    ) {
        this._name = name;
        const schema = new Schema(schemaDefinition, { collection: this._name });
        this.Model = dbClient.model<TModel>(this._name, schema);
    }

    // We wrap the mongoose API here so we can use async / await

    public async findAll() {
        return new Promise<TModel[]>((resolve, reject) => {
            this.Model.find((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    public async findById(id: string) {
        return new Promise<TModel>((resolve, reject) => {
            this.Model.findById(id, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

    public async save(doc: TModel) {
        return new Promise<TModel>((resolve, reject) => {
            const instance = new this.Model(doc);
            instance.save((err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

}
