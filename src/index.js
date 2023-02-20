import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
