import { injectable, unmanaged } from "inversify";
import { Schema, Document, Model, SchemaDefinition } from "mongoose";
import { DbClient } from "../db_client";
import { dbClient } from "../../../domain/constants/decorators";
import { Repository, Query } from "../../../domain/interfaces/repositories";

@injectable()
export class GenericRepository<TEntity, TModel extends Document>
    implements Repository<TEntity> {
        
        private _name: string;
        private _readMapper: (model: TModel) => TEntity;
        private _writeMapper: (entity: TEntity) => TModel;
        protected Model: Model<TModel>;

        public constructor (
            @dbClient dbClient: DbClient,
            @unmanaged() name: string,
            @unmanaged() schemaDefinition: SchemaDefinition,
            @unmanaged() readMapper?: (model: TModel) => TEntity,
            @unmanaged() writeMapper?: (entity: TEntity) => TModel
        ) {
            this._name = name;
            const schema = new Schema(schemaDefinition, { collection: this._name });
            this.Model = dbClient.model<TModel>(this._name, schema);
            this._readMapper = readMapper ? readMapper : (model: TModel) => model.toJSON() as TEntity;
            this._writeMapper = writeMapper ? writeMapper : (entity: TEntity) => new this.Model(entity);
        }

        // We wrap the mongoose API here so we can use async / await

        public async findAll() {
            return new Promise<TEntity[]>((resolve, reject) => {
                this.Model.find((err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(res.map((r) => this._readMapper(r)));
                });
            });
        }

        public async findById(id: string) {
            return new Promise<TEntity>((resolve, reject) => {
                this.Model.findById(id, (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(this._readMapper(res));
                });
            });
        }

        public async save(doc: TEntity) {
            return new Promise<TEntity>((resolve, reject) => {
                const instance = new this.Model(doc);
                instance.save((err, res) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(this._readMapper(res));
                });
            });
        }

        public findManyById(ids: string[]) {
            return Promise.reject<TEntity[]>("TODO");
        }

        public findManyByQuery(
            andQueries?: Query<TEntity>,
            orQueries?: Query<TEntity>
        ) {
            return Promise.reject<TEntity[]>("TODO");
        }

}
