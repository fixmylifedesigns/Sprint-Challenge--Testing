const request = require("supertest");
const server = require("./server");

describe("server", () => {
  it("sets the environment for testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("GET /", () => {
    it("should return 200 ok", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
  });
});
