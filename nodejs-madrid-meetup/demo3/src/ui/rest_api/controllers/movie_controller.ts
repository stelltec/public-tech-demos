import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { movieRepository } from "../../../domain/constants/decorators";
import { MovieRepository } from "../../../domain/interfaces/repositories";

@injectable()
@Controller("/api/ref/movies")
export class MovieController {

    @movieRepository public _movieRepository: MovieRepository;

    @Get("/")
    public async get() {
        return await this._movieRepository.findAll();
    }

    @Get("/:id")
    public async getById(
        @RequestParam("id") id: string,
    ) {
        return await this._movieRepository.findById(id);
    }

}
