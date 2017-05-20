import { injectable, inject } from "inversify";
import { Controller, Get } from "inversify-express-utils";
import { TYPES } from "../constants/types";

@injectable()
@Controller("/user")
export class UserController {

    @inject(TYPES.UserService) public _userService: any;

    @Get("/")
    public async get() {
        return await this._userService.get();
    }

}
