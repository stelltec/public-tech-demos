import { SearchService } from "../../domain/interfaces/services";

export class RentController {

    private _searchService: SearchService;

    public constructor(
        searchService: SearchService
    ) {
        this._searchService = searchService;
    }

}

