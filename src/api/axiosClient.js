import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,LINK",
  },
});
// axiosClient.interceptors.request.use(async (req) => {
//   let authTokens = localStorage.getItem("authTokens")
//     ? JSON.parse(localStorage.getItem("authTokens"))
//     : null;

//   if (authTokens) {
//     req.headers.Authorization = `Bearer ${authTokens.accessToken}`;
//   }
//   return req;
// });

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     //handle error
//     throw error;
//   }
// );

export default request;
