import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

//navigation
import { useNavigate } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store/store";
import store from "./redux/store/store";

//axios
import axios from "axios";

//axios defaults
axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
axios.defaults.timeout = 3500;
axios.defaults.headers.post["Content-Type"] = "application/json";

//Add an axios response interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        process.env.REACT_APP_BE_URL + "/users/refreshToken"
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post("/users/refreshToken").then((res) => {
        if (res.status === 201) {
          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();