import request from "./axiosClient";

class AuthAPI {
  login = (params) => {
    const url = "/auth/login-admin";
    return request.post(url, params);
  };
}

const authAPI = new AuthAPI();
export default authAPI;
