import { injectable } from "inversify";
import { Controller, Get, RequestParam, RequestHeaders } from "inversify-express-utils";
import { RentService } from "../../../domain/interfaces/services";
import { rentService } from "../../../domain/constants/decorators";

@injectable()
@Controller("/api/rent")
export class RentController {

    @rentService private _rentService: RentService;

    @Get("/:id")
    public get(
        @RequestParam("id") movieId: string,
        @RequestHeaders("x-auth-token") accountId: string
    ) {
        this._rentService.rentMoview(movieId, accountId);
    }

}
