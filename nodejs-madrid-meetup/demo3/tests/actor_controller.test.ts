import { expect } from "chai";
import { Actor } from "../src/domain/model/actor";
import { httpGet } from "./test_utils"; 

describe("ActorController", () => {

  const expectedActor1: Actor = {
    id: "5921e3954c2ac9f6162a780a",
    name: "Zoe Saldana",
    yearBorn: 1978,
    nationality: "US",
    movies: [ "5921ecb14c2ac9f6162a7811" ]
  };

  function assertActorIsEqual(expectedActor: Actor, actualActor: Actor) {
    expect(expectedActor.id).to.eq(actualActor.id);
    expect(expectedActor.name).to.eq(actualActor.name);
    expect(expectedActor.yearBorn).to.eq(actualActor.yearBorn);
    expect(expectedActor.nationality).to.eq(actualActor.nationality);
    expect(expectedActor.movies[0]).to.eq(actualActor.movies[0]);
  }

  it("GET /api/actors", async () => {
    const body = await httpGet("/api/actors");
    assertActorIsEqual(expectedActor1, body[0]);
  });

  it("GET /api/actors/:id", async () => {
    const body = await httpGet("/api/actors/5921e3954c2ac9f6162a780a");
    assertActorIsEqual(expectedActor1, body);
  });

});
