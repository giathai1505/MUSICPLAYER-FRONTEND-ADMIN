import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/api",
});

request.interceptors.request.use(async (req) => {
  let accessToken = localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : null;

  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    //handle error

    return error.response.data;
  }
);

export default request;
