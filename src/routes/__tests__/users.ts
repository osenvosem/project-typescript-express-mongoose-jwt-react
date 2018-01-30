import axios from "axios";
import config from "config";
import mongoose from "mongoose";
import app from "../../server";
import User from "../../models/User";
import cookieParser from "cookie-parser";

const userApi = axios.create({
  baseURL: `http://127.0.0.1:${config.get("port")}/api/v1/users/`
});

let server = null;

beforeAll(done => {
  server = app.listen(config.get("port"), done);
});

afterAll(done => {
  server.close(done);
  mongoose.connection.dropDatabase();
});

describe("Users API", () => {
  afterEach(() => {
    return User.deleteMany({});
  });

  const rawUser = {
    username: "test",
    email: "test@mail.com",
    password: "123123"
  };

  const getAccessToken = res => res.headers["set-cookie"][0].split("=")[1];

  it("registers a user", async () => {
    const { password: _, ...localUser } = rawUser;
    const res = await userApi.post(`registration`, rawUser);
    const dbUser = await User.findById(res.data._id).lean();

    expect(res.status).toBe(200);
    expect(getAccessToken(res)).toBeDefined();
    expect(res.data).toMatchObject(localUser);
    expect(dbUser).toMatchObject(localUser);
  });

  it("authenticates a user", async () => {
    await userApi.post("registration", rawUser);
    const { email: _, ...loginUser } = rawUser;
    const loginRes = await userApi.post("login", loginUser);

    expect(loginRes.status).toBe(200);
    expect(getAccessToken(loginRes)).toBeDefined();
  });

  it("receives users list", async () => {
    const usernames = ["john", "maria", "viktor"];
    const regResponses = await Promise.all(
      usernames.map(username => {
        return userApi.post("registration", {
          username,
          email: `${username}@mail.com`,
          password: "123123"
        });
      })
    );
    const res = await userApi.get("/", {
      headers: { Cookie: regResponses[0].headers["set-cookie"] }
    });
    expect(res.status).toBe(200);
    expect(res.data).toHaveLength(usernames.length);
    res.data.forEach(user => expect(user).toHaveProperty("username"));
  });

  it("receives an individual user", async () => {
    const regRes = await userApi.post("registration", rawUser);
    expect(regRes.status).toBe(200);

    const res = await userApi.get(regRes.data._id, {
      headers: {
        Cookie: regRes.headers["set-cookie"]
      }
    });

    expect(res.status).toBe(200);
    expect(res.data._id).toBe(regRes.data._id);
  });
});
