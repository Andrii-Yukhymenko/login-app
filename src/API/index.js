import axios from "axios";

const BASE_URL = "https://nestjs-boilerplate-test.herokuapp.com/api/v1";

export default class API {
  static async login(data) {
      const config = {
        method: "post",
        url: `${BASE_URL}/auth/email/login`,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        data: JSON.stringify(data),
      };
      return await axios(config);
  }
  static async register(data) {
      const config = {
        method: "post",
        url: `${BASE_URL}/auth/email/register`,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        data: JSON.stringify(data),
      };
      return await axios(config);
  }
  static async getUserData(data) {
    try {
      const config = {
        method: "get",
        url: `${BASE_URL}/auth/me`,
        headers: {
          Authorization: `Bearer ${data}`,
        },
      };
      return await axios(config);
    } catch (e) {
      console.log(e);
    }
  }
  static async setUserData(data) {
    data =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc3MSwicm9sZSI6eyJpZCI6MiwibmFtZSI6IlVzZXIiLCJfX2VudGl0eSI6IlJvbGUifSwiaWF0IjoxNjQ1Mzk2Mjg3LCJleHAiOjE4MTgxOTYyODd9.yFR2TovdWZEE5M81hVhB2ZERVVJa95XRST_7-SUjpko";
    try {
      const config = {
        method: "post",
        url: `${BASE_URL}/auth/me`,
        headers: {
          Authorization: `Bearer ${data}`,
        },
      };
      await axios(config);
    } catch (e) {
      console.log(e);
    }
  }
}
