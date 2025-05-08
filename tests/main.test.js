const request = require("supertest");

const { app, server } = require("../src/main.js");

// beforeEach(() => {
//   console.log("Starting test...");
// });

// afterEach(() => {
//   console.log("Test finished");
// });

afterAll((done) => {
  server.close(done);
});

describe("main.js tests", () => {
  it("should start server", async () => {
    const res = await request(app).get("/"); // Fixed method to lowercase
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello world! This is ExpressJS");
  });

  it("should access api router", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Hello from the API Router!");
  });

  it("should access pages router", async () => {
    const res = await request(app).get("/pages/ping");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Pong");
  });
});
