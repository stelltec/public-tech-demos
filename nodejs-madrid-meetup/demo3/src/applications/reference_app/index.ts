import { ContainerModule } from "inversify";
import { TYPES } from "./constants/types";
import { registerController } from "../../framework/ioc";
import { Repository } from "../../framework/generic_repository";
import { MovieRepository } from "./repositories/movie_repository";
import { MovieController } from "./controllers/movie_controller";
import { Movie } from "./domain/entities";

export const referenceAppModule = new ContainerModule((bind) => {
    registerController(bind, MovieController);
    bind<Repository<Movie>>(TYPES.MovieRepository).to(MovieRepository).inSingletonScope();
});
