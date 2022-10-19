import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Card2 from "./components/Card2";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
      rel="stylesheet"
    ></link>
    <Card2 />
    {/* <App /> */}
  </React.StrictMode>
);
