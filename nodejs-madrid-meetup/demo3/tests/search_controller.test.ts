import { expect } from "chai";
import { Movie } from "../src/domain/model/movie";
import { httpGet } from "./test_utils";

describe("SearchController", () => {

  const expectedMovie1: Movie = {
    title: "Star Trek Into Darkness",
    releaseYear: 2013,
    releaseMonth: 5,
    releaseDay: 16,
    summary: "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.",
    directors: [ "5921e1b04c2ac9f6162a7808" ],
    actors: [
      "5921e3954c2ac9f6162a780a",
      "5921e3db4c2ac9f6162a780b",
      "5921e3fa4c2ac9f6162a780c"
    ],
    id: "5921ecb14c2ac9f6162a7811"
  };

  function assertMovieIsEqual(expectedActor: Movie, actualActor: Movie) {
    expect(expectedActor.id).to.eq(actualActor.id);
    expect(expectedActor.title).to.eq(actualActor.title);
    expect(expectedActor.releaseMonth).to.eq(actualActor.releaseMonth);
    expect(expectedActor.releaseDay).to.eq(actualActor.releaseDay);
    expect(expectedActor.directors[0]).to.eq(actualActor.directors[0]);
    expect(expectedActor.actors[0]).to.eq(actualActor.actors[0]);
    expect(expectedActor.actors[1]).to.eq(actualActor.actors[1]);
    expect(expectedActor.actors[2]).to.eq(actualActor.actors[2]);
    expect(expectedActor.id).to.eq(actualActor.id);
  }

  it("GET /api/search/:query", async () => {
    const body = await httpGet("/api/search/zoe");
    assertMovieIsEqual(expectedMovie1, body[0]);
  });

});
