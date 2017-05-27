import { injectable } from "inversify";
import { Controller, Get, RequestParam } from "inversify-express-utils";
import { SearchService } from "../../../domain/interfaces/services";
import { searchService } from "../../../domain/constants/decorators";

@injectable()
@Controller("/api/search")
export class SearchController {

    @searchService private _searchService: SearchService;

    @Get("/:query")
    public async get(
        @RequestParam("query") query: string,
    ) {
        return this._searchService.search(query);
    }

}

