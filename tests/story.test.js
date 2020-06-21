const request = require("supertest");
const server = require("../server");
const db = require('../config/dbConfig.js');


describe("server", function() {
  describe("server", function() {
    it("should return 401", async () => {
      const res = await request(server).get("/api/story");
      expect(res.status).toBe(401);
    });
    it("should return JSON", function() {
      return request(server)
        .get("/api/story")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });

    describe("Login and view stories", () => {
      beforeEach(async () => {
        await db("users").truncate;
      });
      it("should return a token", async () => {
        res = await request(server)
          .post("/api/auth/login")
          .send({ username: "CrazyCat", password: "test123" });
        expect(res.body.token).toBeTruthy();
      });
      it("should return stories", async () => {
        res = await request(server)
          .get("/api/story")
          .auth("CrazyCat", "test123")
          .set("Authorization", res.body.token);
        expect(res.type).toBe("application/json");
      });
    });

    describe("Login and view stories", () => {
        beforeEach(async () => {
          await db("users").truncate;
        });
        it("should return a token", async () => {
          res = await request(server)
            .post("/api/auth/login")
            .send({ username: "CrazyCat", password: "test123" });
          expect(res.body.token).toBeTruthy();
        });
        it("should return story with that id", async () => {
          res = await request(server)
            .get("/api/story/1")
            .auth("CrazyCat", "test123")
            .set("Authorization", res.body.token);
          expect(res.type).toBe("application/json");
        });
      });

      describe("Login and view stories", () => {
        beforeEach(async () => {
          await db("users").truncate;
        });
        it("should return a token", async () => {
          res = await request(server)
            .post("/api/auth/login")
            .send({ username: "CrazyCat", password: "test123" });
          expect(res.body.token).toBeTruthy();
        });
        it("should return users posts", async () => {
          res = await request(server)
            .get("/api/story/6/story")
            .auth("CrazyCat", "test123")
            .set("Authorization", res.body.token);
          expect(res.type).toBe("application/json");
        });       
      });

      describe("Login and view posts", () => {
        beforeEach(async () => {
          await db("users").truncate;
        });
        it("should return a token", async () => {
          res = await request(server)
            .post("/api/auth/login")
            .send({ username: "CrazyCat", password: "test123" });
          expect(res.body.token).toBeTruthy();
        });
        it("returns 201, post created", async () => {
          await request(server)
              .post('/api/story/6/story')
              .send({
                title: "ice cream!",
                location: "my house",
                description: "This looks so good cant wait to dig in.",
                date: "June 10, 2020",
                image_url: "https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            })
              .set("Authorization", res.body.token)
              .then(res => expect(res.status).toBe(201))
          })
      });

      describe("Login and view stories", () => {
        beforeEach(async () => {
          await db("users").truncate;
        });
        it("should return a token", async () => {
          res = await request(server)
            .post("/api/auth/login")
            .send({ username: "CrazyCat", password: "test123" });
          expect(res.body.token).toBeTruthy();
        });
          it("returns 200, story updated", async () => {
              await request(server)
                  .put('/api/story/1')
                  .send({
                    title: 'Rainy Day',
                    location: 'The Pier',
                    description:'I decided to get out of the office for a bit since it was slow today and walk to the pier. Even though its raining its still a nice day.(✿◠‿◠)',
                    date:'March 17, 2020',
                    image_url:'https://images.unsplash.com/photo-1493503979513-c7463d52a528?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  })
                  .set("Authorization", res.body.token)
                  .then(res => expect(res.status).toBe(200))
              })
      });

      describe("Login and view posts", () => {
        beforeEach(async () => {
          await db("users").truncate;
        });
        it("should return a token", async () => {
          res = await request(server)
            .post("/api/auth/login")
            .send({ username: "CrazyCat", password: "test123" });
          expect(res.body.token).toBeTruthy();
        });
              it("returns 201, post deleted", async () => {
                  await request(server)
                      .delete('/api/story/6')
                      .send({
                        title: "ice cream!test",
                        location: "my house",
                        description: "This looks so good cant wait to dig in.",
                        date: "June 10, 2020",
                        image_url: "https://images.unsplash.com/photo-1543573852-1a71a6ce19bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    })
                      .set("Authorization", res.body.token)
                      .then(res => expect(res.status).toBe(200))
                    });
                  });
                });
              });
