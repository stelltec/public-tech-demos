import { ContainerModule } from "inversify";
import { MovieController } from "../../ui/rest_api/movie_controller";
import { DirectorController } from "../../ui/rest_api/director_controller";
import { ActorController } from "../../ui/rest_api/actor_controller";
import { MovieRepository } from "../data_access/repositories/movie_repository";
import { DirectorRepository } from "../data_access/repositories/director_repository";
import { ActorRepository } from "../data_access/repositories/actor_repository";
import { registerController } from "./utils";
import { TYPES } from "../../domain/constants/types";

export const referenceDataIoCModule = new ContainerModule((bind) => {
    registerController(bind, MovieController);
    registerController(bind, DirectorController);
    registerController(bind, ActorController);
    bind<MovieRepository>(TYPES.MovieRepository).to(MovieRepository).inSingletonScope();
    bind<DirectorRepository>(TYPES.DirectorRepository).to(DirectorRepository).inSingletonScope();
    bind<ActorRepository>(TYPES.ActorRepository).to(ActorRepository).inSingletonScope();
});
