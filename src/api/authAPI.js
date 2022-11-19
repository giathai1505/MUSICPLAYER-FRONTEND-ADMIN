import request from "./axiosClient";

class AuthAPI {
  login = (params) => {
    const url = "/api/auth/login";
    return request.post(url, params);
  };
  register = (params) => {
    console.log(params);
    const url = "/api/auth/register";
    return request.post(url, params);
  };
}

const authAPI = new AuthAPI();
export default authAPI;
