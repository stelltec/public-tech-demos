import { ContainerModule } from "inversify";
import { MovieController } from "../controllers/movie_controller";
import { DirectorController } from "../controllers/director_controller";
import { ActorController } from "../controllers/actor_controller";
import { MovieRepository } from "../repositories/movie_repository";
import { DirectorRepository } from "../repositories/director_repository";
import { ActorRepository } from "../repositories/actor_repository";
import { registerController } from "./utils";
import { TYPES } from "./types";

export const referenceDataIoCModule = new ContainerModule((bind) => {
    registerController(bind, MovieController);
    registerController(bind, DirectorController);
    registerController(bind, ActorController);
    bind<MovieRepository>(TYPES.MovieRepository).to(MovieRepository).inSingletonScope();
    bind<DirectorRepository>(TYPES.DirectorRepository).to(DirectorRepository).inSingletonScope();
    bind<ActorRepository>(TYPES.ActorRepository).to(ActorRepository).inSingletonScope();
});
