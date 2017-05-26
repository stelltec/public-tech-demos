import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { actorRepository } from "../../../domain/constants/decorators";
import { ActorRepository } from "../../../domain/interfaces/repositories";

@injectable()
@Controller("/api/ref/actors")
export class ActorController {

    @actorRepository public _actorRepository: ActorRepository;

    @Get("/")
    public async get() {
        return await this._actorRepository.findAll();
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        return await this._actorRepository.findById(id);
    }

}
