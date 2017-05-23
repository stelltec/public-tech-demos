import { RentService } from "../../domain/interfaces/services";

export class RentController {

    private _rentService: RentService;

    public constructor(
        rentService: RentService
    ) {
        this._rentService = rentService;
    }

}

