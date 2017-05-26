import * as request from "supertest";
import { runApp } from "../src/run_app";
import { expect } from "chai";
import { Actor } from "../src/domain/model/actor";

describe("ActorController", () => {

  const expectedActor1: Actor = {
    id: '5921e3954c2ac9f6162a780a',
    name: 'Zoe Saldana',
    yearBorn: 1978,
    nationality: 'US',
    movies: [ '5921ecb14c2ac9f6162a7811' ]
  };

  function assertActorIsEqual(expectedActor: Actor, actualActor: Actor) {
    expect(expectedActor.id).to.eq(actualActor.id);
    expect(expectedActor.name).to.eq(actualActor.name);
    expect(expectedActor.yearBorn).to.eq(actualActor.yearBorn);
    expect(expectedActor.nationality).to.eq(actualActor.nationality);
    expect(expectedActor.movies).to.eq(actualActor.movies);
  }

  it("GET /api/ref/actors", async () => {
    
    const app = await runApp();

    request(app)
      .get("/api/ref/actors")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        expect(err).to.eq(null);
        assertActorIsEqual(expectedActor1, res.body[0]);
      });

  });

  it("GET /api/ref/actors/:id", async () => {

    const app = await runApp();

    request(app)
      .get("/api/ref/actors/5921e3954c2ac9f6162a780a")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        expect(err).to.eq(null);
        assertActorIsEqual(expectedActor1, res.body);
      });

  });

});
