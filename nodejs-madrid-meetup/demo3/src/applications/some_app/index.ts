import { ContainerModule } from "inversify";
import { TYPES } from "./constants/types";
import { UserService } from "./services/user_service";
import { UserController } from "./controllers/user_controller";
import { registerController } from "../../framework/ioc_utils";

export const someAppModule = new ContainerModule((bind) => {
    registerController(bind, UserController);
    bind<UserService>(TYPES.UserService).to(UserService);
});
