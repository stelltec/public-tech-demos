import { ContainerModule } from "inversify";

// Interfaces & Types
import { TYPES } from "./domain/constants/types";
import {
    MovieRepository as MovieRepositoryInterface,
    ActorRepository as ActorRepositoryInterface,
    DirectorRepository as DirectorRepositoryInterface,
    AccountRepository as AccountRepositoryInterface
} from "./domain/interfaces/repositories";

import { SearchService as SearchServiceInterface } from "./domain/interfaces/services";

// Controllers
import { MovieController } from "./ui/rest_api/controllers/movie_controller";
import { DirectorController } from "./ui/rest_api/controllers/director_controller";
import { ActorController } from "./ui/rest_api/controllers/actor_controller";
import { SecureController } from "./ui/rest_api/controllers/secure_controller";
import { SearchController } from "./ui/rest_api/controllers/search_controller";

// Repositories
import { MovieRepository } from "./infrastructure/data_access/repositories/movie_repository";
import { DirectorRepository } from "./infrastructure/data_access/repositories/director_repository";
import { AccountRepository } from "./infrastructure/data_access/repositories/account_repository";
import { ActorRepository } from "./infrastructure/data_access/repositories/actor_repository";

// Services
import { SearchService } from "./domain/services/search_service";

// Infrastructure & Utils
import { registerController } from "./infrastructure/ioc/utils";

export const referenceDataIoCModule = new ContainerModule((bind) => {

    // Controllers
    registerController(bind, MovieController);
    registerController(bind, DirectorController);
    registerController(bind, ActorController);
    registerController(bind, SecureController);
    registerController(bind, SearchController);

    // Repositories
    bind<MovieRepositoryInterface>(TYPES.MovieRepository)
        .to(MovieRepository).inSingletonScope();

    bind<DirectorRepositoryInterface>(TYPES.DirectorRepository)
        .to(DirectorRepository).inSingletonScope();

    bind<ActorRepositoryInterface>(TYPES.ActorRepository)
        .to(ActorRepository).inSingletonScope();

    bind<AccountRepositoryInterface>(TYPES.AccountRepository)
        .to(AccountRepository).inSingletonScope();

    // Services
    bind<SearchServiceInterface>(TYPES.SearchService)
        .to(SearchService).inSingletonScope();

});
