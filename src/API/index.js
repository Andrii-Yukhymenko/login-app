import axios from "axios";

const BASE_URL = "https://nestjs-boilerplate-test.herokuapp.com/api/v1";

export default class API {
  static login(data) {
    try {
      axios
        .post(BASE_URL + "/auth/email/login", data)
        .catch((e) => alert('API post request error'));
    } catch (e) {
      console.log(e);
    }
  }
  static register(data) {
    try {
      axios
        .post(BASE_URL + "/auth/email/register", data)
        .catch((e) => alert('API post request error'));
    } catch (e) {
      console.log(e);
    }
  }
  static getUser(data) {
    try {
      axios
        .post(BASE_URL + "/auth/me", data)
        .catch((e) => alert('API post request error'));
    } catch (e) {
      console.log(e);
    }
  }
}
