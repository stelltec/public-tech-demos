import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { directorRepository } from "../../domain/constants/decorators";
import { DirectorRepository } from "../../domain/interfaces/repositories";

@injectable()
@Controller("/api/ref/directors")
export class DirectorController {

    @directorRepository public _directorRepository: DirectorRepository;

    @Get("/")
    public async get() {
        return await this._directorRepository.findAll();
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        return await this._directorRepository.findById(id);
    }

}
