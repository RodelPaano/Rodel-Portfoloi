import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ use HashRouter for GitHub Pages
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </HashRouter>
);
