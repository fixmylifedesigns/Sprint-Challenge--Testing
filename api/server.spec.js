const request = require("supertest");
const server = require("./server");

describe("server", () => {
  //   it("sets the environment to testing", () => {
  //     expect(process.env.DB_ENV).toBe("testing");
  //   });
  describe("GET /", () => {
    it("should return 200 ok", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    it("should return json", async () => {
      const response = await request(server).get("/");
      expect(response.body).toEqual({ api: "up" });
    });

    describe("GET /games", () => {
      it("should return 200 ok", () => {
        return request(server)
          .get("/games")
          .expect(200);
      });
      it("should return an array", async () => {
        const array = await request(server).get("/games");

        expect(Array.isArray(array.body)).toBe(true);
      });
    });
  });
  describe("Post /", () => {
    it("should return 422", () => {
      return request(server)
        .post("/games")
        .send({ title: "Pacman" });

      expect(request(server)).toBe(422);
    });
    it("should return 201", () => {
      return request(server)
        .post("/games")
        .send({ title: "pacman", genre: "arcade" });

      expect(request(server)).toBe(201);
    });
    it("should return post message", async () => {
        const res = await request(server)
          .post("/games")
          .send({ title: "pacman", genre: "arcade" });
  
        expect(res.body).toEqual({ message: `pacman has been added to our library` });
      });
  });
});
