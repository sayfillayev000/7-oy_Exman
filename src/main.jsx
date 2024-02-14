<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/assets/style/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import App from "./App.jsx";
import "./assets/styles/index.scss";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./store/index.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
        <App />
    </Provider>
  </>
>>>>>>> d45308117bc746f9e583ed545f1ac1cc4046be62
);
