import axios from "axios";
import history from "./history.js";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  timeout: 3500,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

//Add an axios response interceptor
axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        process.env.REACT_APP_BE_URL + "/users/refreshToken"
    ) {
      //redirect to login page
      history.push("/");
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      //check for retry
      originalRequest._retry = true;
      const res = await axios.post("/users/refreshToken");
      if (res.status === 201) {
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);


export default axiosConfig;