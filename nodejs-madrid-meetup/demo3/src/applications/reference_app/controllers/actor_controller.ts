import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { actorRepository } from "../constants/decorators";
import { ActorRepository } from "../domain/services";

@injectable()
@Controller("/api/ref/actors")
export class ActorController {

    @actorRepository public _actorRepository: ActorRepository;

    @Get("/")
    public async get() {
        let results = await this._actorRepository.findAll();
        return results ? results.map(r => r.toJSON()) : [];
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        let result = await this._actorRepository.findById(id);
        return result ? result.toJSON() : null;
    }

}
