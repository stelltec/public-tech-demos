import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { movieRepository } from "../constants/decorators";
import { Repository } from "../../../framework/generic_repository";
import { Movie } from "../domain/entities";

@injectable()
@Controller("/api/ref/movie")
export class MovieController {

    @movieRepository public _movieRepository: Repository<Movie>;

    @Get("/")
    public async get() {
        let results = await this._movieRepository.findAll();
        return results ? results.map(r => r.toJSON()) : [];
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        let result = await this._movieRepository.findById(id);
        return result ? result.toJSON() : null;
    }

}
