import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FacebookPixel from "./sections/FacebookPixel.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FacebookPixel />
    <App />
  </StrictMode>,
);
