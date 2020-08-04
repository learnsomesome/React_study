import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// axios 默认配置
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;
axios.defaults.headers.common["token"] = "token";

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

