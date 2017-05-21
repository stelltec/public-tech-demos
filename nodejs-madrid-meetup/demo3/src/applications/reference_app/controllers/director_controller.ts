import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { directorRepository } from "../constants/decorators";
import { DirectorRepository } from "../domain/services";

@injectable()
@Controller("/api/ref/directors")
export class DirectorController {

    @directorRepository public _directorRepository: DirectorRepository;

    @Get("/")
    public async get() {
        let results = await this._directorRepository.findAll();
        return results ? results.map(r => r.toJSON()) : [];
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        let result = await this._directorRepository.findById(id);
        return result ? result.toJSON() : null;
    }

}
