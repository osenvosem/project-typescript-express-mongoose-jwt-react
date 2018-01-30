import mongoose from "mongoose";
import config from "config";
import crypto from "crypto";
import util from "util";
import User from "../index";

const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2 = util.promisify(crypto.pbkdf2);

beforeAll(() => {
  return mongoose.connect("mongodb://localhost/userModelTest");
});

afterAll(async () => {
  const conn = mongoose.connection;
  await conn.dropDatabase();
  await conn.close();
});

describe("User model", () => {
  const rawUser = {
    username: "John",
    email: "john@mail.com",
    password: "123123"
  };
  let persistedUser = null;
  const { length, iterations, algorithm } = config.get("crypto");

  beforeAll(async () => {
    persistedUser = await User.create(rawUser);
  });

  it("generates salt of correct length", async () => {
    const randomBase64 = (await randomBytes(length)).toString("base64");
    expect(randomBase64).toHaveLength(persistedUser.salt.length);
  });

  it("generates correct hash", async () => {
    const testHash = await pbkdf2(
      rawUser.password,
      persistedUser.salt,
      iterations,
      length,
      algorithm
    );
    expect(testHash.toString("base64")).toBe(persistedUser.password);
  });

  it("`checkPassword()` works as intended", async () => {
    const isCorrect = await persistedUser.checkPassword(rawUser.password);
    expect(isCorrect).toBe(true);
  });
});
