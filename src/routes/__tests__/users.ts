import axios from "axios";
import app from "../../server";
import User from "../../models/User";

describe("Users API", () => {
  const rawUser = {
    username: "test",
    email: "test@mail.com",
    password: "123123"
  };

  it("registers a user", async () => {
    expect(true).toBe(false);
    throw new Error("fuck!");
  });
  it("login a user", async () => {});
  it("receives users list", async () => {});
  it("receives an individual user", () => {});
});
