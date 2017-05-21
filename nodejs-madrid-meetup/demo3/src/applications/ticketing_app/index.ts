import { ContainerModule } from "inversify";
// import { TYPES } from "./constants/types";
// import { MovieRepository } from "./repositories/movie_repository";
// import { MovieController } from "./controllers/movie_controller";
// import { registerController } from "../../framework/ioc";

export const ticketingAppModule = new ContainerModule((bind) => {
    // registerController(bind, MovieController);
    // bind<MovieRepository>(TYPES.MovieRepository).to(MovieRepository);
});
