import { server } from "../index";
import request from "supertest";

describe("Get /", () => {
  it("responds with Hello World", done => {
    request(server)
      .get("/")
      .set("Accept", "text/html")
      .expect("Content-Type", "text/plain")
      .expect("Hello World\n")
      .expect(200, done);
  });
});


