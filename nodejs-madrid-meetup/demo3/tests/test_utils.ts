import * as request from "supertest";
import { runApp } from "../src/index";
import { expect } from "chai";

export async function httpGet(url: string) {
  return new Promise<any>((resolve, reject) => {
      runApp().then(app => {
        request(app)
          .get(url)
          .set("Accept", "application/json")
          .expect(200)
          .end((err, res) => {
            expect(err).to.eq(null);
            resolve(res.body);
          });
      }).catch((e) => {
        expect(e).to.eq(null);
      });
  });
}
