import { ContainerModule } from "inversify";
import { TYPES } from "./constants/types";
import { registerController } from "../../framework/ioc";
import { Repository } from "../../framework/interfaces";
import { Movie, Director, Actor } from "./domain/model";
import { MovieController } from "./controllers/movie_controller";
import { DirectorController } from "./controllers/director_controller";
import { ActorController } from "./controllers/actor_controller";
import { MovieRepository } from "./repositories/movie_repository";
import { DirectorRepository } from "./repositories/director_repository";
import { ActorRepository } from "./repositories/actor_repository";

export const referenceAppModule = new ContainerModule((bind) => {
    registerController(bind, MovieController);
    registerController(bind, DirectorController);
    registerController(bind, ActorController);
    bind<Repository<Movie>>(TYPES.MovieRepository).to(MovieRepository).inSingletonScope();
    bind<Repository<Director>>(TYPES.DirectorRepository).to(DirectorRepository).inSingletonScope();
    bind<Repository<Actor>>(TYPES.ActorRepository).to(ActorRepository).inSingletonScope();
});
